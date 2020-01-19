"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _types_1 = require("@types");
const Contact = {
    name({ name }) {
        return name;
    },
    email({ email }) {
        return email;
    }
};
exports.Contact = Contact;
const Organization = {
    __resolveType({ status }) {
        switch (status) {
            case _types_1.OrganizationStatus.Pending: {
                return "PendingOrganization";
            }
            case _types_1.OrganizationStatus.Approved: {
                return "ApprovedOrganization";
            }
        }
    },
    organizationId({ organizationId }) {
        return organizationId;
    },
    status({ status }) {
        return status;
    },
    name({ name }) {
        return name;
    },
    contact({ contact }) {
        return contact;
    },
    admin({ admin }) {
        return admin;
    },
    urls({ urls }) {
        return urls;
    },
    domainName({ domainName }) {
        return domainName;
    }
};
exports.Organization = Organization;
const PendingOrganization = Object.assign({}, Organization);
exports.PendingOrganization = PendingOrganization;
const ApprovedOrganization = Object.assign(Object.assign({}, PendingOrganization), { approvedBy({ approvedBy }) {
        return approvedBy;
    },
    approvedOn({ approvedOn }) {
        return approvedOn;
    } });
exports.ApprovedOrganization = ApprovedOrganization;
//# sourceMappingURL=Organization.js.map