import {
  ApprovedOrganization as AO,
  PendingOrganization as PO,
  OrganizationStatus,
  PublicBadge as PB,
  ValueCase as VC,
  ApprovedPublicBadge as APB,
  SignedPublicBadge as SPB,
  RejectedPublicBadge as RPB
} from "./generated/graphql";

export interface Event {
  detailType: string;
  detail: any;
}

export type PendingOrganization = Omit<PO, "status"> & {
  status: OrganizationStatus.Pending;
};
export type ApprovedOrganization = Omit<AO, "status"> & {
  status: OrganizationStatus.Approved;
};

export type ValueCaseProxy = ValueCase;
export type ValueCase = Omit<VC, "proposedBy"> & {
  proposedBy: string;
};

export type PublicBadge = Omit<PB, "recipient" | "valueCase" | "artifact">;
export type ApprovedPublicBadge = Omit<APB, "recipient" | "valueCase">;
export type RejectedPublicBadge = Omit<RPB, "recipient" | "valueCase">;
export type SignedPublicBadge = Omit<
  SPB,
  "recipient" | "valueCase" | "artifact"
> & { artifact: OpenBadgesArtifactProxy };

export type PublicBadgeProxy = PublicBadge;
export type OpenBadgesArtifactProxy = { signature: string };

export {
  Organization,
  OrganizationStatus,
  OpenBadge,
  OpenBadgeClass,
  Issuer,
  Proof,
  PublicBadgeStatus
} from "./generated/graphql";
