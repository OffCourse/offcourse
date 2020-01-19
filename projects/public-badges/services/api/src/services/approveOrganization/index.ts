import {
  PublicBadgesEventType as EV,
  OrganizationApprovalAcceptedEvent,
  OrganizationApprovalRequestedEvent,
  PublicBadgesHandler
} from "@types";

export type InputEvent = OrganizationApprovalRequestedEvent;
export type OutputEvent = OrganizationApprovalAcceptedEvent;

const approveOrganization: PublicBadgesHandler<
  InputEvent,
  OutputEvent
> = async ({ detailType, detail }) => {
  switch (detailType) {
    case EV.ORGANIZATION_APPROVAL_REQUESTED: {
      return {
        detailType: EV.ORGANIZATION_APPROVAL_ACCEPTED,
        detail
      };
    }
  }
};

export default approveOrganization;
