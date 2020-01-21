import {
  PublicBadgesEventType as EV,
  BadgeIssuanceRequestedEvent,
  BadgeIssuanceApprovedEvent,
  BadgeIssuanceRejectedEvent,
  BadgeInstanceUpdated,
  PublicBadgesHandler,
  OpenBadgeArtifactSigned
} from "@types";
import putBadge from "./putBadge";

export type InputEvent =
  | BadgeIssuanceRequestedEvent
  | BadgeIssuanceApprovedEvent
  | BadgeIssuanceRejectedEvent
  | OpenBadgeArtifactSigned;

export type OutputEvent = BadgeInstanceUpdated;

const saveBadge: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail
}) => {
  switch (detailType) {
    case EV.BADGE_ISSUANCE_REQUESTED:
    case EV.BADGE_ISSUANCE_APPROVED:
    case EV.BADGE_ISSUANCE_REJECTED:
    case EV.OPEN_BADGES_ARTIFACT_SIGNED: {
      const { recipientId, valueCaseId } = detail;
      const id = `${recipientId}/badges/${valueCaseId}/public-badge`;
      await putBadge(id, detail);
      return {
        detailType: EV.BADGE_INSTANCE_UPDATED,
        detail: detail
      };
    }
  }
};

export default saveBadge;
