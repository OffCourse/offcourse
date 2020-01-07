import { ScenarioResolvers, ValueCaseResolvers } from "../generated/graphql.js";

const Scenario: ScenarioResolvers = {
  title({ title }) {
    return title;
  },
  statements({ statements }) {
    return statements;
  }
};

const ValueCase: ValueCaseResolvers = {
  valueCaseId({ valueCaseId }) {
    return valueCaseId;
  },
  name({ name }) {
    return name;
  },
  proposedBy({ proposedBy }, _args, { stores }) {
    return stores.registry.fetch({
      domainName: proposedBy
    });
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

export { ValueCase, Scenario };
