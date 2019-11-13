"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatter = ({ verb, object, results }) => `You asked me to ${verb} ${object}. I found: ${JSON.stringify(results)}`;
exports.createRegex = ({ verb, objects }) => new RegExp(`${verb} (${objects.join("|")})`, "i");
//# sourceMappingURL=flycheck_helpers.js.map