"use strict";
function kgToLbs(weigth) {
    console.log(weigth);
    if (typeof weigth === 'number') {
        return weigth * 1.22;
    }
    else {
        return parseInt(weigth) * 1.22;
    }
}
kgToLbs(12);
kgToLbs('12');
//# sourceMappingURL=unionType.js.map