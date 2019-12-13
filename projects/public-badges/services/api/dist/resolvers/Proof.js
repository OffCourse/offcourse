"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Proof = {
    proofId({ id }) {
        return id.replace(/urn:uuid:/, "");
    },
    name({ name }) {
        return name;
    },
    genre({ genre }) {
        return genre;
    },
    description({ description }) {
        return description;
    },
    narrative({ narrative }) {
        return narrative;
    }
};
exports.default = Proof;
//# sourceMappingURL=Proof.js.map