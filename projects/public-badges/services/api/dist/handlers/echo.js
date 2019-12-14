"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const echo = (event, _context, callback) => {
    console.log(JSON.stringify(event, null, 2));
    callback(null, event.detail);
};
exports.default = echo;
//# sourceMappingURL=echo.js.map