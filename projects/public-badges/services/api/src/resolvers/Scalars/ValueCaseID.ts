import { GraphQLScalarType } from "graphql/type/definition";
import { GraphQLError } from "graphql/error";
import { Kind } from "graphql/language";
const VALUECASE_ID_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+$/
);

const ValueCaseID = new GraphQLScalarType({
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
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as valuecase ides but got a: ${ast.kind}`
      );
    }
    if (!VALUECASE_ID_REGEX.test(ast.value)) {
      throw new TypeError(`Value is not a valid valuecase id: ${ast.value}`);
    }
    return ast.value;
  }
});

export default ValueCaseID;
