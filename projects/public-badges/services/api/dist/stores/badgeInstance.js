"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fixture_json_1 = __importDefault(require("../fixtures/fixture.json"));
const v5_1 = __importDefault(require("uuid/v5"));
const ramda_1 = require("ramda");
const generateBadge = (opts) => (Object.assign({}, fixture_json_1.default, { id: opts.id || `urn:uuid:${v5_1.default("waag.org", v5_1.default.DNS)}`, artifact: {
        json: JSON.stringify(fixture_json_1.default)
    } }));
const badges = [
    generateBadge({ id: fixture_json_1.default.id }),
    ...ramda_1.times(ramda_1.partial(generateBadge, [{}]), 10)
];
const badgeInstance = {
    fetch({ badgeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const badge = badges.find(badge => badge.id === badgeId);
            return badge || null;
        });
    },
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return badges;
        });
    }
};
exports.default = badgeInstance;
//# sourceMappingURL=badgeInstance.js.map