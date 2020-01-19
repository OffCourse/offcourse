import { ProofResolvers } from "@types";

const Proof: ProofResolvers = {
  proofId({ proofId }) {
    return proofId;
  },
  name({ name }) {
    return name;
  },
  genre({ genre }) {
    return genre;
  },
  description({ description }) {
    return description;
  },
  narrative({ narrative }) {
    return narrative;
  }
};

export { Proof };
