import * as stores from "./stores";
import { ApolloContext, PublicBadgesEventBus } from "./types";
import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies

const eventBridge = new AWS.EventBridge({ region: 'us-east-1' });

const eventBus: PublicBadgesEventBus = {
  async put({ eventType, payload }) {
    const reply = await eventBridge
      .putEvents({
        Entries: [
          {
            Source: "public-badges.api-handler",
            DetailType: eventType,
            Detail: JSON.stringify(payload, null, 2)
          }
        ]
      })
      .promise();
    console.log(reply);
    return payload;
  }
};

const context: ApolloContext = { stores, eventBus };

export default context;
