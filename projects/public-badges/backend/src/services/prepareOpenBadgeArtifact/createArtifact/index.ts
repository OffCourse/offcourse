import {
  ApprovedPublicBadge,
  ValueCase,
  OpenBadge,
  Organization,
  Issuer
} from "@types";
import createBadgeClass from "./createBadgeClass";
import createRecipient from "./createRecipient";

const yearInSeconds = 31556926;

const verification = {
  type: "signedBadge",
  creator: "https://openbadges.com/public-key.pem"
};

const createArtifact: (args: {
  badgeInstance: ApprovedPublicBadge;
  valueCase: ValueCase;
  organization: Organization;
  issuer: Issuer;
}) => OpenBadge = ({ badgeInstance, valueCase, organization, issuer }) => {
  const { badgeId, evidence: pbEvidence } = badgeInstance;
  const badge = createBadgeClass({ valueCase, issuer });
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

export default createArtifact;
