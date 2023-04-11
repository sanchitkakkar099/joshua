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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DashboardLayout */ \"./components/DashboardLayout.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Products = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const limit = 10; // number of products to fetch per page\n        const offset = (page - 1) * limit; // calculate the offset\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API_URL, \"/admin/products/artovision\"), {\n                    params: {\n                        limit\n                    }\n                });\n                setProducts(response.data.products);\n                setTotalPages(Math.ceil(response.data.products.length / limit));\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, [\n        page\n    ]);\n    const handlePrevPage = ()=>{\n        setPage((prevPage)=>prevPage - 1);\n    };\n    const handleNextPage = ()=>{\n        setPage((prevPage)=>prevPage + 1);\n        console.log(page);\n    };\n    const prevPage = page > 1 ? page - 1 : null;\n    const nextPage = page < totalPages ? page + 1 : null;\n    // const [getProduct,setProduct] = useState(null)\n    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    // const { isLoading, isError, data, error } = useQuery('myData', async () => {\n    //     const response = await axios.get(`${API_URL}/allcustomer`);\n    //     const data = await response;\n    //     return data.data;\n    // });\n    // const submitOrderFilters = useMutation(async (formData) => {\n    //     console.log(formData);\n    //     const response = await axios.post(`${API_URL}/admin/getProducts`, formData);\n    //     const products = await response;\n    //     setProduct(products.data)\n    //     return products.data;\n    // });\n    // const onSubmit = async (data) => {\n    //     try {\n    //         await submitOrderFilters.mutateAsync(data);\n    //     } catch (error) {\n    //         setErrorMessage(error.message);\n    //     }\n    // };\n    // if (isLoading) {\n    //     return <div>Loading...</div>;\n    // }\n    // if (isError) {\n    //     return <div>Error: {error.message}</div>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            header: \"Products\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-fluid mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"List Product\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"table  table-striped\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Product Title\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Product type\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Product Tags\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Action\"\n                                                }, void 0, false, void 0, void 0)\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        children: products && (products === null || products === void 0 ? void 0 : products.map((product, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.title\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.product_type\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.tags\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"btn btn-dange\",\n                                                            children: \"Delete\"\n                                                        }, void 0, false, void 0, void 0)\n                                                    }, void 0, false, void 0, void 0)\n                                                ]\n                                            }, void 0, true, void 0, void 0);\n                                        }))\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handlePrevPage,\n                                        className: \"mx-1 btn btn-secondary\",\n                                        children: \"Previous\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleNextPage,\n                                        className: \"mx-1 btn btn-secondary\",\n                                        children: \"Next\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Xava\\\\artovision\\\\pages\\\\dashboard\\\\products.js\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Products, \"4/y7Q0xVhu0XhQXlXDqk0YM5xgs=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDQyxTQUFTQyxRQUFVOzRDQUMzQyxxQkFDSSw4REFBQ047O2tFQUNHLDhEQUFDTztrRUFBSUYsUUFBUUcsS0FBSzs7a0VBQ2xCLDhEQUFDRDtrRUFBSUYsUUFBUUksWUFBWTs7a0VBQ3pCLDhEQUFDRjtrRUFBSUYsUUFBUUssSUFBSTs7a0VBRWpCLDhEQUFDSDtrRUFBRyw0RUFBQ0k7NERBQU9mLFdBQVc7c0VBQWlCOzs7Ozt3Q0FHcEQ7Ozs7MENBR1IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ2U7d0NBQU9DLFNBQVMvQjt3Q0FBZ0JlLFdBQVU7a0RBQXlCOztrREFDcEUsOERBQUNlO3dDQUFPQyxTQUFTN0I7d0NBQWdCYSxXQUFVO2tEQUF5Qjs7Ozs7Ozs7Ozs7Ozs7QUFzQmpHO0dBL0pNbEM7O1FBdUMrRFIsb0RBQU9BOzs7S0F2Q3RFUTtBQWlLTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQvcHJvZHVjdHMuanM/YWIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Rhc2hib2FyZExheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdG90YWxQYWdlcywgc2V0VG90YWxQYWdlc10gPSB1c2VTdGF0ZSgxKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGltaXQgPSAxMDsgLy8gbnVtYmVyIG9mIHByb2R1Y3RzIHRvIGZldGNoIHBlciBwYWdlXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0OyAvLyBjYWxjdWxhdGUgdGhlIG9mZnNldFxyXG5cclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9hZG1pbi9wcm9kdWN0cy9hcnRvdmlzaW9uYCwge1xyXG4gICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIHNldFRvdGFsUGFnZXMoTWF0aC5jZWlsKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMubGVuZ3RoIC8gbGltaXQpKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtwYWdlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJldlBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmV2UGFnZSA9IHBhZ2UgPiAxID8gcGFnZSAtIDEgOiBudWxsO1xyXG4gICAgY29uc3QgbmV4dFBhZ2UgPSBwYWdlIDwgdG90YWxQYWdlcyA/IHBhZ2UgKyAxIDogbnVsbDtcclxuXHJcbiAgICAvLyBjb25zdCBbZ2V0UHJvZHVjdCxzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIC8vIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoJ215RGF0YScsIGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9hbGxjdXN0b21lcmApO1xyXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIC8vICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gY29uc3Qgc3VibWl0T3JkZXJGaWx0ZXJzID0gdXNlTXV0YXRpb24oYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9hZG1pbi9nZXRQcm9kdWN0c2AsIGZvcm1EYXRhKTtcclxuICAgIC8vICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgLy8gICAgIHNldFByb2R1Y3QocHJvZHVjdHMuZGF0YSlcclxuICAgIC8vICAgICByZXR1cm4gcHJvZHVjdHMuZGF0YTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIGF3YWl0IHN1Ym1pdE9yZGVyRmlsdGVycy5tdXRhdGVBc3luYyhkYXRhKTtcclxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfTtcclxuICAgIC8vIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIC8vICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChpc0Vycm9yKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPERhc2hib2FyZExheW91dCBoZWFkZXI9e1wiUHJvZHVjdHNcIn0gY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5MaXN0IFByb2R1Y3Q8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJvdyBnLTQgYm9yZGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEVtYWlsM1wiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+UHJvZHVjdCBUeXBlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaW5wdXRTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgey4uLnJlZ2lzdGVyKFwicHJvZHVjdF90eXBlXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtcIm51bGxcIn0+Q2hvb3NlLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcImFjdGl2ZVwifT5BY3RpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiYXJjaGl2ZWRcIn0+QXJjaGl2ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiZHJhZnRcIn0+RHJhZnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0RW1haWwzXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWwgXCI+U3RvcmUgQ3VzdG9tZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtcImZvcm0tc2VsZWN0XCJ9IHsuLi5yZWdpc3RlcihcImN1c3RvbWVyXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eydudWxsJ30+Q2hvb3NlLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGE/LmRhdGE/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpdGVtLmVtYWlsfT57aXRlbS5lbWFpbH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIG1zLTNcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlICB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IFRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgdHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0IFRhZ3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRoIHNjb3BlPVwiY29sXCI+T3JkZXIgRGF0ZTwvdGg+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHM/Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGFnc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dGQ+e3Byb2R1Y3QuY3JlYXRlZF9hdH08L3RkPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1kYW5nZVwifT5EZWxldGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUHJldlBhZ2V9IGNsYXNzTmFtZT1cIm14LTEgYnRuIGJ0bi1zZWNvbmRhcnlcIj5QcmV2aW91czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IGNsYXNzTmFtZT1cIm14LTEgYnRuIGJ0bi1zZWNvbmRhcnlcIj5OZXh0PC9idXR0b24+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcHJldlBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UHJldmlvdXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IW5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiXSwibmFtZXMiOlsiRGFzaGJvYXJkTGF5b3V0IiwidXNlRm9ybSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX1VSTCIsIkJ1dHRvbiIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInBhZ2UiLCJzZXRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJsaW1pdCIsIm9mZnNldCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwicGFyYW1zIiwiZGF0YSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUHJldlBhZ2UiLCJwcmV2UGFnZSIsImhhbmRsZU5leHRQYWdlIiwibG9nIiwibmV4dFBhZ2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGVhZGVyIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwidGQiLCJ0aXRsZSIsInByb2R1Y3RfdHlwZSIsInRhZ3MiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/products.js\n"));

/***/ })

});