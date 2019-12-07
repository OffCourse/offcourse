import { RegistryStore } from "../types.js";
import organization from "../fixtures/organization.json";

const registry: RegistryStore = {
  async fetch() {
    return organization;
  },
  async fetchAll() {
    return [organization];
  }
};

export default registry;
