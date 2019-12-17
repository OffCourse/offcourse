"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_js_1 = require("../generated/graphql.js");
const Contact = {
    name({ name }) {
        return name;
    },
    email({ email }) {
        return email;
    }
};
exports.Contact = Contact;
const DomainNameIdentity = {
    domainName({ domainName }) {
        return domainName;
    }
};
exports.DomainNameIdentity = DomainNameIdentity;
const Identity = {
    __resolveType({ domainName }) {
        return "DomainNameIdentity";
    }
};
exports.Identity = Identity;
const Organization = {
    __resolveType({ status }) {
        switch (status) {
            case graphql_js_1.OrganizationStatus.Pending: {
                return "PendingOrganization";
            }
            case graphql_js_1.OrganizationStatus.Approved: {
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
    identity({ identity }) {
        return identity;
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