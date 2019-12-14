import {
  Organization,
  OpenBadge,
  ValueCase
} from "../generated/graphql";

import { Event, PublicBadgesEvent } from "./events";

export interface Store<A, T> {
  fetch: (args: A) => Promise<T>;
  fetchAll: () => Promise<NonNullable<T>[]>;
}

export type ValueCaseStore = Store<{ valueCaseId: string }, ValueCaseProxy>;
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

export type ValueCaseProxy = Omit<ValueCase, "proposedBy"> & {
  proposedBy: string;
};

export type PublicBadgesEventBus = EventBus<PublicBadgesEvent>;

export interface ApolloContext {
  stores: PublicBadgesStores;
  eventBus: PublicBadgesEventBus;
}
