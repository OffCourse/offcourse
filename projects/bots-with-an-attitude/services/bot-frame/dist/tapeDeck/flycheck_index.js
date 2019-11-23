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
const actions = __importStar(require("./actions"));
exports.tapeDeck = ({ controller, index }) => {
    return xstate_1.Machine({
        id: "tapeDeck",
        context: {
            index,
            controller,
            cassette: null
        },
        initial: "idle",
        states: {
            idle: {
                on: {
                    POWER_ON: {
                        target: "empty",
                    }
                },
            },
            empty: {
                entry: "register",
                on: {
                    INSERT: {
                        target: "loaded",
                        actions: "insertTape"
                    },
                    POWER_OFF: {
                        target: "idle"
                    }
                }
            },
            loaded: {
                on: {
                    RECORD: {
                        target: "recording"
                    },
                    EJECT: {
                        target: "empty"
                    }
                }
            },
            recording: {
                entry: "listen",
                on: {
                    STOP: {
                        target: "loaded"
                    }
                }
            }
        }
    }, {
        actions
    });
};
exports.default = exports.tapeDeck;
//# sourceMappingURL=flycheck_index.js.map