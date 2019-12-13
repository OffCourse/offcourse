import { ProofResolvers } from "../generated/graphql";

const Proof: ProofResolvers = {
  proofId({ id }) {
    return id.replace(/urn:uuid:/, "");
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

export default Proof;
