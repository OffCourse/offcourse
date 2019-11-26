"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const verb = "test";
const objects = ["funk"];
const run = ({ memory }) => __awaiter(void 0, void 0, void 0, function* () {
    const seconds = 1;
    yield timeout(seconds * 1000);
    const answer = yield memory.get("name").then();
    return { results: [answer] };
});
const cassette = {
    verb,
    objects,
    run
};
exports.default = cassette;
//# sourceMappingURL=test.js.map