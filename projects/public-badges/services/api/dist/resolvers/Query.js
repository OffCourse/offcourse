"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query = {
    getBadge(_root, args, { stores }) {
        return stores.badgeInstance.fetch(args);
    },
    getAllBadges(_root, args, { stores }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const domainName = (_a = args) === null || _a === void 0 ? void 0 : _a.domainName;
            const { organizationId } = yield stores.registry.fetch({ domainName });
            return stores.badgeInstance.fetchAll({ organizationId });
        });
    },
    getOrganization(_root, { organizationId, domainName }, { stores }) {
        return stores.registry.fetch({ organizationId, domainName });
    },
    getAllOrganizations(_root, args, { stores }) {
        return stores.registry.fetchAll(args);
    },
    getValueCase(_root, args, { stores }) {
        return stores.valueCase.fetch(args);
    },
    getAllValueCases(_root, args, { stores }) {
        return stores.valueCase.fetchAll(args);
    }
};
exports.default = Query;
//# sourceMappingURL=Query.js.map