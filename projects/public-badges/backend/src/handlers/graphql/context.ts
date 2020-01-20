import eventBus, { PublicBadgesEventBus } from "@eventBus";
import * as stores from "@stores";

export interface ApolloContext {
  rawEvent: { headers: { origin: string } };
  functionContext: { functionName: string };
  stores: stores.PublicBadgesStores;
  eventBus: PublicBadgesEventBus;
}

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
