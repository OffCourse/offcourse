import putBadge from "./putBadge";
import {
  PublicBadgesEventType as EV,
  BadgeIssuanceRequestedEvent,
  BadgeIssuanceApprovalRequestedEvent
} from "../../types/events.js";
import { PublicBadgesHandler, PendingPublicBadgeProxy } from "../../types";
import { registry, valueCase as valueCaseStore } from "../../stores";
import { PublicBadgeStatus } from "../../generated/graphql";

export type InputEvent = BadgeIssuanceRequestedEvent;

export type OutputEvent = BadgeIssuanceApprovalRequestedEvent;

const saveBadge: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail
}) => {
  switch (detailType) {
    case EV.BADGE_ISSUANCE_REQUESTED: {
      const { recipientId, valueCaseId } = detail;
      const recipient = await registry.fetch({ organizationId: recipientId });
      const valueCase = await valueCaseStore.fetch({ valueCaseId });
      const id = `${recipientId}/badges/${valueCaseId}`;
      const badge: PendingPublicBadgeProxy = {
        ...detail,
        recipient,
        valueCase,
        status: PublicBadgeStatus.Pending
      };
      await putBadge(id, badge);
      return {
        detailType: EV.BADGE_ISSUANCE_APPROVAL_REQUESTED,
        detail: badge
      };
    }
  }
};

export default saveBadge;
