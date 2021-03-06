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
const machine = xstate_1.Machine({
    id: "tapeDeck",
    initial: "empty",
    states: {
        empty: {
            entry: "register",
            on: {
                INSERT: {
                    target: "loaded",
                    actions: "insertTape"
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
});
exports.config = {
    actions
};
exports.context = {
    name: null,
    index: null,
    controller: null,
    cassette: null
};
exports.default = machine;
//# sourceMappingURL=index.js.map