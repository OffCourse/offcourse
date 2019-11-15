"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cassette {
    constructor({ verb, objects, run, memory }) {
        this.verb = verb;
        this.objects = objects;
        this.run = () => run({ memory: memory.get(verb) });
    }
}
exports.default = Cassette;
//# sourceMappingURL=flycheck_Cassette.js.map