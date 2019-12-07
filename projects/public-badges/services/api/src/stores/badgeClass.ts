import badgeClassFixture from "../fixtures/badgeClass.json";
import { BadgeClassStore } from "../types.js";

const badgeClass: BadgeClassStore = {
  async fetch() {
    return badgeClassFixture;
  },
  async fetchAll() {
    return [badgeClassFixture];
  }
};

export default badgeClass;
