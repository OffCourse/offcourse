import valueCaseFixture from "../fixtures/valueCase.json";
import { ValueCaseStore } from "../types/index";

const valueCase: ValueCaseStore = {
  async fetch({ valueCaseId }) {
    return valueCaseFixture;
  },
  async fetchAll() {
    return [valueCaseFixture];
  }
};

export default valueCase;
