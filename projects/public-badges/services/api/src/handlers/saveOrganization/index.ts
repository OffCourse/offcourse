import putOrganization from "./putOrganization";
import {
  PublicBadgesEventType as EV,
  OrganizationRegistrationRequestedEvent,
  OrganizationApprovalAcceptedEvent,
  OrganizationApprovalRequestedEvent,
  OrganizationApprovedEvent
} from "../../types/events.js";
import { ApprovedOrganization, PendingOrganization, PublicBadgesHandler } from "../../types";
import { OrganizationStatus } from "../../generated/graphql";

export type InputEvent =
  | OrganizationRegistrationRequestedEvent
  | OrganizationApprovalAcceptedEvent;

export type OutputEvent =
  | OrganizationApprovalRequestedEvent
  | OrganizationApprovedEvent;

const saveOrganization: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail
}) => {
  const { organizationId: id } = detail;
  console.log("XXX");
  switch (detailType) {
    case EV.ORGANIZATION_REGISTRATION_REQUESTED: {
      const organization: PendingOrganization = {
        ...detail,
        status: OrganizationStatus.Pending
      };
      await putOrganization(id, organization);
      return {
        detailType: EV.ORGANIZATION_APPROVAL_REQUESTED,
        detail: organization
      }
    }
    case EV.ORGANIZATION_APPROVAL_ACCEPTED: {
      const organization: ApprovedOrganization = {
        ...detail,
        status: OrganizationStatus.Approved,
        approvedBy: "yeehaa@fasljfsd.com",
        approvedOn: `${Date.now()}`

      }
      await putOrganization(id, organization);
      return {
        detailType: EV.ORGANIZATION_APPROVED,
        detail: organization
      };
    }
  }
}

export default saveOrganization;
