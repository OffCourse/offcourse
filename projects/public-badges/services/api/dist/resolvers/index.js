"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = __importDefault(require("./Query"));
const Mutation_1 = __importDefault(require("./Mutation"));
const OpenBadge = __importStar(require("./OpenBadge"));
const PublicBadge = __importStar(require("./PublicBadge"));
const Proof = __importStar(require("./Proof"));
const ValueCase = __importStar(require("./ValueCase"));
const Organization = __importStar(require("./Organization"));
const Scalars = __importStar(require("./Scalars"));
const resolvers = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ Query: Query_1.default,
    Mutation: Mutation_1.default }, PublicBadge), Proof), OpenBadge), Organization), ValueCase), Scalars);
exports.default = resolvers;
//# sourceMappingURL=index.js.map