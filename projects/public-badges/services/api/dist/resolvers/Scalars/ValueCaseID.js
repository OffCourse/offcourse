"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definition_1 = require("graphql/type/definition");
const error_1 = require("graphql/error");
const language_1 = require("graphql/language");
const VALUECASE_ID_REGEX = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+$/);
const ValueCaseID = new definition_1.GraphQLScalarType({
    name: "ValueCaseId",
    description: "",
    serialize(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Value is not string: ${value}`);
        }
        if (!VALUECASE_ID_REGEX.test(value)) {
            throw new TypeError(`Value is not a valid valuecase id: ${value}`);
        }
        return value;
    },
    parseValue(value) {
        if (typeof value !== "string") {
            throw new TypeError("Value is not string");
        }
        if (!VALUECASE_ID_REGEX.test(value)) {
            throw new TypeError(`Value is not a valid valuecase id: ${value}`);
        }
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind !== language_1.Kind.STRING) {
            throw new error_1.GraphQLError(`Can only validate strings as valuecase ides but got a: ${ast.kind}`);
        }
        if (!VALUECASE_ID_REGEX.test(ast.value)) {
            throw new TypeError(`Value is not a valid valuecase id: ${ast.value}`);
        }
        return ast.value;
    }
});
exports.default = ValueCaseID;
//# sourceMappingURL=ValueCaseID.js.map