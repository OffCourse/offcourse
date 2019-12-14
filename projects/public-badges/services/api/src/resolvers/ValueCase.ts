import { ScenarioResolvers, ValueCaseResolvers, ProposedByResolvers } from "../generated/graphql.js";
import { slugify } from "voca";

const Scenario: ScenarioResolvers = {
  title({ title }) {
    return title;
  },
  statements({ statements }) {
    return statements;
  }
};

const ProposedBy: ProposedByResolvers = {
  organizationId({ organizationId }) {
    return organizationId;
  }
};

const ValueCase: ValueCaseResolvers = {
  valueCaseId({ proposedBy, name }) {
    const normalizedName = slugify(name!);
    return `${proposedBy}@${normalizedName}`;
  },
  name({ name }) {
    return name;
  },
  proposedBy({ proposedBy }, _args, { stores }) {
    return stores.registry.fetch({ organizationId: proposedBy });
  },
  approvedBy({ approvedBy }) {
    return approvedBy;
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
  scenarios({ scenarios }) {
    return scenarios;
  }
};

export { ValueCase, Scenario, ProposedBy };
