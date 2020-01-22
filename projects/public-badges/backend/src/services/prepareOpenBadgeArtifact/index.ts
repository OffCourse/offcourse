import {
  PublicBadgesEventType as EV,
  BadgeIssuanceApprovedEvent,
  OpenBadgeArtifactCreated,
  PublicBadgesHandler
} from "@types";
import {
  registry,
  issuer as issuerStore,
  valueCase as valueCaseStore
} from "@stores";
import createArtifact from "./createArtifact";

export type InputEvent = BadgeIssuanceApprovedEvent;
export type OutputEvent = OpenBadgeArtifactCreated;

const prepareOpenBadgeArtifact: PublicBadgesHandler<
  InputEvent,
  OutputEvent
> = async ({ detailType, detail }) => {
  switch (detailType) {
    case EV.BADGE_ISSUANCE_APPROVED: {
      const { recipientId, valueCaseId, ...rest } = detail;
      const organization = await registry.fetch({
        organizationId: recipientId
      });
      if (!organization) {
        throw "invalid badge, no corresponding organization";
      }
      const valueCase = await valueCaseStore.fetch({
        valueCaseId
      });
      if (!valueCase) {
        throw "invalid badge, no corresponding value case";
      }
      const issuer = await issuerStore.fetch({});
      if (!issuer) {
        throw "invalid badge, no corresponding issuer";
      }
      const artifact = createArtifact({
        badgeInstance: detail,
        valueCase,
        organization,
        issuer
      });
      return {
        detailType: EV.OPEN_BADGES_ARTIFACT_CREATED,
        detail: { ...rest, recipientId, valueCaseId, artifact }
      };
    }
  }
};

export default prepareOpenBadgeArtifact;
