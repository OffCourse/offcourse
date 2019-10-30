"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = [{ name: "something", age: 23 }, { name: "else", age: 29 }];
const hashtag = [
    { name: "wething", weight: 100 },
    { name: "asklasse", weight: 1000 }
];
const rec = { user, hashtag };
const run = ({ objectType = "user" }) => rec[objectType];
const verb = "recommend";
const objects = Object.keys(rec);
const cassette = { verb, objects, run };
exports.default = cassette;
//# sourceMappingURL=recommend.js.map