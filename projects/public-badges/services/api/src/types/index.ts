import {
  Organization,
  ValueCase,
  OpenBadgeProof as OBP,
  OpenBadgeClass as OBC,
  OpenBadge as OB
} from "../generated/graphql";

import { Event, PublicBadgesEvent, PublicBadgesEventPayload } from "./events";

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

export interface EventBus<E extends Event> {
  put: (event: E) => Promise<E["payload"]>;
}

export type PublicBadgesEventBus = EventBus<PublicBadgesEvent>;

export interface ApolloContext {
  stores: PublicBadgesStores;
  eventBus: PublicBadgesEventBus;
}
