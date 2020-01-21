import jws from "jws";
import {
  OpenBadgeResolvers,
  OpenBadgeClassResolvers,
  OpenBadgeCriteriaResolvers,
  OpenBadgeRecipientResolvers,
  OpenBadgeProofResolvers,
  OpenBadgeArtifactResolvers
} from "@types";

const OpenBadgeCriteria: OpenBadgeCriteriaResolvers = {
  narrative({ narrative }) {
    return narrative;
  }
};

const OpenBadgeClass: OpenBadgeClassResolvers = {
  id({ id }) {
    return id;
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
  criteria({ criteria }) {
    return criteria;
  }
};

const OpenBadgeRecipient: OpenBadgeRecipientResolvers = {
  identity({ identity }) {
    return identity;
  },
  type({ type }) {
    return type;
  }
};

const OpenBadgeProof: OpenBadgeProofResolvers = {
  id({ id }) {
    return id;
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

const OpenBadge: OpenBadgeResolvers = {
  id({ id }) {
    return id;
  },
  badge({ badge }) {
    return badge;
  },
  recipient({ recipient }) {
    return recipient;
  },
  issuedOn({ issuedOn }) {
    return issuedOn;
  },
  expires({ expires }) {
    return expires;
  },
  evidence({ evidence }) {
    return evidence;
  }
};

const OpenBadgeArtifact: OpenBadgeArtifactResolvers = {
  signature({ signature }) {
    return signature;
  },
  json({ signature }) {
    const { payload } = jws.decode(signature);
    return payload;
  }
};

export {
  OpenBadge,
  OpenBadgeClass,
  OpenBadgeCriteria,
  OpenBadgeRecipient,
  OpenBadgeProof,
  OpenBadgeArtifact
};
