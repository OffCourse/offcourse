import {
  PublicBadgesEventType as EV,
  BadgeIssuanceApprovedEvent,
  BadgeIssuanceRejectedEvent,
  ApprovedPublicBadge,
  RejectedPublicBadge,
  ValueCase,
  PublicBadgesHandler,
  PublicBadgeStatus,
  Proof,
  Organization,
  BadgeIssuanceRequestedEvent
} from "@types";

import { registry, valueCase as valueCaseStore } from "@stores";
import uuid from "uuid/v1";
import { slugify } from "voca";

export type InputEvent = BadgeIssuanceRequestedEvent;
export type OutputEvent =
  | BadgeIssuanceApprovedEvent
  | BadgeIssuanceRejectedEvent;

enum ScenarioOutcome {
  PASSED = "PASSED",
  FAILED = "FAILED"
}

const checkScenarios: (args: {
  valueCase: ValueCase;
  organization: Organization;
}) => Promise<{ outcome: ScenarioOutcome; evidence: Proof[] }> = async ({
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
    case EV.BADGE_ISSUANCE_REQUESTED: {
      const { recipientId, valueCaseId } = detail;
      const organization = await registry.fetch({
        organizationId: recipientId
      });
      const valueCase = await valueCaseStore.fetch({
        valueCaseId
      });
      if (!valueCase) {
        throw "invalid badge, no corresponding value case";
      }
      const { outcome, evidence } = await checkScenarios({
        valueCase,
        organization
      });
      switch (outcome) {
        case ScenarioOutcome.PASSED: {
          const badge: ApprovedPublicBadge = {
            ...detail,
            evidence,
            status: PublicBadgeStatus.Approved
          };
          return {
            detailType: EV.BADGE_ISSUANCE_APPROVED,
            detail: badge
          };
        }
        case ScenarioOutcome.FAILED: {
          const badge: RejectedPublicBadge = {
            ...detail,
            evidence,
            status: PublicBadgeStatus.Rejected
          };
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
