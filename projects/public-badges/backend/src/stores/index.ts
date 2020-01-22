import valueCase, { ValueCaseStore } from "./valueCase";
import badgeInstance, { BadgeInstanceStore } from "./badge";
import registry, { RegistryStore } from "./organization";
import issuer, { IssuerStore } from "./issuer";

export type PublicBadgesStores = {
  valueCase: ValueCaseStore;
  badgeInstance: BadgeInstanceStore;
  registry: RegistryStore;
  issuer: IssuerStore;
};
export { valueCase, badgeInstance, registry, issuer };
