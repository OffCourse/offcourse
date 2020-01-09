import {
  Organization,
  ApprovedOrganization as AO,
  PendingOrganization as PO,
  OrganizationStatus,
  PublicBadge,
  ValueCase
} from "../generated/graphql";

export type PendingOrganization = Omit<PO, "status"> & {
  status: OrganizationStatus.Pending;
};

export type ApprovedOrganization = Omit<AO, "status"> & {
  status: OrganizationStatus.Approved;
};

import { Event, PublicBadgesEvent } from "./events";

export interface Store<O, A, T> {
  fetch: (args: O) => Promise<T>;
  fetchAll: (args: A) => Promise<NonNullable<T>[]>;
}

export type ValueCaseProxy = Omit<ValueCase, "proposedBy"> & {
  proposedBy: string;
};

export type ValueCaseStore = Store<{ valueCaseId: string }, {}, ValueCaseProxy>;

export type PublicBadgeProxy = Omit<PublicBadge, "recipient" | "valueCase">;

export type BadgeInstanceStore = Store<
  { badgeId: string },
  {},
  PublicBadgeProxy | null
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
  stores: PublicBadgesStores;
  eventBus: PublicBadgesEventBus;
}
