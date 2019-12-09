"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema = __importStar(require("./Schema.graphql"));
const Query = __importStar(require("./Query.graphql"));
const Mutation = __importStar(require("./Mutation.graphql"));
const PublicBadge = __importStar(require("./PublicBadge.graphql"));
const Organization = __importStar(require("./Organization.graphql"));
const Status = __importStar(require("./Status.graphql"));
const typeDefs = [Schema, Query, Mutation, Status, PublicBadge, Organization];
exports.default = typeDefs;
//# sourceMappingURL=index.js.map