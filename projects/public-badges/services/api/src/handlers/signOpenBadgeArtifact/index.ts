import jws from "jws";
import fs from "fs";

import {
  PublicBadgesEventType as EV,
  OpenBadgeArtifactCreated,
  OpenBadgeArtifactSigned
} from "../../types/events.js";
import { PublicBadgesHandler } from "../../types";

export type InputEvent = OpenBadgeArtifactCreated;
export type OutputEvent = OpenBadgeArtifactSigned;

const prepareOpenBadgeArtifact: PublicBadgesHandler<
  InputEvent,
  OutputEvent
> = async ({ detailType, detail }) => {
  switch (detailType) {
    case EV.OPEN_BADGES_ARTIFACT_CREATED: {
      const { artifact, recipientId, valueCaseId } = detail;
      const signature = jws.sign({
        header: { alg: "HS256" },
        payload: artifact,
        privateKey: fs.readFileSync(__dirname + "/../../../private-key.pem")
      });
      return {
        detailType: EV.OPEN_BADGES_ARTIFACT_SIGNED,
        detail: { recipientId, valueCaseId, signature }
      };
    }
  }
};

export default prepareOpenBadgeArtifact;
