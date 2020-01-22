import { Proof } from "@types";
const createProof = ({ proofId, narrative, ...proof }: Proof) => ({
  ...proof,
  id: `urn:uuid:${proofId}`,
  narrative: narrative.join("\n")
});

export default createProof;
