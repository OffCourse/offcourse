import { ValueCase, OpenBadgeClass, Issuer } from "@types";

const createIssuer = ({ issuerId, ...issuerData }: Issuer) => ({
  id: issuerId,
  ...issuerData
});

const createBadgeClass: (args: {
  valueCase: ValueCase;
  issuer: Issuer;
}) => OpenBadgeClass = ({ issuer: rawIssuer, valueCase }) => {
  const { valueCaseId, image, name, tags, description, narrative } = valueCase;
  const issuer = createIssuer(rawIssuer);
  return {
    type: "BadgeClass",
    id: `urn:uuid:${valueCaseId}`,
    name,
    tags,
    description,
    image,
    criteria: { narrative },
    issuer
  };
};

export default createBadgeClass;
