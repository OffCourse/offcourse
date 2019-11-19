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
const xstate_1 = require("xstate");
const test_1 = __importDefault(require("./cassettes/test"));
const frame_1 = __importDefault(require("./frame"));
const init = (config) => __awaiter(this, void 0, void 0, function* () {
    const botMachine = frame_1.default(config);
    const botService = xstate_1.interpret(botMachine).onTransition(state => {
        console.log("Transitioned:" + state.value + " " + state.context.health);
    });
    botService.start();
});
init({ cassettes: [test_1.default, Object.assign({}, test_1.default, { verb: "recommend" })] });
//# sourceMappingURL=flycheck_index.js.map