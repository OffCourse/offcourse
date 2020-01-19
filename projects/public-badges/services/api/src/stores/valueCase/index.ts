import valueCaseFixture from "./valueCase.json";
import { Store, ValueCase } from "@types";

export type ValueCaseStore = Store<
  { valueCaseId: string },
  {},
  ValueCase | null
>;

const valueCase: ValueCaseStore = {
  async fetch({ valueCaseId }) {
    return valueCaseId === valueCaseFixture.valueCaseId
      ? valueCaseFixture
      : null;
  },
  async fetchAll() {
    return [valueCaseFixture];
  }
};

export default valueCase;
