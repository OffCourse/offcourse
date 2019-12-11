import valueCaseFixture from "../fixtures/valueCase.json";
import { ValueCaseStore } from "../types";

const valueCase: ValueCaseStore = {
  async fetch() {
    return valueCaseFixture;
  },
  async fetchAll() {
    return [valueCaseFixture];
  }
};

export default valueCase;
