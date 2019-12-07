"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const Schema = __importStar(require("./schema/Schema.graphql"));
const Query = __importStar(require("./schema/Query.graphql"));
const Mutation = __importStar(require("./schema/Mutation.graphql"));
const PublicBadge = __importStar(require("./schema/PublicBadge.graphql"));
const Organization = __importStar(require("./schema/Organization.graphql"));
const stores = __importStar(require("./stores"));
const resolvers_1 = __importDefault(require("./resolvers"));
const context = { stores };
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: [Schema, Query, Mutation, PublicBadge, Organization],
    resolvers: resolvers_1.default,
    context
});
exports.handler = server.createHandler();
//# sourceMappingURL=index.js.map