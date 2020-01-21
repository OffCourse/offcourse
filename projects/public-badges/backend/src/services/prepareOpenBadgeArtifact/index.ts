import crypto from "crypto";
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

const hashEmailAddress = (email: string, salt: string) => {
  var sum = crypto.createHash("sha256");
  sum.update(email + salt);
  return "sha256$" + sum.digest("hex");
};

import { registry, valueCase as valueCaseStore } from "@stores";

export type InputEvent = BadgeIssuanceApprovedEvent;
export type OutputEvent = OpenBadgeArtifactCreated;

const yearInSeconds = 31556926;

const verification = {
  type: "signedBadge",
  creator: "https://openbadges.com/public-key.pem"
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
      id: "https://publicbadges.com/public-badges.svg",
      type: "Profile",
      name: "Public Spaces",
      email: "contact@publicspaces.net"
    }
  };
};

const createRecipient = ({ email }: { email: string }) => {
  const salt = "PUBLIC BADGES";
  const identity = hashEmailAddress(email, salt);
  return {
    type: "email",
    hashed: true,
    identity,
    salt
  };
};

const createArtifact: (args: {
  badgeInstance: ApprovedPublicBadge;
  valueCase: ValueCase;
  organization: Organization;
}) => OpenBadge = ({ badgeInstance, valueCase, organization }) => {
  const { badgeId, evidence: pbEvidence } = badgeInstance;
  const badge = createBadgeClass({ valueCase });
  const recipient = createRecipient(organization.contact);
  const evidence = pbEvidence.map(({ proofId, narrative, ...proof }) => ({
    ...proof,
    id: `urn:uuid:${proofId}`,
    narrative: narrative.join("\n")
  }));
  return {
    "@context": "https://w3id.org/openbadges/v2",
    id: `urn:uuid:${badgeId}`,
    type: "Assertion",
    issuedOn: new Date(Date.now()).toISOString(),
    expires: new Date(Date.now() + yearInSeconds).toISOString(),
    recipient,
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
      const { recipientId, valueCaseId, ...rest } = detail;
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
        detail: { ...rest, recipientId, valueCaseId, artifact }
      };
    }
  }
};

export default prepareOpenBadgeArtifact;
