"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gun_1 = __importDefault(require("gun"));
const gun = new gun_1.default();
gun
    .get("person")
    .get("name")
    .put("Alice");
class Cassette {
    constructor({ verb, objects, run }) {
        this.verb = verb;
        this.objects = objects;
        const db = gun;
        this.run = () => run({ db });
    }
}
exports.default = Cassette;
//# sourceMappingURL=flycheck_Cassette.js.map