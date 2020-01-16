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
      const signature = jws.sign({
        header: { alg: "HS256" },
        payload: detail,
        privateKey: fs.readFileSync(__dirname + "/../../../private-key.pem")
      });
      console.log(signature);
      return {
        detailType: EV.OPEN_BADGES_ARTIFACT_SIGNED,
        detail: { signature }
      };
    }
  }
};

export default prepareOpenBadgeArtifact;
