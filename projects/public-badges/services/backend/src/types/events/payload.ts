import {
  PendingOrganization,
  ApprovedOrganization,
  PublicBadge,
  ApprovedPublicBadge,
  RejectedPublicBadge
} from "../models";
import { OpenBadge } from "../generated/graphql";

export type UnsignedOpenBadgeResponse = {
  recipientId: string;
  valueCaseId: string;
  artifact: OpenBadge;
};

export type SignedOpenBadgeResponse = {
  recipientId: string;
  valueCaseId: string;
  signature: string;
};

export type PublicBadgesEventPayload =
  | PendingOrganization
  | ApprovedOrganization
  | PublicBadge
  | ApprovedPublicBadge
  | RejectedPublicBadge
  | UnsignedOpenBadgeResponse
  | SignedOpenBadgeResponse;
