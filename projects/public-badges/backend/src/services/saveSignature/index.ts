import {
  PublicBadgesEventType as EV,
  BadgeInstanceSigned,
  OpenBadgeArtifactSigned,
  PublicBadgesHandler
} from "@types";
import putSignature from "./putSignature";

export type InputEvent = OpenBadgeArtifactSigned;

export type OutputEvent = BadgeInstanceSigned;

const saveBadge: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail
}) => {
  switch (detailType) {
    case EV.OPEN_BADGES_ARTIFACT_SIGNED: {
      const { recipientId, valueCaseId, signature } = detail;
      const id = `${recipientId}/badges/${valueCaseId}/signature`;
      await putSignature(id, signature);
      return {
        detailType: EV.BADGE_INSTANCE_SIGNED,
        detail
      };
    }
  }
};

export default saveBadge;
