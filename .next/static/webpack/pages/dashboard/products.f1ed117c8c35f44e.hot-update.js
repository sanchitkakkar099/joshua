"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/products",{

/***/ "./pages/dashboard/products.js":
/*!*************************************!*\
  !*** ./pages/dashboard/products.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DashboardLayout */ \"./components/DashboardLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = (param)=>{\n    let { products  } = param;\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const itemsPerPage = 10;\n    const indexOfLastItem = currentPage * itemsPerPage;\n    const indexOfFirstItem = indexOfLastItem - itemsPerPage;\n    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);\n    console.log(currentItems);\n    // handle pagination button clicks\n    const handlePageChange = (pageNumber)=>setCurrentPage(pageNumber);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            header: \"Products\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"table  table-striped\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Product Title\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Product type\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Product Tags\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Action\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: currentItems && (currentItems === null || currentItems === void 0 ? void 0 : currentItems.map((product, index)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: product.title\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: product.product_type\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: product.tags\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"btn btn-dange\",\n                                                        children: \"Delete\"\n                                                    }, void 0, false, void 0, void 0)\n                                                }, void 0, false, void 0, void 0)\n                                            ]\n                                        }, void 0, true, void 0, void 0);\n                                    }))\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-4\",\n                            children: [\n                                currentPage > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100\",\n                                    onClick: ()=>handlePageChange(currentPage - 1),\n                                    children: \"←\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mx-1 px-4 py-2 rounded text-primary\",\n                                    children: currentPage\n                                }, void 0, false, void 0, void 0),\n                                currentPage < Math.ceil(products.length / itemsPerPage) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100\",\n                                    onClick: ()=>handlePageChange(currentPage + 1),\n                                    children: \"→\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    ]\n                }, void 0, true, void 0, void 0)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Xava\\\\artovision\\\\pages\\\\dashboard\\\\products.js\",\n            lineNumber: 183,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Products, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErRDtBQXVLbkI7QUFDVTtBQUNEO0FBRXJELE1BQU1PLFdBQVcsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUMxQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVUsZUFBZTtJQUNyQixNQUFNQyxrQkFBa0JILGNBQWNFO0lBQ3RDLE1BQU1FLG1CQUFtQkQsa0JBQWtCRDtJQUMzQyxNQUFNRyxlQUFlTixTQUFTTyxLQUFLLENBQUNGLGtCQUFrQkQ7SUFDdERJLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixrQ0FBa0M7SUFDbEMsTUFBTUksbUJBQW1CLENBQUNDLGFBQWVULGVBQWVTO0lBQ3hELHFCQUNJO2tCQUNJLDRFQUFDbkIsbUVBQWVBO1lBQUNvQixRQUFRO1lBRXJCQyx1QkFDSzswQkFDRyw0RUFBQ2xCLHNEQUFTQTs7c0NBQ04sOERBQUNtQjs0QkFBTUMsV0FBVTs7OENBQ2IsOERBQUNDOzhDQUNHLDRFQUFDQzs7MERBQ0csOERBQUNDO2dEQUFHQyxPQUFNOzBEQUFNOzswREFDaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzswREFDaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzswREFFaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzs7Ozs4Q0FHeEIsOERBQUNDOzhDQUNJZCxpQkFBZ0JBLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY2UsR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7d0NBQ25ELHFCQUNJLDhEQUFDTjs7OERBQ0csOERBQUNPOzhEQUFJRixRQUFRRyxLQUFLOzs4REFDbEIsOERBQUNEOzhEQUFJRixRQUFRSSxZQUFZOzs4REFDekIsOERBQUNGOzhEQUFJRixRQUFRSyxJQUFJOzs4REFFakIsOERBQUNIOzhEQUFHLDRFQUFDSTt3REFBT2IsV0FBVztrRUFBaUI7Ozs7O29DQUdwRDs7OztzQ0FHUiw4REFBQ2M7NEJBQUlkLFdBQVU7O2dDQUVWZCxjQUFjLG1CQUNYLDhEQUFDMkI7b0NBQ0diLFdBQVU7b0NBQ1ZlLFNBQVMsSUFBTXBCLGlCQUFpQlQsY0FBYzs4Q0FDakQ7OzhDQU1MLDhEQUFDOEI7b0NBQUtoQixXQUFVOzhDQUF1Q2Q7O2dDQUd0REEsY0FBYytCLEtBQUtDLElBQUksQ0FBQ2pDLFNBQVNrQyxNQUFNLEdBQUcvQiwrQkFDdkMsOERBQUN5QjtvQ0FDR2IsV0FBVTtvQ0FDVmUsU0FBUyxJQUFNcEIsaUJBQWlCVCxjQUFjOzhDQUNqRDs7Ozs7Ozs7Ozs7OztBQWFyQztHQXhFTUY7S0FBQUE7O0FBaUdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC9wcm9kdWN0cy5qcz9hYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkTGF5b3V0XCI7XHJcbi8vIGltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbi8vIGltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbi8vIGNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbi8vICAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuLy8gICAgIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDEpO1xyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBjb25zdCBsaW1pdCA9IDEwOyAvLyBudW1iZXIgb2YgcHJvZHVjdHMgdG8gZmV0Y2ggcGVyIHBhZ2VcclxuLy8gICAgICAgICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7IC8vIGNhbGN1bGF0ZSB0aGUgb2Zmc2V0XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2FkbWluL3Byb2R1Y3RzL2FydG92aXNpb25gKTtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSkgICAgXHJcbi8vICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMpO1xyXG4vLyAgICAgICAgICAgICBzZXRUb3RhbFBhZ2VzKE1hdGguY2VpbChyZXNwb25zZS5kYXRhLnByb2R1Y3RzLmxlbmd0aCAvIGxpbWl0KSk7XHJcbi8vICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICBmZXRjaERhdGEoKTtcclxuLy8gICAgIH0sIFtwYWdlXSk7XHJcblxyXG4vLyAgICAgY29uc3QgaGFuZGxlUHJldlBhZ2UgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlIC0gMSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdCBwcmV2UGFnZSA9IHBhZ2UgPiAxID8gcGFnZSAtIDEgOiBudWxsO1xyXG4vLyAgICAgY29uc3QgbmV4dFBhZ2UgPSBwYWdlIDwgdG90YWxQYWdlcyA/IHBhZ2UgKyAxIDogbnVsbDtcclxuXHJcbi8vICAgICAvLyBjb25zdCBbZ2V0UHJvZHVjdCxzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbi8vICAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcclxuLy8gICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuLy8gICAgIC8vIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoJ215RGF0YScsIGFzeW5jICgpID0+IHtcclxuLy8gICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9hbGxjdXN0b21lcmApO1xyXG4vLyAgICAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZTtcclxuLy8gICAgIC8vICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4vLyAgICAgLy8gfSk7XHJcblxyXG4vLyAgICAgLy8gY29uc3Qgc3VibWl0T3JkZXJGaWx0ZXJzID0gdXNlTXV0YXRpb24oYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4vLyAgICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9hZG1pbi9nZXRQcm9kdWN0c2AsIGZvcm1EYXRhKTtcclxuLy8gICAgIC8vICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4vLyAgICAgLy8gICAgIHNldFByb2R1Y3QocHJvZHVjdHMuZGF0YSlcclxuLy8gICAgIC8vICAgICByZXR1cm4gcHJvZHVjdHMuZGF0YTtcclxuLy8gICAgIC8vIH0pO1xyXG4vLyAgICAgLy8gY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4vLyAgICAgLy8gICAgIHRyeSB7XHJcbi8vICAgICAvLyAgICAgICAgIGF3YWl0IHN1Ym1pdE9yZGVyRmlsdGVycy5tdXRhdGVBc3luYyhkYXRhKTtcclxuLy8gICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgLy8gICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbi8vICAgICAvLyAgICAgfVxyXG4vLyAgICAgLy8gfTtcclxuLy8gICAgIC8vIGlmIChpc0xvYWRpbmcpIHtcclxuLy8gICAgIC8vICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4vLyAgICAgLy8gfVxyXG5cclxuLy8gICAgIC8vIGlmIChpc0Vycm9yKSB7XHJcbi8vICAgICAvLyAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuLy8gICAgIC8vIH1cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgPERhc2hib2FyZExheW91dCBoZWFkZXI9e1wiUHJvZHVjdHNcIn0gY29udGVudD17KFxyXG4vLyAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5MaXN0IFByb2R1Y3Q8L2gxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgbXQtNVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJvdyBnLTQgYm9yZGVyXCIgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEVtYWlsM1wiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+UHJvZHVjdCBUeXBlczwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgey4uLnJlZ2lzdGVyKFwicHJvZHVjdF90eXBlXCIpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtcIm51bGxcIn0+Q2hvb3NlLi4uPC9vcHRpb24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcImFjdGl2ZVwifT5BY3RpdmU8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiYXJjaGl2ZWRcIn0+QXJjaGl2ZWQ8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiZHJhZnRcIn0+RHJhZnQ8L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0RW1haWwzXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWwgXCI+U3RvcmUgQ3VzdG9tZXJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6PC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtcImZvcm0tc2VsZWN0XCJ9IHsuLi5yZWdpc3RlcihcImN1c3RvbWVyXCIpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eydudWxsJ30+Q2hvb3NlLi48L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGE/LmRhdGE/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpdGVtLmVtYWlsfT57aXRlbS5lbWFpbH08L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIG1zLTNcIj5TdWJtaXQ8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4vLyA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgIHRhYmxlLXN0cmlwZWRcIj5cclxuLy8gICAgIDx0aGVhZD5cclxuLy8gICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgVGl0bGU8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IHR5cGU8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IFRhZ3M8L3RoPlxyXG4vLyAgICAgICAgICAgICB7Lyo8dGggc2NvcGU9XCJjb2xcIj5PcmRlciBEYXRlPC90aD4qL31cclxuLy8gICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QWN0aW9uPC90aD5cclxuLy8gICAgICAgICA8L3RyPlxyXG4vLyAgICAgPC90aGVhZD5cclxuLy8gICAgIDx0Ym9keT5cclxuLy8gICAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHM/Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGl0bGV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucHJvZHVjdF90eXBlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnRhZ3N9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Lyo8dGQ+e3Byb2R1Y3QuY3JlYXRlZF9hdH08L3RkPiovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gYnRuLWRhbmdlXCJ9PkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgfSl9XHJcbi8vICAgICA8L3Rib2R5PlxyXG4vLyA8L3RhYmxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUHJldlBhZ2V9IGNsYXNzTmFtZT1cIm14LTEgYnRuIGJ0bi1zZWNvbmRhcnlcIj5QcmV2aW91czwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IGNsYXNzTmFtZT1cIm14LTEgYnRuIGJ0bi1zZWNvbmRhcnlcIj5OZXh0PC9idXR0b24+ICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTFcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZQYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcHJldlBhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UHJldmlvdXM8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0xXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IW5leHRQYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICApfSAvPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgaXRlbXNQZXJQYWdlID0gMTA7XHJcbiAgICBjb25zdCBpbmRleE9mTGFzdEl0ZW0gPSBjdXJyZW50UGFnZSAqIGl0ZW1zUGVyUGFnZTtcclxuICAgIGNvbnN0IGluZGV4T2ZGaXJzdEl0ZW0gPSBpbmRleE9mTGFzdEl0ZW0gLSBpdGVtc1BlclBhZ2U7XHJcbiAgICBjb25zdCBjdXJyZW50SXRlbXMgPSBwcm9kdWN0cy5zbGljZShpbmRleE9mRmlyc3RJdGVtLCBpbmRleE9mTGFzdEl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudEl0ZW1zKVxyXG4gICAgLy8gaGFuZGxlIHBhZ2luYXRpb24gYnV0dG9uIGNsaWNrc1xyXG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlTnVtYmVyKSA9PiBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPERhc2hib2FyZExheW91dCBoZWFkZXI9e1wiUHJvZHVjdHNcIn1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSAgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdCBUaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IHR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdCBUYWdzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjx0aCBzY29wZT1cImNvbFwiPk9yZGVyIERhdGU8L3RoPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRJdGVtcyAmJiBjdXJyZW50SXRlbXM/Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGFnc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dGQ+e3Byb2R1Y3QuY3JlYXRlZF9hdH08L3RkPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1kYW5nZVwifT5EZWxldGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogcmVuZGVyIHRoZSBwcmV2aW91cyBwYWdlIGJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBhZ2UgPiAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMSBweC00IHB5LTIgcm91bmRlZCBiZy13aGl0ZSB0ZXh0LWJsdWUtNTAwIGhvdmVyOmJnLWdyYXktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4MjE5MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJlbmRlciB0aGUgY3VycmVudCBwYWdlIG51bWJlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0xIHB4LTQgcHktMiByb3VuZGVkIHRleHQtcHJpbWFyeVwiPntjdXJyZW50UGFnZX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZW5kZXIgdGhlIG5leHQgcGFnZSBidXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQYWdlIDwgTWF0aC5jZWlsKHByb2R1Y3RzLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0xIHB4LTQgcHktMiByb3VuZGVkIGJnLXdoaXRlIHRleHQtYmx1ZS01MDAgaG92ZXI6YmctZ3JheS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShjdXJyZW50UGFnZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gyMTkyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpIHx8IDE7XHJcbiAgICBjb25zdCBsaW1pdCA9IDEyO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBsaW1pdDtcclxuXHJcbiAgICAvLyBGZXRjaCBwcm9kdWN0cyBmcm9tIEFQSSB1c2luZyBsaW1pdCBhbmQgb2Zmc2V0XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9hZG1pbi9wcm9kdWN0cy9hcnRvdmlzaW9uYCk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpICAgIFxyXG4gICAgLy8gICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKTtcclxuICAgIC8vICAgc2V0VG90YWxQYWdlcyhNYXRoLmNlaWwocmVzcG9uc2UuZGF0YS5wcm9kdWN0cy5sZW5ndGggLyBsaW1pdCkpO1xyXG5cclxuICAgIGNvbnN0IG51bVByb2R1Y3RzID0gMTA7IC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgdG90YWwgbnVtYmVyIG9mIHByb2R1Y3RzXHJcbiAgICBjb25zdCBudW1QYWdlcyA9IE1hdGguY2VpbChudW1Qcm9kdWN0cyAvIGxpbWl0KTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0c1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIG51bVBhZ2VzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiRGFzaGJvYXJkTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJQYWdpbmF0aW9uIiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJpdGVtc1BlclBhZ2UiLCJpbmRleE9mTGFzdEl0ZW0iLCJpbmRleE9mRmlyc3RJdGVtIiwiY3VycmVudEl0ZW1zIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2VOdW1iZXIiLCJoZWFkZXIiLCJjb250ZW50IiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwidGQiLCJ0aXRsZSIsInByb2R1Y3RfdHlwZSIsInRhZ3MiLCJidXR0b24iLCJkaXYiLCJvbkNsaWNrIiwic3BhbiIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/products.js\n"));

/***/ })

});