"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema = __importStar(require("./schema.graphql"));
const fixtures_1 = require("./fixtures");
const typeDefs = schema;
const resolvers = {
    Query: {
        getAllBadges: () => fixtures_1.badges,
        getBadge: (_, { badgeId }, __) => {
            if (badgeId) {
                const badge = fixtures_1.badges.find((badge) => badge.badgeId = badgeId);
                return badge || null;
            }
            return fixtures_1.badges[0];
        }
    }
};
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs,
    resolvers: resolvers
});
exports.handler = server.createHandler();
//# sourceMappingURL=index.js.map