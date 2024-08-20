"use strict";
var _a;
function getCustomer(num) {
    return num === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=accessOperator.js.map