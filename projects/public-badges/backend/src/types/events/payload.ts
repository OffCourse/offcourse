import {
  PendingOrganization,
  ApprovedOrganization,
  PublicBadge,
  ApprovedPublicBadge,
  RejectedPublicBadge
} from "../models";
import { OpenBadge } from "../generated/graphql";

export type UnsignedOpenBadgeResponse = ApprovedPublicBadge & {
  artifact: OpenBadge;
};

export type SignedOpenBadgeResponse = ApprovedPublicBadge & {
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
