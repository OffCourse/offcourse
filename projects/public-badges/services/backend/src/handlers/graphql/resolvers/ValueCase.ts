import { ScenarioResolvers, ValueCaseResolvers } from "@types";

const Scenario: ScenarioResolvers = {
  description({ description }) {
    return description;
  },
  narrative({ narrative }) {
    return narrative;
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
  image({ image }) {
    return image;
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
