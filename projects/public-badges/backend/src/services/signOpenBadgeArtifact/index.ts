import jws from "jws";

import {
  PublicBadgesEventType as EV,
  OpenBadgeArtifactCreated,
  OpenBadgeArtifactSigned,
  PublicBadgesHandler,
  PublicBadgeStatus
} from "@types";

export type InputEvent = OpenBadgeArtifactCreated;
export type OutputEvent = OpenBadgeArtifactSigned;

const signOpenBadgeArtifact: PublicBadgesHandler<
  InputEvent,
  OutputEvent
> = async ({ detailType, detail }) => {
  switch (detailType) {
    case EV.OPEN_BADGES_ARTIFACT_CREATED: {
      const { artifact, ...rest } = detail;
      const privateKey = process.env.PRIVATE_KEY;
      const { issuedOn, expires } = artifact;
      if (!privateKey) {
        throw "no privateKey set";
      }
      const signature = jws.sign({
        header: { alg: "HS256" },
        payload: artifact,
        privateKey
      });
      return {
        detailType: EV.OPEN_BADGES_ARTIFACT_SIGNED,
        detail: {
          ...rest,
          issuedOn,
          expires,
          status: PublicBadgeStatus.Signed,
          artifact: {
            signature
          }
        }
      };
    }
  }
};

export default signOpenBadgeArtifact;
