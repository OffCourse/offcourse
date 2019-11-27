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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const test_1 = __importDefault(require("./cassettes/test"));
const frame_1 = __importStar(require("./frame"));
const controller_1 = __importDefault(require("./controller"));
const init = () => __awaiter(this, void 0, void 0, function* () {
    const machine = frame_1.default
        .withContext(Object.assign({}, frame_1.context, { controller: controller_1.default }))
        .withConfig(frame_1.config);
    const botService = xstate_1.interpret(machine).onTransition(state => {
        console.log("Transitioned:" + state.value + " " + state.changed);
    });
    botService.start();
    return botService;
});
const main = () => __awaiter(this, void 0, void 0, function* () {
    const botService = yield init();
    botService.send("INSERT_CASSETTE", {
        cassette: test_1.default
    });
    botService.send("INSERT_CASSETTE", {
        cassette: Object.assign({}, test_1.default, { verb: "run" })
    });
    botService.send("INSERT_CASSETTE", {
        cassette: Object.assign({}, test_1.default, { verb: "play" })
    });
    botService.send("INSERT_CASSETTE", {
        cassette: Object.assign({}, test_1.default, { verb: "say" })
    });
});
main();
//# sourceMappingURL=index.js.map