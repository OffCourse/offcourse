import {
  PendingOrganization,
  ApprovedOrganization,
  PublicBadgeProxy
} from "./index";

export interface Event {
  detailType: string;
  detail: any;
}

export enum PublicBadgesEventType {
  ORGANIZATION_REGISTRATION_REQUESTED = "ORGANIZATION_REGISTRATION_REQUESTED",
  ORGANIZATION_APPROVAL_REQUESTED = "ORGANIZATION_APPROVAL_REQUESTED",
  ORGANIZATION_APPROVAL_ACCEPTED = "ORGANIZATION_APPROVAL_ACCEPTED",
  ORGANIZATION_APPROVED = "ORGANIZATION_APPROVED",
  NEW_BADGECLASS_PROPOSED = "NEW_BADGECLASS_PROPOSED",
  BADGE_ISSUANCE_REQUESTED = "BADGE_ISSUANCE_REQUESTED",
  BADGE_ISSUANCE_APPROVAL_REQUESTED = "BADGE_ISSUANCE_APPROVAL_REQUESTED"
}

export type PublicBadgesEventPayload =
  | PendingOrganization
  | ApprovedOrganization
  | PublicBadgeProxy;

export interface PBEvent extends Event {
  detailType: PublicBadgesEventType;
  detail: PublicBadgesEventPayload;
}

export interface OrganizationRegistrationRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_REGISTRATION_REQUESTED;
  detail: PendingOrganization;
}

export interface OrganizationApprovalRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_APPROVAL_REQUESTED;
  detail: PendingOrganization;
}

export interface OrganizationApprovalAcceptedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_APPROVAL_ACCEPTED;
  detail: PendingOrganization;
}

export interface OrganizationApprovedEvent extends PBEvent {
  detailType: PublicBadgesEventType.ORGANIZATION_APPROVED;
  detail: ApprovedOrganization;
}

export interface BadgeIssuanceRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_REQUESTED;
  detail: PublicBadgeProxy;
}

export interface BadgeIssuanceApprovalRequestedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_APPROVAL_REQUESTED;
  detail: PublicBadgeProxy;
}

export type PublicBadgesEvent =
  | OrganizationRegistrationRequestedEvent
  | OrganizationApprovalRequestedEvent
  | OrganizationApprovalAcceptedEvent
  | OrganizationApprovedEvent
  | BadgeIssuanceRequestedEvent;
