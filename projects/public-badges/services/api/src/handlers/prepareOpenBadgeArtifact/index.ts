import {
  PublicBadgesEventType as EV,
  BadgeIssuanceApprovedEvent,
  OpenBadgeArtifactCreated
} from "../../types/events.js";
import {
  PublicBadgesHandler,
  ApprovedPublicBadgeProxy,
  ValueCaseProxy
} from "../../types";
import {
  OpenBadge,
  Organization,
  OpenBadgeClass
} from "../../generated/graphql";
import { registry, valueCase as valueCaseStore } from "../../stores";

export type InputEvent = BadgeIssuanceApprovedEvent;
export type OutputEvent = OpenBadgeArtifactCreated;

const verification = {
  type: "signedBadge",
  creator: "https://openbadges.com/publicKey.json"
};

const createBadgeClass: (args: {
  valueCase: ValueCaseProxy;
}) => OpenBadgeClass = ({ valueCase }) => {
  const { valueCaseId, name, tags, description, narrative } = valueCase;
  return {
    type: "BadgeClass",
    id: valueCaseId,
    name,
    tags,
    description,
    criteria: { narrative },
    issuer: {
      id: "https://publicbadges.com/registry/publicspaces",
      type: "Profile",
      name: "Public Spaces",
      email: "contact@publicspaces.net"
    }
  };
};

const createArtifact: (args: {
  badgeInstance: ApprovedPublicBadgeProxy;
  valueCase: ValueCaseProxy;
  organization: Organization;
}) => OpenBadge = ({ badgeInstance, valueCase }) => {
  const { badgeId, evidence: pbEvidence } = badgeInstance;
  const badge = createBadgeClass({ valueCase });
  const evidence = pbEvidence.map(({ proofId, narrative, ...proof }) => {
    return {
      id: `urn:uuid:${proofId}`,
      ...proof,
      narrative: narrative.join("\n")
    };
  });
  return {
    "@context": "https://w3id.org/openbadges/v2",
    id: badgeId,
    type: "Assertion",
    recipient: {
      type: "email",
      identity: "sander@waag.org"
    },
    issuedOn: `${Date.now()}`,
    expires: "2022-10-31T23:59:59.000Z",
    verification,
    badge,
    evidence
  };
};

const prepareOpenBadgeArtifact: PublicBadgesHandler<
  InputEvent,
  OutputEvent
> = async ({ detailType, detail }) => {
  switch (detailType) {
    case EV.BADGE_ISSUANCE_APPROVED: {
      const { recipientId, valueCaseId } = detail;
      const organization = await registry.fetch({
        organizationId: recipientId
      });
      const valueCase = await valueCaseStore.fetch({
        valueCaseId
      });
      const artifact = createArtifact({
        badgeInstance: detail,
        valueCase,
        organization
      });
      return {
        detailType: EV.OPEN_BADGES_ARTIFACT_CREATED,
        detail: artifact
      };
    }
  }
};

export default prepareOpenBadgeArtifact;
