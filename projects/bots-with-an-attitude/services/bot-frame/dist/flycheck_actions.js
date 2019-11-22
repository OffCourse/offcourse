"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const tapeDeck_1 = __importDefault(require("./tapeDeck"));
exports.initializeDecks = xstate_1.assign({
    decks: ({ controller, decks }) => {
        return decks.map((_deck, index) => {
            const name = `deck-${index}`;
            return { name, ref: xstate_1.spawn(tapeDeck_1.default({ controller }), { name, sync: true }) };
        });
    }
});
exports.sendMessage = ({ decks }) => {
    decks.forEach(({ ref }) => ref.send("POWER_ON"));
};
exports.insertCassette = ({ decks }) => {
    decks.forEach(({ ref }) => ref.send("INSERT"));
};
exports.echo = (_context, event, meta) => {
    console.log(event);
};
exports.deckNotFull = ({ decks }, event) => {
    const emptyDecks = decks.filter(({ ref }) => ref.state.value === "empty");
    return emptyDecks.length > 0;
};
//# sourceMappingURL=flycheck_actions.js.map