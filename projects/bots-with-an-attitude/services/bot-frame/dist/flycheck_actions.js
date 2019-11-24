"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const tapeDeck_1 = __importStar(require("./tapeDeck"));
exports.initializeDecks = xstate_1.assign({
    decks: ({ controller, decks }) => {
        return decks.map((_deck, index) => {
            const name = `deck-${index}`;
            const context = {
                name,
                index,
                controller,
                cassette: null
            };
            const machine = tapeDeck_1.default.withConfig(tapeDeck_1.config).withContext(context);
            return {
                name,
                ref: xstate_1.spawn(machine, { name, sync: true })
            };
        });
    }
});
exports.sendMessage = ({ decks }) => {
    decks.forEach(({ ref }) => ref.send("POWER_ON"));
};
exports.insertCassette = ({ decks }, { cassette }) => {
    const { ref } = decks.find(({ ref }) => ref.state.value === "empty");
    ref.send({
        type: "INSERT",
        payload: {
            cassette
        }
    });
    ref.send({ type: "RECORD" });
};
exports.echo = (_context, event, meta) => {
    console.log(event);
};
//# sourceMappingURL=flycheck_actions.js.map