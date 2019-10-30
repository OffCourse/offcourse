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
const bbot_1 = __importDefault(require("bbot"));
const recommend_1 = __importDefault(require("./cassettes/recommend"));
const test_1 = __importDefault(require("./cassettes/test"));
const initializeCassette = ({ verb, objects, run, scope, logger }) => {
    scope.text(new RegExp(`${verb} (${objects.join("|")})`, "i"), (b) => __awaiter(this, void 0, void 0, function* () {
        const matchedObject = b.conditions.captures[0];
        const recommendations = yield run({
            objectType: matchedObject
        });
        return b.reply(JSON.stringify(recommendations, null, 2));
    }), {
        id: `${verb}-cassette`
    });
};
const initiateBot = cassettes => {
    const { global, logger } = bbot_1.default;
    cassettes.map(cassette => initializeCassette(Object.assign({ scope: global, logger }, cassette)));
    bbot_1.default.start();
};
initiateBot([recommend_1.default, test_1.default]);
//# sourceMappingURL=flycheck_index.js.map