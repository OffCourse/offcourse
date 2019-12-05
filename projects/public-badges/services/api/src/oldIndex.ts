import { PublicBadge } from "./generated/graphql";
import { badges } from "./fixtures";

exports.handler = async (opts: { badgeId: string }) => {
  if (!opts.badgeId) {
    return badges;
  }

  const badge: PublicBadge | undefined = badges.find(
    ({ badgeId }) => badgeId === opts.badgeId
  );
  return badge;
};
