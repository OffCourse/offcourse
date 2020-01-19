import {
  PublicBadgesEventType as EV,
  BadgeIssuanceApprovedEvent,
  OpenBadgeArtifactCreated,
  PublicBadgesHandler,
  ApprovedPublicBadge,
  ValueCase,
  OpenBadge,
  Organization,
  OpenBadgeClass
} from "@types";

import { registry, valueCase as valueCaseStore } from "@stores";

export type InputEvent = BadgeIssuanceApprovedEvent;
export type OutputEvent = OpenBadgeArtifactCreated;

const yearInSeconds = 31556926;
const verification = {
  type: "signedBadge",
  creator: "https://openbadges.com/publicKey.json"
};

const createBadgeClass: (args: { valueCase: ValueCase }) => OpenBadgeClass = ({
  valueCase
}) => {
  const { valueCaseId, image, name, tags, description, narrative } = valueCase;
  return {
    type: "BadgeClass",
    id: `urn:uuid:${valueCaseId}`,
    name,
    tags,
    description,
    image,
    criteria: { narrative },
    issuer: {
      id:
        "https://pngimage.net/wp-content/uploads/2018/06/imagenes-random-png-3.png",
      type: "Profile",
      name: "Public Spaces",
      email: "contact@publicspaces.net"
    }
  };
};

const createArtifact: (args: {
  badgeInstance: ApprovedPublicBadge;
  valueCase: ValueCase;
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
    id: `urn:uuid:${badgeId}`,
    type: "Assertion",
    recipient: {
      type: "email",
      hashed: false,
      identity: "sander@waag.org"
    },
    issuedOn: new Date(Date.now()).toISOString(),
    expires: new Date(Date.now() + yearInSeconds).toISOString(),
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
      if (!valueCase) {
        throw "invalid badge, no corresponding value case";
      }
      const artifact = createArtifact({
        badgeInstance: detail,
        valueCase,
        organization
      });
      return {
        detailType: EV.OPEN_BADGES_ARTIFACT_CREATED,
        detail: { recipientId, valueCaseId, artifact }
      };
    }
  }
};

export default prepareOpenBadgeArtifact;
