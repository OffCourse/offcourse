"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decksNotFull = ({ decks }, event) => {
    const emptyDecks = decks.filter(({ ref }) => ref.state.value === "empty");
    return emptyDecks.length > 0;
};
//# sourceMappingURL=flycheck_guards.js.map