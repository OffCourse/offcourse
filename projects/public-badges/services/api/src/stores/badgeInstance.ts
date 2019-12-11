import artifact from "../fixtures/fixture.json";
import uuidv5 from "uuid/v5";
import { times, partial } from "ramda";
import { BadgeInstanceStore } from "../types";

const generateBadge = (opts: { id: string }) => ({
  ...artifact,
  id: opts.id || `urn:uuid:${uuidv5("waag.org", uuidv5.DNS)}`,
  artifact: {
    json: JSON.stringify(artifact)
  }
});

const badges = [
  generateBadge({ id: artifact.id }),
  ...times(partial(generateBadge, [{}]), 10)
];

const badgeInstance: BadgeInstanceStore = {
  async fetch({ badgeId }) {
    const badge = badges.find(badge => badge.id === badgeId);
    return badge || null;
  },
  async fetchAll() {
    return badges;
  }
};

export default badgeInstance;
