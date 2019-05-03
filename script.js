"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
rxjs_1.timer(1000)
    .subscribe(function (t) {
    console.log(t);
});
