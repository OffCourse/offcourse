import { Handler } from "aws-lambda";
import { PendingOrganization } from "@types";

const echo: Handler<{ detail: PendingOrganization }> = (
  event,
  _context,
  callback
) => {
  console.log(JSON.stringify(event, null, 2));
  callback(null, event.detail);
};

export default echo;
