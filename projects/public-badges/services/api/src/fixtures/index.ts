import { PublicBadge } from "../generated/graphql";
import artifact from "./fixture.json";
import uuidv5 from "uuid/v5";
import { times, partial } from "ramda";

const {
  id,
  recipient: { identity: recipientId },
  badge: badgeClass,
  evidence,
  issuedOn,
  expires
} = artifact;

const {
  id: badgeClassId,
  name,
  tags,
  description,
  criteria: { narrative }
} = badgeClass;

// const score: BadgeScore = {
//   accountable: 0,
//   sovereign: 70,
//   userCentric: 10,
//   transparent: 10,
//   open: 10
// };

const generateBadge: (opts: { id?: string }) => PublicBadge = opts => ({
  badgeId: opts.id || `urn:uuid:${uuidv5("waag.org", uuidv5.DNS)}`,
  badgeClassId,
  recipientId,
  name,
  tags,
  description,
  narrative,
  evidence,
  issuedOn,
  expires,
  artifact: {
    json: JSON.stringify(artifact)
  }
});

export const badges: PublicBadge[] = [
  generateBadge({ id }),
  ...times(partial(generateBadge, [{}]), 10)
];
