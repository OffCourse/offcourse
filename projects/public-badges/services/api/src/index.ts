import { Badge, Score } from "./generated/graphql";

import artifact from "../fixture.json";

const { id, type, recipient, issuedOn, expires } = artifact;

const score: Score = {
  accountable: 0,
  sovereign: 70,
  userCentric: 10,
  transparent: 10,
  open: 10
};
const badgeWrapper: Badge = {
  id,
  type,
  score,
  recipient,
  issuedOn,
  expires,
  artifact: {
    json: JSON.stringify(artifact)
  }
};

exports.handler = async (event: { badgeId: string }) => {
  const badges: Badge[] = [
    {
      ...badgeWrapper
    },
    {
      ...badgeWrapper,
      id: "urn:uuid:e79a6c18-787e-4868-8e65-e6a4530fb419"
    }
  ];

  const badge: Badge | undefined = badges.find(
    ({ id }) => id === event.badgeId
  );
  return badge;
};
