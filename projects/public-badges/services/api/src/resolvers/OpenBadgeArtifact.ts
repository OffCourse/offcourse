import { OpenBadgeArtifactResolvers } from "../generated/graphql";

const BadgeArtifact: OpenBadgeArtifactResolvers = {
  json(badge) {
    return JSON.stringify(badge);
  }
};

export default BadgeArtifact;
