import {
  PublicBadgeResolvers,
  Status,
  RequestedPublicBadgeResolvers,
  ApprovedPublicBadgeResolvers,
  SignedPublicBadgeResolvers
} from "../generated/graphql";

const PublicBadge: PublicBadgeResolvers = {
  __resolveType() {
    return "SignedPublicBadge";
  },
  badgeId({ id }) {
    return id;
  },
  badgeClassId({ badge }) {
    return badge.id;
  },
  status() {
    return Status.Signed;
  },
  badgeClass({ badge }, _args, { stores }) {
    return stores.badgeClass.fetch({ badgeClassId: badge.id });
  },
  name({ badge }) {
    return badge.name;
  },
  tags({ badge }) {
    return badge.tags;
  },
  description({ badge }) {
    return badge.description;
  },
  narrative({ badge }) {
    return badge.criteria.narrative;
  },
  recipientId({ recipient }) {
    return recipient.identity;
  }
};

const RequestedPublicBadge: RequestedPublicBadgeResolvers = {
  ...PublicBadge
};

const ApprovedPublicBadge: ApprovedPublicBadgeResolvers = {
  ...RequestedPublicBadge,
  evidence({ evidence }) {
    return evidence;
  }
};

const SignedPublicBadge: SignedPublicBadgeResolvers = {
  ...ApprovedPublicBadge,
  issuedOn({ issuedOn }) {
    return issuedOn;
  },
  expires({ expires }) {
    return expires;
  },
  artifact(badge) {
    return badge;
  }
};

export {
  PublicBadge,
  RequestedPublicBadge,
  ApprovedPublicBadge,
  SignedPublicBadge
};
