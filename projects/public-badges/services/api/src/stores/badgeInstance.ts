import artifact from "../fixtures/fixture.json";
import uuidv5 from "uuid/v5";
import { times, partial } from "ramda";
import { BadgeInstanceStore } from "../types";
import { PublicBadgeStatus } from "../generated/graphql.js";

const { badge: badgeClass, recipient, evidence, issuedOn, expires } = artifact;

const generateBadge = (opts: { id: string }) => ({
  status: PublicBadgeStatus.Signed,
  name: badgeClass.name,
  badgeId: opts.id
    ? opts.id.replace(/urn:uuid:/, "")
    : uuidv5("waag.org", uuidv5.DNS),
  valueCaseId: badgeClass.id,
  tags: badgeClass.tags,
  description: badgeClass.description,
  narrative: badgeClass.criteria.narrative,
  recipientId: recipient.identity,
  evidence: evidence.map(({ id, ...proof }: any) => {
    const proofId = id.replace(/urn:uuid:/, "");
    return { ...proof, proofId };
  }),
  issuedOn: issuedOn,
  expires: expires,
  artifact
});

const badges = [
  generateBadge({ id: artifact.id }),
  ...times(partial(generateBadge, [{}]), 10)
];

const badgeInstance: BadgeInstanceStore = {
  async fetch({ badgeId }) {
    const badge = badges.find(badge => badge.badgeId === badgeId);
    return badge || null;
  },
  async fetchAll() {
    return badges;
  }
};

export default badgeInstance;
