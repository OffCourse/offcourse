"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const initialize = xstate_1.assign({
    health: (_, { health }) => {
        return health || 100;
    }
});
const botMachine = xstate_1.Machine({
    id: "bot",
    initial: "booting",
    context: {
        health: "UNKNOWN"
    },
    states: {
        booting: {
            on: {
                SUCCEEDED: {
                    target: "booted",
                    actions: "initialize"
                },
                FAILED: "crashed"
            }
        },
        booted: {
            type: "final"
        },
        crashed: {
            type: "final"
        }
    }
}, {
    actions: {
        initialize
    }
});
const botService = xstate_1.interpret(botMachine).onTransition(state => console.log(state.context));
botService.start();
exports.default = botService;
//# sourceMappingURL=machine.js.map