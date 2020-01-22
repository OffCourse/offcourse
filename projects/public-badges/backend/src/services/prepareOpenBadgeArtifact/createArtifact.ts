import {
  ApprovedPublicBadge,
  ValueCase,
  Proof,
  OpenBadge,
  Organization,
  OpenBadgeClass,
  Issuer
} from "@types";
import { uuidToUrn, hashEmailAddress, createISODate } from "./helpers";

const yearInSeconds = 31556926;

const createIssuer = ({ issuerId, ...issuerData }: Issuer) => ({
  id: issuerId,
  ...issuerData
});

const createProof = ({ proofId, narrative, ...proof }: Proof) => ({
  ...proof,
  id: uuidToUrn(proofId),
  narrative: narrative.join("\n")
});

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

const createBadgeClass: (args: {
  valueCase: ValueCase;
  issuer: Issuer;
}) => OpenBadgeClass = ({ issuer: rawIssuer, valueCase }) => {
  const { valueCaseId, image, name, tags, description, narrative } = valueCase;
  const issuer = createIssuer(rawIssuer);
  return {
    type: "BadgeClass",
    id: uuidToUrn(valueCaseId),
    name,
    tags,
    description,
    image,
    criteria: { narrative },
    issuer
  };
};

const createVerification = () => ({
  type: "signedBadge",
  creator: "https://openbadges.com/public-key.pem"
});

const createArtifact: (args: {
  badgeInstance: ApprovedPublicBadge;
  valueCase: ValueCase;
  organization: Organization;
  issuer: Issuer;
}) => OpenBadge = ({ badgeInstance, valueCase, organization, issuer }) => {
  const { badgeId, evidence } = badgeInstance;
  return {
    "@context": "https://w3id.org/openbadges/v2",
    id: uuidToUrn(badgeId),
    type: "Assertion",
    verification: createVerification(),
    recipient: createRecipient(organization.contact),
    badge: createBadgeClass({ valueCase, issuer }),
    issuedOn: createISODate(),
    expires: createISODate(yearInSeconds),
    evidence: evidence.map(createProof)
  };
};

export default createArtifact;
