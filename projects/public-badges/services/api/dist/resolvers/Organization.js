"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Organization = {
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