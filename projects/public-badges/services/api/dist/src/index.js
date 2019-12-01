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
const fixture_json_1 = __importDefault(require("../fixture.json"));
const { id, type, recipient, issuedOn, expires } = fixture_json_1.default;
const score = {
    accountable: 0,
    sovereign: 70,
    userCentric: 10,
    transparent: 10,
    open: 10
};
const badgeWrapper = {
    id,
    type,
    score,
    recipient,
    issuedOn,
    expires,
    artifact: {
        json: JSON.stringify(fixture_json_1.default)
    }
};
exports.handler = (event) => __awaiter(this, void 0, void 0, function* () {
    const badges = [
        Object.assign({}, badgeWrapper),
        Object.assign({}, badgeWrapper, { id: "urn:uuid:e79a6c18-787e-4868-8e65-e6a4530fb419" })
    ];
    const badge = badges.find(({ id }) => id === event.badgeId);
    return badge;
});
//# sourceMappingURL=index.js.map