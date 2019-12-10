import {
  Organization,
  ValueCase
} from "./generated/graphql";

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

export type ValueCaseStore = Store<{ valueCaseId: string }, ValueCase>;
export type BadgeInstanceStore = Store<{ badgeId: string }, OpenBadge | null>;
export type RegistryStore = Store<{ organizationId: string }, Organization>;

export type PublicBadgesStores = {
  valueCase: ValueCaseStore;
  badgeInstance: BadgeInstanceStore;
  registry: RegistryStore;
};

export enum PublicBadgesEventType {
  "ORGANIZATION_REGISTRATION_REQUESTED" = "ORGANIZATION_REGISTRATION_REQUESTED",
  "NEW_BADGECLASS_PROPOSED" = "NEW_BADGECLASS_PROPOSED",
  "BADGE_ISSUANCE_REQUESTED" = "BADGE_ISSUANCE_REQUESTED"
}

export interface PublicBadgesEvent {
  eventType: PublicBadgesEventType;
  payload: Organization;
}

export type PublicBadgesDataLake = {
  dump: (
    eventType: PublicBadgesEventType,
    payload: Organization
  ) => Promise<Organization>;
};

export interface ApolloContext {
  stores: PublicBadgesStores;
  datalake: PublicBadgesDataLake;
}
