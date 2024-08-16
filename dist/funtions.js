"use strict";
function calculateTax(income) {
    console.log(income);
}
function calculateTax2(income) {
    console.log(income);
    return 0;
}
function calculateTax3(income) {
    console.log(income);
    return 0;
}
function calculateTax5(income) {
    if (income > 3000)
        return income * 1.2;
    return income * 1.3;
}
function anyFunction(first, second) {
    console.log(first);
    console.log(second);
    console.log(second || 2);
    return 0;
}
anyFunction(1, 2);
anyFunction(1);
function anyFunction2(first, second = 2) {
    console.log(first);
    console.log(second);
    return 0;
}
//# sourceMappingURL=funtions.js.map