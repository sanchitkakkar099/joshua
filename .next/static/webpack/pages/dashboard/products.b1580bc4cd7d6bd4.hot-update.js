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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DashboardLayout */ \"./components/DashboardLayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = (param)=>{\n    let { products  } = param;\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const itemsPerPage = 10;\n    const indexOfLastItem = currentPage * itemsPerPage;\n    const indexOfFirstItem = indexOfLastItem - itemsPerPage;\n    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);\n    console.log(currentItems);\n    // handle pagination button clicks\n    const handlePageChange = (pageNumber)=>setCurrentPage(pageNumber);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            header: \"Products\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"table  table-striped\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Product Title\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Status\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Product Thumbnail\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Product Tags\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                children: \"Action\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: currentItems && (currentItems === null || currentItems === void 0 ? void 0 : currentItems.map((product, index)=>{\n                                        const tagToCheck = \"Artovision\";\n                                        const hasTag = product.tags.split(\",\").some((tag)=>tag.trim() === tagToCheck);\n                                        if (!hasTag) {\n                                            var _product_images_;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.title\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.status\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: (_product_images_ = product.images[0]) === null || _product_images_ === void 0 ? void 0 : _product_images_.src,\n                                                            className: \"img-thumbnail w-25\"\n                                                        }, void 0, false, void 0, void 0)\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.tags\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"btn btn-info\",\n                                                            children: \"Create\"\n                                                        }, void 0, false, void 0, void 0)\n                                                    }, void 0, false, void 0, void 0)\n                                                ]\n                                            }, void 0, true, void 0, void 0);\n                                        }\n                                    }))\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-4\",\n                            children: [\n                                currentPage > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100\",\n                                    onClick: ()=>handlePageChange(currentPage - 1),\n                                    children: \"←\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mx-1 px-4 py-2 rounded text-primary\",\n                                    children: currentPage\n                                }, void 0, false, void 0, void 0),\n                                currentPage < Math.ceil(products.length / itemsPerPage) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100\",\n                                    onClick: ()=>handlePageChange(currentPage + 1),\n                                    children: \"→\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    ]\n                }, void 0, true, void 0, void 0)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Xava\\\\artovision\\\\pages\\\\dashboard\\\\products.js\",\n            lineNumber: 183,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Products, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErRDtBQXVLbkI7QUFDVTtBQUNEO0FBRXJELE1BQU1PLFdBQVcsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUMxQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVUsZUFBZTtJQUNyQixNQUFNQyxrQkFBa0JILGNBQWNFO0lBQ3RDLE1BQU1FLG1CQUFtQkQsa0JBQWtCRDtJQUMzQyxNQUFNRyxlQUFlTixTQUFTTyxLQUFLLENBQUNGLGtCQUFrQkQ7SUFDdERJLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixrQ0FBa0M7SUFDbEMsTUFBTUksbUJBQW1CLENBQUNDLGFBQWVULGVBQWVTO0lBQ3hELHFCQUNJO2tCQUNJLDRFQUFDbkIsbUVBQWVBO1lBQUNvQixRQUFRO1lBRXJCQyx1QkFDSzswQkFDRyw0RUFBQ2xCLHNEQUFTQTs7c0NBQ04sOERBQUNtQjs0QkFBTUMsV0FBVTs7OENBQ2IsOERBQUNDOzhDQUNHLDRFQUFDQzs7MERBQ0csOERBQUNDO2dEQUFHQyxPQUFNOzBEQUFNOzswREFDaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzswREFDaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzswREFDaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzswREFFaEIsOERBQUNEO2dEQUFHQyxPQUFNOzBEQUFNOzs7Ozs4Q0FHeEIsOERBQUNDOzhDQUNJZCxpQkFBZ0JBLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY2UsR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7d0NBQ25ELE1BQU1DLGFBQWE7d0NBQ25CLE1BQU1DLFNBQVNILFFBQVFJLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxPQUFPTjt3Q0FDbEUsSUFBSSxDQUFDQyxRQUFRO2dEQU1hSDs0Q0FMdEIscUJBQ0ksOERBQUNMOztrRUFDRyw4REFBQ2M7a0VBQUlULFFBQVFVLEtBQUs7O2tFQUNsQiw4REFBQ0Q7a0VBQUlULFFBQVFXLE1BQU07O2tFQUNuQiw4REFBQ0Y7a0VBQ0csNEVBQUNHOzREQUFJQyxLQUFLYixDQUFBQSxtQkFBQUEsUUFBUWMsTUFBTSxDQUFDLEVBQUUsY0FBakJkLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBbUJhLEdBQUc7NERBQUVwQixXQUFVOzs7a0VBRWhELDhEQUFDZ0I7a0VBQUlULFFBQVFJLElBQUk7O2tFQUVqQiw4REFBQ0s7a0VBQUcsNEVBQUNNOzREQUFPdEIsV0FBVztzRUFBZ0I7Ozs7O3dDQUduRCxDQUFDO29DQUNMOzs7O3NDQUdSLDhEQUFDdUI7NEJBQUl2QixXQUFVOztnQ0FFVmQsY0FBYyxtQkFDWCw4REFBQ29DO29DQUNHdEIsV0FBVTtvQ0FDVndCLFNBQVMsSUFBTTdCLGlCQUFpQlQsY0FBYzs4Q0FDakQ7OzhDQU1MLDhEQUFDdUM7b0NBQUt6QixXQUFVOzhDQUF1Q2Q7O2dDQUd0REEsY0FBY3dDLEtBQUtDLElBQUksQ0FBQzFDLFNBQVMyQyxNQUFNLEdBQUd4QywrQkFDdkMsOERBQUNrQztvQ0FDR3RCLFdBQVU7b0NBQ1Z3QixTQUFTLElBQU03QixpQkFBaUJULGNBQWM7OENBQ2pEOzs7Ozs7Ozs7Ozs7O0FBYXJDO0dBaEZNRjtLQUFBQTs7QUF5R04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2R1Y3RzLmpzP2FiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXNoYm9hcmRMYXlvdXRcIjtcclxuLy8gaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuLy8gaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuLy8gY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuLy8gICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4vLyAgICAgY29uc3QgW3RvdGFsUGFnZXMsIHNldFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMSk7XHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IGxpbWl0ID0gMTA7IC8vIG51bWJlciBvZiBwcm9kdWN0cyB0byBmZXRjaCBwZXIgcGFnZVxyXG4vLyAgICAgICAgIGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBsaW1pdDsgLy8gY2FsY3VsYXRlIHRoZSBvZmZzZXRcclxuXHJcbi8vICAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vYWRtaW4vcHJvZHVjdHMvYXJ0b3Zpc2lvbmApO1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKSAgICBcclxuLy8gICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbi8vICAgICAgICAgICAgIHNldFRvdGFsUGFnZXMoTWF0aC5jZWlsKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMubGVuZ3RoIC8gbGltaXQpKTtcclxuLy8gICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgIGZldGNoRGF0YSgpO1xyXG4vLyAgICAgfSwgW3BhZ2VdKTtcclxuXHJcbi8vICAgICBjb25zdCBoYW5kbGVQcmV2UGFnZSA9ICgpID0+IHtcclxuLy8gICAgICAgICBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgLSAxKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IHByZXZQYWdlID0gcGFnZSA+IDEgPyBwYWdlIC0gMSA6IG51bGw7XHJcbi8vICAgICBjb25zdCBuZXh0UGFnZSA9IHBhZ2UgPCB0b3RhbFBhZ2VzID8gcGFnZSArIDEgOiBudWxsO1xyXG5cclxuLy8gICAgIC8vIGNvbnN0IFtnZXRQcm9kdWN0LHNldFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbClcclxuLy8gICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG4vLyAgICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4vLyAgICAgLy8gY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGRhdGEsIGVycm9yIH0gPSB1c2VRdWVyeSgnbXlEYXRhJywgYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2FsbGN1c3RvbWVyYCk7XHJcbi8vICAgICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlO1xyXG4vLyAgICAgLy8gICAgIHJldHVybiBkYXRhLmRhdGE7XHJcbi8vICAgICAvLyB9KTtcclxuXHJcbi8vICAgICAvLyBjb25zdCBzdWJtaXRPcmRlckZpbHRlcnMgPSB1c2VNdXRhdGlvbihhc3luYyAoZm9ybURhdGEpID0+IHtcclxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbi8vICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSV9VUkx9L2FkbWluL2dldFByb2R1Y3RzYCwgZm9ybURhdGEpO1xyXG4vLyAgICAgLy8gICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzcG9uc2U7XHJcbi8vICAgICAvLyAgICAgc2V0UHJvZHVjdChwcm9kdWN0cy5kYXRhKVxyXG4vLyAgICAgLy8gICAgIHJldHVybiBwcm9kdWN0cy5kYXRhO1xyXG4vLyAgICAgLy8gfSk7XHJcbi8vICAgICAvLyBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbi8vICAgICAvLyAgICAgdHJ5IHtcclxuLy8gICAgIC8vICAgICAgICAgYXdhaXQgc3VibWl0T3JkZXJGaWx0ZXJzLm11dGF0ZUFzeW5jKGRhdGEpO1xyXG4vLyAgICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAvLyAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgIC8vICAgICB9XHJcbi8vICAgICAvLyB9O1xyXG4vLyAgICAgLy8gaWYgKGlzTG9hZGluZykge1xyXG4vLyAgICAgLy8gICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbi8vICAgICAvLyB9XHJcblxyXG4vLyAgICAgLy8gaWYgKGlzRXJyb3IpIHtcclxuLy8gICAgIC8vICAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4vLyAgICAgLy8gfVxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICA8RGFzaGJvYXJkTGF5b3V0IGhlYWRlcj17XCJQcm9kdWN0c1wifSBjb250ZW50PXsoXHJcbi8vICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkxpc3QgUHJvZHVjdDwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIiBtdC01XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicm93IGctNCBib3JkZXJcIiA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0RW1haWwzXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj5Qcm9kdWN0IFR5cGVzPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpbnB1dFN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiB7Li4ucmVnaXN0ZXIoXCJwcm9kdWN0X3R5cGVcIil9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e1wibnVsbFwifT5DaG9vc2UuLi48L29wdGlvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiYWN0aXZlXCJ9PkFjdGl2ZTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJhcmNoaXZlZFwifT5BcmNoaXZlZDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJkcmFmdFwifT5EcmFmdDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRFbWFpbDNcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbCBcIj5TdG9yZSBDdXN0b21lclxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDo8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e1wiZm9ybS1zZWxlY3RcIn0gey4uLnJlZ2lzdGVyKFwiY3VzdG9tZXJcIil9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17J251bGwnfT5DaG9vc2UuLjwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YT8uZGF0YT8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l0ZW0uZW1haWx9PntpdGVtLmVtYWlsfTwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgbXMtM1wiPlN1Ym1pdDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbi8vIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSAgdGFibGUtc3RyaXBlZFwiPlxyXG4vLyAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgIDx0cj5cclxuLy8gICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdCBUaXRsZTwvdGg+XHJcbi8vICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgdHlwZTwvdGg+XHJcbi8vICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgVGFnczwvdGg+XHJcbi8vICAgICAgICAgICAgIHsvKjx0aCBzY29wZT1cImNvbFwiPk9yZGVyIERhdGU8L3RoPiovfVxyXG4vLyAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4vLyAgICAgICAgIDwvdHI+XHJcbi8vICAgICA8L3RoZWFkPlxyXG4vLyAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cz8ubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC50aXRsZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5wcm9kdWN0X3R5cGV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGFnc308L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKjx0ZD57cHJvZHVjdC5jcmVhdGVkX2F0fTwvdGQ+Ki99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBidG4tZGFuZ2VcIn0+RGVsZXRlPC9idXR0b24+PC90ZD5cclxuLy8gICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgIClcclxuLy8gICAgICAgICB9KX1cclxuLy8gICAgIDwvdGJvZHk+XHJcbi8vIDwvdGFibGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2UGFnZX0gY2xhc3NOYW1lPVwibXgtMSBidG4gYnRuLXNlY29uZGFyeVwiPlByZXZpb3VzPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gY2xhc3NOYW1lPVwibXgtMSBidG4gYnRuLXNlY29uZGFyeVwiPk5leHQ8L2J1dHRvbj4gICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldlBhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcmV2UGFnZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgID5QcmV2aW91czwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTFcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbmV4dFBhZ2V9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICl9IC8+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSAxMDtcclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0SXRlbSA9IGN1cnJlbnRQYWdlICogaXRlbXNQZXJQYWdlO1xyXG4gICAgY29uc3QgaW5kZXhPZkZpcnN0SXRlbSA9IGluZGV4T2ZMYXN0SXRlbSAtIGl0ZW1zUGVyUGFnZTtcclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtcyA9IHByb2R1Y3RzLnNsaWNlKGluZGV4T2ZGaXJzdEl0ZW0sIGluZGV4T2ZMYXN0SXRlbSk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50SXRlbXMpXHJcbiAgICAvLyBoYW5kbGUgcGFnaW5hdGlvbiBidXR0b24gY2xpY2tzXHJcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RGFzaGJvYXJkTGF5b3V0IGhlYWRlcj17XCJQcm9kdWN0c1wifVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlICB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IFRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IFRodW1ibmFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IFRhZ3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRoIHNjb3BlPVwiY29sXCI+T3JkZXIgRGF0ZTwvdGg+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEl0ZW1zICYmIGN1cnJlbnRJdGVtcz8ubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFnVG9DaGVjayA9IFwiQXJ0b3Zpc2lvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzVGFnID0gcHJvZHVjdC50YWdzLnNwbGl0KCcsJykuc29tZSh0YWcgPT4gdGFnLnRyaW0oKSA9PT0gdGFnVG9DaGVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1RhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlc1swXT8uc3JjfSBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIHctMjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC50YWdzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dGQ+e3Byb2R1Y3QuY3JlYXRlZF9hdH08L3RkPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBidG4taW5mb1wifT5DcmVhdGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZW5kZXIgdGhlIHByZXZpb3VzIHBhZ2UgYnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UGFnZSA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0xIHB4LTQgcHktMiByb3VuZGVkIGJnLXdoaXRlIHRleHQtYmx1ZS01MDAgaG92ZXI6YmctZ3JheS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShjdXJyZW50UGFnZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gyMTkwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogcmVuZGVyIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTEgcHgtNCBweS0yIHJvdW5kZWQgdGV4dC1wcmltYXJ5XCI+e2N1cnJlbnRQYWdlfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJlbmRlciB0aGUgbmV4dCBwYWdlIGJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBhZ2UgPCBNYXRoLmNlaWwocHJvZHVjdHMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTEgcHgtNCBweS0yIHJvdW5kZWQgYmctd2hpdGUgdGV4dC1ibHVlLTUwMCBob3ZlcjpiZy1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDIxOTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSkgfHwgMTtcclxuICAgIGNvbnN0IGxpbWl0ID0gMTI7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAoY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xyXG5cclxuICAgIC8vIEZldGNoIHByb2R1Y3RzIGZyb20gQVBJIHVzaW5nIGxpbWl0IGFuZCBvZmZzZXRcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2FkbWluL3Byb2R1Y3RzL2FydG92aXNpb25gKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSkgICAgXHJcbiAgICAvLyAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMpO1xyXG4gICAgLy8gICBzZXRUb3RhbFBhZ2VzKE1hdGguY2VpbChyZXNwb25zZS5kYXRhLnByb2R1Y3RzLmxlbmd0aCAvIGxpbWl0KSk7XHJcblxyXG4gICAgY29uc3QgbnVtUHJvZHVjdHMgPSAxMDsgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCB0b3RhbCBudW1iZXIgb2YgcHJvZHVjdHNcclxuICAgIGNvbnN0IG51bVBhZ2VzID0gTWF0aC5jZWlsKG51bVByb2R1Y3RzIC8gbGltaXQpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgbnVtUGFnZXMsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmRMYXlvdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlBhZ2luYXRpb24iLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIml0ZW1zUGVyUGFnZSIsImluZGV4T2ZMYXN0SXRlbSIsImluZGV4T2ZGaXJzdEl0ZW0iLCJjdXJyZW50SXRlbXMiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZU51bWJlciIsImhlYWRlciIsImNvbnRlbnQiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJ0YWdUb0NoZWNrIiwiaGFzVGFnIiwidGFncyIsInNwbGl0Iiwic29tZSIsInRhZyIsInRyaW0iLCJ0ZCIsInRpdGxlIiwic3RhdHVzIiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwiYnV0dG9uIiwiZGl2Iiwib25DbGljayIsInNwYW4iLCJNYXRoIiwiY2VpbCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/products.js\n"));

/***/ })

});