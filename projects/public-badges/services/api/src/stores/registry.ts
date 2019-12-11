import { RegistryStore } from "../types";
import organization from "../fixtures/organization.json";
import { Organization } from "../generated/graphql.js";

const registry: RegistryStore = {
  async fetch() {
    return organization as Organization;
  },
  async fetchAll() {
    return [organization as Organization];
  }
};

export default registry;
