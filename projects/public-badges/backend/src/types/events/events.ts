import { PublicBadgesEventType } from "./eventTypes";
import {
  PublicBadgesEventPayload,
  UnsignedOpenBadgeResponse,
  SignedOpenBadgeResponse
} from "./payload";

import {
  Event,
  PendingOrganization,
  ApprovedOrganization,
  PublicBadge,
  ApprovedPublicBadge,
  RejectedPublicBadge
} from "../models";

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
  detail: PublicBadge;
}

export interface BadgeIssuanceApprovedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_APPROVED;
  detail: ApprovedPublicBadge;
}

export interface BadgeIssuanceRejectedEvent extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_ISSUANCE_REJECTED;
  detail: RejectedPublicBadge;
}

export interface BadgeInstanceUpdated extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_INSTANCE_UPDATED;
  detail: PublicBadge;
}
export interface OpenBadgeArtifactCreated extends PBEvent {
  detailType: PublicBadgesEventType.OPEN_BADGES_ARTIFACT_CREATED;
  detail: UnsignedOpenBadgeResponse;
}
export interface OpenBadgeArtifactSigned extends PBEvent {
  detailType: PublicBadgesEventType.OPEN_BADGES_ARTIFACT_SIGNED;
  detail: SignedOpenBadgeResponse;
}

export interface BadgeInstanceSigned extends PBEvent {
  detailType: PublicBadgesEventType.BADGE_INSTANCE_SIGNED;
  detail: SignedOpenBadgeResponse;
}
