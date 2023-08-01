"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
function getLesson(lessonId) {
    return axios_1.default.get("lessons/".concat(lessonId));
}
var promise = getLesson(1);
promise.then(function (response) {
    var lesson = response.data;
});
