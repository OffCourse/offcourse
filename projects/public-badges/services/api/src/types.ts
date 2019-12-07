import { PublicBadgeClass, Organization } from "./generated/graphql";

type OpenBadgeRecipient = {
  identity: string;
  type: string;
};

type OpenBadgeCriteria = {
  narrative: string;
};

export type OpenBadgeProof = {
  id: string;
  name: string;
  genre: string;
  description: string;
  narrative: string;
};
export type OpenBadgeClass = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  criteria: OpenBadgeCriteria;
};

export interface OpenBadge {
  id: string;
  badge: OpenBadgeClass;
  recipient: OpenBadgeRecipient;
  issuedOn: string;
  expires: string;
  evidence: OpenBadgeProof[];
}

export interface Store<A, T> {
  fetch: (args: A) => Promise<T>;
  fetchAll: () => Promise<NonNullable<T>[]>;
}

export type BadgeClassStore = Store<{ badgeClassId: string }, PublicBadgeClass>;
export type BadgeInstanceStore = Store<{ badgeId: string }, OpenBadge | null>;
export type RegistryStore = Store<{ organizationId: string }, Organization>;

export type PublicBadgesStores = {
  badgeClass: BadgeClassStore;
  badgeInstance: BadgeInstanceStore;
  registry: RegistryStore;
};

export interface ApolloContext {
  stores: PublicBadgesStores;
};
