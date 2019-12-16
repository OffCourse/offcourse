import { Handler } from "aws-lambda";
import eventBus from "../../eventBus";
import putOrganization from "./putOrganization";
import {
  PublicBadgesEventType as EV,
  OrganizationRegistrationRequestedEvent,
  OrganizationApprovalAcceptedEvent
} from "../../types/events.js";
import { ApprovedOrganization, PendingOrganization } from "../../types";
import { OrganizationStatus } from "../../generated/graphql";

type SaveOrganization = Handler<
  any
>;

const saveOrganization: SaveOrganization = async (
  event,
  _context,
  callback
) => {
  const detail = event.detail;
  const { organizationId: id } = detail;
  console.log(event["detail-type"])
  switch (event["detail-type"]) {
    case EV.ORGANIZATION_REGISTRATION_REQUESTED: {
      const organization: PendingOrganization = {
        ...detail,
        status: OrganizationStatus.Pending
      };
      const response = await putOrganization(id, organization);
      const reply = await eventBus.put({
        detailType: EV.ORGANIZATION_APPROVAL_REQUESTED,
        detail: organization
      });
      console.log(reply);
      callback(null, id);
    }
    case EV.ORGANIZATION_APPROVAL_ACCEPTED: {
      const organization: ApprovedOrganization = {
        ...detail,
        status: OrganizationStatus.Approved,
        approvedBy: "yeehaa@fasljfsd.com",
        approvedOn: `${Date.now()}`

      }
      const reply = await eventBus.put({
        detailType: EV.ORGANIZATION_APPROVED,
        detail: organization
      });
      console.log(reply);
      callback(null, id);
    }
  }
};

export default saveOrganization;
