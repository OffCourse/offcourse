import {
  PendingOrganization,
  ApprovedOrganization,
  PublicBadge,
  ApprovedPublicBadge,
  RejectedPublicBadge,
  SignedPublicBadge
} from "../models";
import { OpenBadge } from "../generated/graphql";

export type UnsignedOpenBadgeResponse = ApprovedPublicBadge & {
  artifact: OpenBadge;
};

export type SignedOpenBadgeResponse = SignedPublicBadge;

export type PublicBadgesEventPayload =
  | PendingOrganization
  | ApprovedOrganization
  | PublicBadge
  | ApprovedPublicBadge
  | RejectedPublicBadge
  | UnsignedOpenBadgeResponse
  | SignedOpenBadgeResponse;
