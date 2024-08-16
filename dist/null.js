"use strict";
function greeting(name) {
    console.log(name.toUpperCase());
}
function greeting2(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello world!");
}
greeting2('Hello');
function greeting3(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello world!");
}
greeting3(null);
greeting3(undefined);
//# sourceMappingURL=null.js.map