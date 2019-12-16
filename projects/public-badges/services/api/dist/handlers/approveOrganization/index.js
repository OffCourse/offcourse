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
const events_js_1 = require("../../types/events.js");
const approveOrganization = ({ detailType, detail }) => __awaiter(void 0, void 0, void 0, function* () {
    switch (detailType) {
        case events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVAL_REQUESTED: {
            return {
                detailType: events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVAL_ACCEPTED,
                detail
            };
        }
    }
});
exports.default = approveOrganization;
//# sourceMappingURL=index.js.map