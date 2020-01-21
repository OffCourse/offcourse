import "module-alias/register";
import { map } from "ramda";
import eventBus from "@eventBus";
import { graphql, echo } from "./handlers";
import { Handler as AWSHandler } from "aws-lambda";
import { PublicBadgesHandler } from "@types";
import * as services from "./services";

const handler: (
  handler: PublicBadgesHandler<any, any>
) => AWSHandler = handler => {
  return async (awsEvent, _context, callback) => {
    console.log(awsEvent);
    const detail = awsEvent.detail;
    const detailType = awsEvent["detail-type"];
    const event = await handler({ detailType, detail });
    if (event) {
      const reply = await eventBus.put(event);
      callback(null, reply);
    }
    callback(null, "nothing memorable happened");
  };
};

const {
  saveOrganization,
  saveBadge,
  approveOrganization,
  updateRegistry,
  prepareOpenBadgeArtifact,
  signOpenBadgeArtifact,
  runValueCaseScenarios
} = map(service => handler(service), services);

export {
  graphql,
  echo,
  saveOrganization,
  saveBadge,
  approveOrganization,
  updateRegistry,
  prepareOpenBadgeArtifact,
  signOpenBadgeArtifact,
  runValueCaseScenarios
};
