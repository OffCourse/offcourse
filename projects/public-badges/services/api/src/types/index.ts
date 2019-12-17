import {
  Organization,
  ApprovedOrganization as AO,
  PendingOrganization as PO,
  OrganizationStatus,
  OpenBadge,
  ValueCase
} from "../generated/graphql";

export type PendingOrganization = Omit<PO, "status"> & {
  status: OrganizationStatus.Pending;
};

export type ApprovedOrganization = Omit<AO, "status"> & {
  status: OrganizationStatus.Approved;
};

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

export type PublicBadgesHandler<T, U> = (
  event: T
) => Promise<U>;

export interface EventBus<E extends Event> {
  put: (event: E) => Promise<E["detail"]>;
}

export type ValueCaseProxy = Omit<ValueCase, "proposedBy"> & {
  proposedBy: string;
};

export type PublicBadgesEventBus = EventBus<PublicBadgesEvent>;

export interface ApolloContext {
  stores: PublicBadgesStores;
  eventBus: PublicBadgesEventBus;
}
