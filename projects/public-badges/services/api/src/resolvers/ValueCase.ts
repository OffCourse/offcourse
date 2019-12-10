import valueCase from "../fixtures/valueCase.json";
import { ScenarioResolvers, ValueCaseResolvers } from "../generated/graphql.js";

const {
  valueCaseId,
  name,
  tags,
  description,
  proposedBy,
  approvedBy,
  narrative,
  scenarios
} = valueCase;

const Scenario: ScenarioResolvers = {
  title({ title }) {
    return title;
  },
  statements({ statements }) {
    return statements;
  }
}

const ValueCase: ValueCaseResolvers = {
  valueCaseId() {
    return valueCaseId;
  },
  name() {
    return name;
  },
  proposedBy() {
    return proposedBy;
  },
  approvedBy() {
    return approvedBy;
  },
  tags() {
    return tags;
  },
  description() {
    return description;
  },
  narrative() {
    return narrative;
  },
  scenarios() {
    return scenarios;
  }
};

export { ValueCase, Scenario };
