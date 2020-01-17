import echo from "./echo";
import graphql from "./graphql";
import so from "./saveOrganization";
import sb from "./saveBadge";
import ss from "./saveSignature";
import ao from "./approveOrganization";
import ur from "./updateRegistry";
import rvc from "./runValueCaseScenarios";
import poba from "./prepareOpenBadgeArtifact";
import soba from "./signOpenBadgeArtifact";
import { Handler as AWSHandler } from "aws-lambda";
import eventBus from "../eventBus";
import { PublicBadgesHandler } from "../types";

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

const saveOrganization = handler(so);
const saveBadge = handler(sb);
const approveOrganization = handler(ao);
const updateRegistry = handler(ur);
const runValueCaseScenarios = handler(rvc);
const prepareOpenBadgeArtifact = handler(poba);
const signOpenBadgeArtifact = handler(soba);
const saveSignature = handler(ss);

export {
  echo,
  graphql,
  updateRegistry,
  approveOrganization,
  saveBadge,
  saveOrganization,
  runValueCaseScenarios,
  prepareOpenBadgeArtifact,
  signOpenBadgeArtifact,
  saveSignature
};
