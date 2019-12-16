import echo from "./echo";
import graphql from "./graphql";
import so from "./saveOrganization";
import ao from "./approveOrganization";
import { Handler as AWSHandler } from "aws-lambda";
import eventBus from "../eventBus";
import { PublicBadgesHandler } from "../types";

const handler: (
  handler: PublicBadgesHandler<any, any>
) => AWSHandler = handler => {
  return async (awsEvent, _context, callback) => {
    const detail = awsEvent.detail;
    const detailType = awsEvent["detail-type"];
    const event = await handler({ detailType, detail });
    const reply = await eventBus.put(event);
    callback(null, reply);
  };
};

const saveOrganization = handler(so);
const approveOrganization = handler(ao);

export {
  echo,
  graphql,
  approveOrganization,
  saveOrganization
};
