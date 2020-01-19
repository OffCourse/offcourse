import {
  PublicBadgesEventType as EV,
  BadgeIssuanceRequestedEvent,
  BadgeIssuanceApprovalRequestedEvent,
  BadgeIssuanceApprovedEvent,
  BadgeIssuanceRejectedEvent,
  BadgeInstanceUpdated
} from "../../types/events.js";
import { PublicBadgesHandler } from "../../types";
import { PublicBadge } from "../../types/models";
import { PublicBadgeStatus } from "../../types/generated/graphql";
import putBadge from "./putBadge";

export type InputEvent =
  | BadgeIssuanceRequestedEvent
  | BadgeIssuanceApprovedEvent
  | BadgeIssuanceRejectedEvent;

export type OutputEvent =
  | BadgeIssuanceApprovalRequestedEvent
  | BadgeInstanceUpdated;

const saveBadge: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail
}) => {
  switch (detailType) {
    case EV.BADGE_ISSUANCE_REQUESTED: {
      const { recipientId, valueCaseId } = detail;
      const id = `${recipientId}/badges/${valueCaseId}/public-badge`;
      const badge: PublicBadge = {
        ...detail,
        status: PublicBadgeStatus.Pending
      };
      await putBadge(id, badge);
      return {
        detailType: EV.BADGE_ISSUANCE_APPROVAL_REQUESTED,
        detail: badge
      };
    }
    case EV.BADGE_ISSUANCE_APPROVED: {
      const { recipientId, valueCaseId } = detail;
      const id = `${recipientId}/badges/${valueCaseId}/public-badge`;
      const badge: PublicBadge = {
        ...detail,
        status: PublicBadgeStatus.Approved
      };
      await putBadge(id, badge);
      return {
        detailType: EV.BADGE_INSTANCE_UPDATED,
        detail: badge
      };
    }
    case EV.BADGE_ISSUANCE_REJECTED: {
      const { recipientId, valueCaseId } = detail;
      const id = `${recipientId}/badges/${valueCaseId}/public-badge`;
      const badge: PublicBadge = {
        ...detail,
        status: PublicBadgeStatus.Rejected
      };
      await putBadge(id, badge);
      return {
        detailType: EV.BADGE_INSTANCE_UPDATED,
        detail: badge
      };
    }
  }
};

export default saveBadge;
