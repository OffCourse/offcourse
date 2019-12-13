"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_js_1 = require("../generated/graphql.js");
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
    path({ path }) {
        return path;
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
    domains({ domains }) {
        return domains;
    }
};
exports.Organization = Organization;
const PendingOrganization = Object.assign({}, Organization);
exports.PendingOrganization = PendingOrganization;
const ApprovedOrganization = Object.assign({}, PendingOrganization, { approvedBy({ approvedBy }) {
        return approvedBy;
    },
    approvedOn({ approvedOn }) {
        return approvedOn;
    } });
exports.ApprovedOrganization = ApprovedOrganization;
const Domains = {
    main({ main }) {
        return main;
    },
    other({ other }) {
        return other;
    }
};
exports.Domains = Domains;
//# sourceMappingURL=Organization.js.map