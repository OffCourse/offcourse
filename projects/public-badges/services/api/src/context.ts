import * as stores from "./stores";
import eventBus from "./eventBus";
import { ApolloContext } from "./types";

const context: ApolloContext = { stores, eventBus };

export default context;
