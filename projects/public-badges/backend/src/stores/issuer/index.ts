import issuerFixture from "./issuer.json";
import { Store, Issuer } from "@types";

export type IssuerStore = Store<{}, {}, Issuer>;

const issuer: IssuerStore = {
  async fetch() {
    return issuerFixture;
  },
  async fetchAll() {
    return [issuerFixture];
  }
};

export default issuer;
