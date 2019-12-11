import { Organization } from "../generated/graphql";

export interface Event {
  eventType: string;
  payload: any;
}

export enum PublicBadgesEventType {
  "ORGANIZATION_REGISTRATION_REQUESTED" = "ORGANIZATION_REGISTRATION_REQUESTED",
  "NEW_BADGECLASS_PROPOSED" = "NEW_BADGECLASS_PROPOSED",
  "BADGE_ISSUANCE_REQUESTED" = "BADGE_ISSUANCE_REQUESTED"
}

export type PublicBadgesEventPayload = Organization;

interface PBEvent extends Event {
  eventType: PublicBadgesEventType;
  payload: PublicBadgesEventPayload;
}

export interface OrganizationRegistrationRequestedEvent extends PBEvent {
  eventType: PublicBadgesEventType.ORGANIZATION_REGISTRATION_REQUESTED;
  payload: Organization;
}

export interface BOrganizationRegistrationRequestedEvent extends PBEvent {
  eventType: PublicBadgesEventType.NEW_BADGECLASS_PROPOSED;
  payload: Organization;
}

export type PublicBadgesEvent = OrganizationRegistrationRequestedEvent
  | BOrganizationRegistrationRequestedEvent;
