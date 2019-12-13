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
        if (typeof value !== 'string') {
            throw new TypeError(`Value is not string: ${value}`);
        }
        if (!VALUECASE_ID_REGEX.test(value)) {
            throw new TypeError(`Value is not a valid email address: ${value}`);
        }
        return value;
    },
    parseValue(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value is not string');
        }
        if (!VALUECASE_ID_REGEX.test(value)) {
            throw new TypeError(`Value is not a valid email address: ${value}`);
        }
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind !== language_1.Kind.STRING) {
            throw new error_1.GraphQLError(`Can only validate strings as email addresses but got a: ${ast.kind}`);
        }
        if (!VALUECASE_ID_REGEX.test(ast.value)) {
            throw new TypeError(`Value is not a valid email address: ${ast.value}`);
        }
        return ast.value;
    },
});
exports.ValueCaseID = ValueCaseID;
//# sourceMappingURL=Scalars.js.map