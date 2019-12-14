"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const resolvers_1 = __importDefault(require("../resolvers"));
const schema_1 = __importDefault(require("../schema"));
const context_1 = __importDefault(require("../context"));
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    context: context_1.default,
    introspection: true,
    playground: {
        endpoint: "/dev/graphql"
    }
});
const graphql = server.createHandler();
exports.default = graphql;
//# sourceMappingURL=graphql.js.map