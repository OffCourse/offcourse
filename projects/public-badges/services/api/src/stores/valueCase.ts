import valueCaseFixture from "../fixtures/valueCase.json";
import { ValueCaseStore } from "../types.js";

const valueCase: ValueCaseStore = {
  async fetch() {
    return valueCaseFixture;
  },
  async fetchAll() {
    return [valueCaseFixture];
  }
};

export default valueCase;
