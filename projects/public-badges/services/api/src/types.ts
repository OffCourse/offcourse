import {
  Organization,
  ValueCase,
  OpenBadgeProof as OBP,
  OpenBadgeClass as OBC,
  OpenBadge as OB
} from "./generated/graphql";

export type OpenBadgeProof = OBP;
export type OpenBadgeClass = OBC;
export type OpenBadge = OB;

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
