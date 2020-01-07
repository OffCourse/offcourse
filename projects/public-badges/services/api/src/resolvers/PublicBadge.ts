import {
  PublicBadgeResolvers,
  PublicBadgeStatus,
  PendingPublicBadgeResolvers,
  ApprovedPublicBadgeResolvers,
  SignedPublicBadgeResolvers
} from "../generated/graphql";

const PublicBadge: PublicBadgeResolvers = {
  __resolveType({ status }) {
    switch (status) {
      case PublicBadgeStatus.Signed: {
        return "SignedPublicBadge";
      }
      case PublicBadgeStatus.Approved: {
        return "ApprovedPublicBadge";
      }
      case PublicBadgeStatus.Pending: {
        return "PendingPublicBadge";
      }
    }
  },
  badgeId({ badgeId }) {
    return badgeId;
  },
  valueCaseId({ valueCaseId }) {
    return valueCaseId;
  },
  status({ status }) {
    return status;
  },
  valueCase({ valueCaseId }, _args, { stores }) {
    return stores.valueCase.fetch({ valueCaseId: valueCaseId });
  },
  name({ name }) {
    return name;
  },
  tags({ tags }) {
    return tags;
  },
  description({ description }) {
    return description;
  },
  narrative({ narrative }) {
    return narrative;
  },
  recipientId({ recipientId }) {
    return recipientId;
  },
  recipient({ recipientId }, _args, { stores }) {
    return stores.registry.fetch({ organizationId: recipientId });
  }
};

const PendingPublicBadge: PendingPublicBadgeResolvers = {
  ...PublicBadge
};

const ApprovedPublicBadge: ApprovedPublicBadgeResolvers = {
  ...PendingPublicBadge,
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
  artifact({ artifact }) {
    return artifact;
  }
};

export {
  PublicBadge,
  PendingPublicBadge,
  ApprovedPublicBadge,
  SignedPublicBadge
};
