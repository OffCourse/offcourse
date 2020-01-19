import {
  OrganizationRegistrationRequestedEvent,
  OrganizationApprovalRequestedEvent,
  OrganizationApprovalAcceptedEvent,
  OrganizationApprovedEvent,
  BadgeIssuanceRequestedEvent,
  BadgeIssuanceApprovalRequestedEvent,
  BadgeIssuanceApprovedEvent,
  BadgeInstanceUpdated,
  BadgeIssuanceRejectedEvent,
  BadgeInstanceSigned,
  OpenBadgeArtifactCreated,
  OpenBadgeArtifactSigned
} from "./events";

export * from "./events";
export * from "./eventTypes";
export * from "./payload";

export type PublicBadgesEvent =
  | OrganizationRegistrationRequestedEvent
  | OrganizationApprovalRequestedEvent
  | OrganizationApprovalAcceptedEvent
  | OrganizationApprovedEvent
  | BadgeIssuanceRequestedEvent
  | BadgeIssuanceApprovalRequestedEvent
  | BadgeIssuanceApprovedEvent
  | BadgeIssuanceRejectedEvent
  | BadgeInstanceUpdated
  | BadgeInstanceSigned
  | OpenBadgeArtifactCreated
  | OpenBadgeArtifactSigned;
