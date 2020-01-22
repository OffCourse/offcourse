import { IssuerResolvers } from "@types";

const Issuer: IssuerResolvers = {
  issuerId({ issuerId }) {
    return issuerId;
  },
  name({ name }) {
    return name;
  },
  type({ type }) {
    return type;
  },
  email({ email }) {
    return email;
  }
};

export { Issuer };
