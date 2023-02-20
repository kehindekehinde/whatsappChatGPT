"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/message";
exports.ids = ["pages/api/message"];
exports.modules = {

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "(api)/./pages/api/message.js":
/*!******************************!*\
  !*** ./pages/api/message.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    messageResponse.message(\"Reply goes here\");\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsTUFBTUMsb0JBQW9CQyxxRUFBeUM7SUFDbkUsSUFBSUUsa0JBQWtCLElBQUlIO0lBQzFCRyxnQkFBZ0JDLE9BQU8sQ0FBQztJQUN4QixnQkFBZ0I7SUFDaEJMLElBQUlNLFNBQVMsQ0FBQyxLQUFLO1FBQ25CLGdCQUFnQjtJQUNoQjtJQUNBTixJQUFJTyxHQUFHLENBQUNILGdCQUFnQkksUUFBUTtBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhdHNhcHBjaGF0Z3B0Ly4vcGFnZXMvYXBpL21lc3NhZ2UuanM/ZmRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBNZXNzYWdpbmdSZXNwb25zZSA9IHJlcXVpcmUoJ3R3aWxpbycpLnR3aW1sLk1lc3NhZ2luZ1Jlc3BvbnNlO1xyXG4gICAgdmFyIG1lc3NhZ2VSZXNwb25zZSA9IG5ldyBNZXNzYWdpbmdSZXNwb25zZSgpO1xyXG4gICAgbWVzc2FnZVJlc3BvbnNlLm1lc3NhZ2UoJ1JlcGx5IGdvZXMgaGVyZScpO1xyXG4gICAgLy8gc2VuZCByZXNwb25zZVxyXG4gICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC94bWwnXHJcbiAgICB9KTtcclxuICAgIHJlcy5lbmQobWVzc2FnZVJlc3BvbnNlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIk1lc3NhZ2luZ1Jlc3BvbnNlIiwicmVxdWlyZSIsInR3aW1sIiwibWVzc2FnZVJlc3BvbnNlIiwibWVzc2FnZSIsIndyaXRlSGVhZCIsImVuZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/message.js"));
module.exports = __webpack_exports__;

})();