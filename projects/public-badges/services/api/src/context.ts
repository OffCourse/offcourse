import * as stores from "./stores";
import eventBus from "./eventBus";
import { ApolloContext } from "./types";

const context: (args: { event: any; context: any }) => ApolloContext = ({
  event,
  context
}) => {
  return {
    rawEvent: event,
    functionContext: context,
    stores,
    eventBus
  };
};

export default context;
