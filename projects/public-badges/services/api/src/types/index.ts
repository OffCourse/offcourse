import { Organization, OrganizationStatus } from "../types/generated/graphql";
import { ValueCase, PublicBadge } from "./models";

import { Event, PublicBadgesEvent } from "./events";

export interface Store<O, A, T> {
  fetch: (args: O) => Promise<T>;
  fetchAll: (args: A) => Promise<NonNullable<T>[]>;
}

export type ValueCaseStore = Store<{ valueCaseId: string }, {}, ValueCase>;

export type BadgeInstanceStore = Store<
  { badgeId: string },
  { organizationId?: string },
  PublicBadge | null
>;

export type RegistryStore = Store<
  { organizationId?: string | null; domainName?: string | null },
  { filter?: OrganizationStatus | null },
  Organization
>;

export type PublicBadgesStores = {
  valueCase: ValueCaseStore;
  badgeInstance: BadgeInstanceStore;
  registry: RegistryStore;
};

export type PublicBadgesHandler<T, U> = (event: T) => Promise<U>;

export interface EventBus<E extends Event> {
  put: (event: E) => Promise<E["detail"]>;
}

export type PublicBadgesEventBus = EventBus<PublicBadgesEvent>;

export interface ApolloContext {
  rawEvent: { headers: { origin: string } };
  functionContext: { functionName: string };
  stores: PublicBadgesStores;
  eventBus: PublicBadgesEventBus;
}
