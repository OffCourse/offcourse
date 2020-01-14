import putBadge from "./putBadge";
import {
  PublicBadgesEventType as EV,
  BadgeIssuanceApprovalRequestedEvent,
  BadgeIssuanceApprovedEvent,
  BadgeIssuanceRejectedEvent
} from "../../types/events.js";
import {
  PublicBadgesHandler,
  ApprovedPublicBadgeProxy,
  PendingPublicBadgeProxy,
  RejectedPublicBadgeProxy
} from "../../types";
import { PublicBadgeStatus, Proof } from "../../generated/graphql";
import uuid from "uuid/v1";
import { slugify } from "voca";

export type InputEvent = BadgeIssuanceApprovalRequestedEvent;

export type OutputEvent =
  | BadgeIssuanceApprovedEvent
  | BadgeIssuanceRejectedEvent;

enum ScenarioOutcome {
  PASSED = "PASSED",
  FAILED = "FAILED"
}

const checkScenarios: (
  badge: PendingPublicBadgeProxy
) => Promise<{ outcome: ScenarioOutcome; evidence: Proof[] }> = async ({
  valueCase
}) => {
  const { scenarios } = valueCase;
  const evidence = scenarios.map(({ description, narrative }) => {
    return {
      proofId: uuid(),
      genre: "Gherkin Scenario",
      name: slugify(description),
      description,
      narrative
    };
  });
  return {
    outcome: ScenarioOutcome.PASSED,
    evidence
  };
};

const runValueCaseScenarios: PublicBadgesHandler<
  InputEvent,
  OutputEvent
> = async ({ detailType, detail }) => {
  switch (detailType) {
    case EV.BADGE_ISSUANCE_APPROVAL_REQUESTED: {
      const { recipientId, valueCaseId } = detail;
      const id = `${recipientId}/badges/${valueCaseId}`;
      const { outcome, evidence } = await checkScenarios(detail);
      switch (outcome) {
        case ScenarioOutcome.PASSED: {
          const badge: ApprovedPublicBadgeProxy = {
            ...detail,
            evidence,
            status: PublicBadgeStatus.Approved
          };
          await putBadge(id, badge);
          return {
            detailType: EV.BADGE_ISSUANCE_APPROVED,
            detail: badge
          };
        }
        case ScenarioOutcome.FAILED: {
          const badge: RejectedPublicBadgeProxy = {
            ...detail,
            evidence,
            status: PublicBadgeStatus.Rejected
          };
          await putBadge(id, badge);
          return {
            detailType: EV.BADGE_ISSUANCE_REJECTED,
            detail: badge
          };
        }
      }
    }
  }
};

export default runValueCaseScenarios;
