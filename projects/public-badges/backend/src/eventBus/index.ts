import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { EventBus, PublicBadgesEvent } from "@types";

const eventBridge = new AWS.EventBridge();

export type PublicBadgesEventBus = EventBus<PublicBadgesEvent>;

const eventBus: PublicBadgesEventBus = {
  put: async ({ detailType, detail }) => {
    const Source = process.env.HANDLER_NAME;
    if (!Source) {
      throw "The handler name must be set in your environment";
    }

    const DetailType = detailType;
    const Detail = JSON.stringify(detail, null, 2);

    const event = {
      Source,
      DetailType,
      Detail
    };
    console.log(event);
    const reply = await eventBridge
      .putEvents({
        Entries: [event]
      })
      .promise();
    console.log(Source, reply);
    return detail;
  }
};

export default eventBus;
