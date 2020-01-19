import valueCase, { ValueCaseStore } from "./valueCase";
import badgeInstance, { BadgeInstanceStore } from "./badge";
import registry, { RegistryStore } from "./organization";

export type PublicBadgesStores = {
  valueCase: ValueCaseStore;
  badgeInstance: BadgeInstanceStore;
  registry: RegistryStore;
};
export { valueCase, badgeInstance, registry };
