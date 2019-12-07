import publicSpacesOrganization from "../fixtures/organization.json";
import badgeClass from "../fixtures/badgeClass.json";
import { MutationResolvers } from "../generated/graphql.js";

const Mutation: MutationResolvers = {
  addBadgeClass() {
    return badgeClass;
  },
  registerOrganization() {
    return publicSpacesOrganization;
  }
};

export default Mutation;
