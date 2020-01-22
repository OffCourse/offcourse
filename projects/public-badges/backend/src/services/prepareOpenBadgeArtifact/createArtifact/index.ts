import {
  ApprovedPublicBadge,
  ValueCase,
  OpenBadge,
  Organization,
  Issuer
} from "@types";
import createBadgeClass from "./createBadgeClass";
import createRecipient from "./createRecipient";
import createProof from "./createProof";

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
  const { badgeId, evidence } = badgeInstance;
  return {
    "@context": "https://w3id.org/openbadges/v2",
    id: `urn:uuid:${badgeId}`,
    type: "Assertion",
    verification,
    issuedOn: new Date(Date.now()).toISOString(),
    expires: new Date(Date.now() + yearInSeconds).toISOString(),
    recipient: createRecipient(organization.contact),
    badge: createBadgeClass({ valueCase, issuer }),
    evidence: evidence.map(createProof)
  };
};

export default createArtifact;
