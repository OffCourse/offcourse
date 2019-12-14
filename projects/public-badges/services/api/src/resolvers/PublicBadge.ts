import {
  PublicBadgeResolvers,
  Status,
  ProofResolvers,
  RequestedPublicBadgeResolvers,
  ApprovedPublicBadgeResolvers,
  SignedPublicBadgeResolvers
} from "../generated/graphql";

const Proof: ProofResolvers = {
  proofId({ id }) {
    return id.replace(/urn:uuid:/, "");
  },
  name({ name }) {
    return name;
  },
  genre({ genre }) {
    return genre;
  },
  description({ description }) {
    return description;
  },
  narrative({ narrative }) {
    return narrative;
  }
};

const PublicBadge: PublicBadgeResolvers = {
  __resolveType() {
    return "SignedPublicBadge";
  },
  badgeId({ id }) {
    return id.replace(/urn:uuid:/, "");
  },
  valueCaseId({ badge }) {
    return badge.id;
  },
  status() {
    return Status.Signed;
  },
  async valueCase({ badge }, _args, { stores }) {
    return await stores.valueCase.fetch({ valueCaseId: badge.id });
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
  Proof,
  RequestedPublicBadge,
  ApprovedPublicBadge,
  SignedPublicBadge
};
