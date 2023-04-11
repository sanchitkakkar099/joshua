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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DashboardLayout */ \"./components/DashboardLayout.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Products = ()=>{\n    var _data_data;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    useEffect(()=>{\n        const limit = 10; // number of products to fetch per page\n        const offset = (page - 1) * limit; // calculate the offset\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://seedsofplenty.myshopify.com/admin/api/2020-04/products.json?limit=\".concat(limit, \"&page=\").concat(page), {\n                    headers: {\n                        \"X-Shopify-Access-Token\": \"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\",\n                        Accept: \"application/json\",\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                setProducts(response.data.products);\n                setTotalPages(Math.ceil(response.data.products.length / limit));\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, [\n        page\n    ]);\n    const handlePrevPage = ()=>{\n        setPage((prevPage)=>prevPage - 1);\n    };\n    const handleNextPage = ()=>{\n        setPage((prevPage)=>prevPage + 1);\n    };\n    const prevPage = page > 1 ? page - 1 : null;\n    const nextPage = page < totalPages ? page + 1 : null;\n    // const [getProduct,setProduct] = useState(null)\n    // const { register, handleSubmit, watch, formState: { errors } } = useForm();\n    // const [errorMessage, setErrorMessage] = useState(null);\n    // const { isLoading, isError, data, error } = useQuery('myData', async () => {\n    //     const response = await axios.get(`${API_URL}/allcustomer`);\n    //     const data = await response;\n    //     return data.data;\n    // });\n    // const submitOrderFilters = useMutation(async (formData) => {\n    //     console.log(formData);\n    //     const response = await axios.post(`${API_URL}/admin/getProducts`, formData);\n    //     const products = await response;\n    //     setProduct(products.data)\n    //     return products.data;\n    // });\n    // const onSubmit = async (data) => {\n    //     try {\n    //         await submitOrderFilters.mutateAsync(data);\n    //     } catch (error) {\n    //         setErrorMessage(error.message);\n    //     }\n    // };\n    // if (isLoading) {\n    //     return <div>Loading...</div>;\n    // }\n    // if (isError) {\n    //     return <div>Error: {error.message}</div>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            header: \"Products\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-fluid mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"List Product\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" mt-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"row g-4 border\",\n                                    onSubmit: handleSubmit(onSubmit),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-md-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"row mb-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"inputEmail3\",\n                                                        className: \"col-sm-3 col-form-label\",\n                                                        children: \"Product Types\"\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"col-sm-9\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            id: \"inputState\",\n                                                            className: \"form-select\",\n                                                            ...register(\"product_type\"),\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                    defaultValue: \"null\",\n                                                                    children: \"Choose...\"\n                                                                }, void 0, false, void 0, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                    value: \"active\",\n                                                                    children: \"Active\"\n                                                                }, void 0, false, void 0, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                    value: \"archived\",\n                                                                    children: \"Archived\"\n                                                                }, void 0, false, void 0, void 0),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                    value: \"draft\",\n                                                                    children: \"Draft\"\n                                                                }, void 0, false, void 0, void 0)\n                                                            ]\n                                                        }, void 0, true, void 0, void 0)\n                                                    }, void 0, false, void 0, void 0)\n                                                ]\n                                            }, void 0, true, void 0, void 0)\n                                        }, void 0, false, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-md-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"row mb-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"inputEmail3\",\n                                                        className: \"col-sm-3 col-form-label \",\n                                                        children: \"Store Customer Email:\"\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"col-sm-9\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            className: \"form-select\",\n                                                            ...register(\"customer\"),\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                    value: \"null\",\n                                                                    children: \"Choose..\"\n                                                                }, void 0, false, void 0, void 0),\n                                                                data && (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                        value: item.email,\n                                                                        children: item.email\n                                                                    }, void 0, false, void 0, void 0)))\n                                                            ]\n                                                        }, void 0, true, void 0, void 0)\n                                                    }, void 0, false, void 0, void 0)\n                                                ]\n                                            }, void 0, true, void 0, void 0)\n                                        }, void 0, false, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-12 d-flex justify-content-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"btn btn-outline-dark ms-3\",\n                                                children: \"Submit\"\n                                            }, void 0, false, void 0, void 0)\n                                        }, void 0, false, void 0, void 0)\n                                    ]\n                                }, void 0, true, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"table  table-striped\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Product Title\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Product type\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Product Tags\"\n                                                }, void 0, false, void 0, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    scope: \"col\",\n                                                    children: \"Action\"\n                                                }, void 0, false, void 0, void 0)\n                                            ]\n                                        }, void 0, true, void 0, void 0)\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        children: products && (products === null || products === void 0 ? void 0 : products.map((product, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.title\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.product_type\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: product.tags\n                                                    }, void 0, false, void 0, void 0),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"btn btn-dange\",\n                                                            children: \"Delete\"\n                                                        }, void 0, false, void 0, void 0)\n                                                    }, void 0, false, void 0, void 0)\n                                                ]\n                                            }, void 0, true, void 0, void 0);\n                                        }))\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                className: \"mx-1\",\n                                variant: \"secondary\",\n                                onClick: handlePrevPage,\n                                disabled: !prevPage,\n                                children: \"Previous\"\n                            }, void 0, false, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Xava\\\\artovision\\\\pages\\\\dashboard\\\\products.js\",\n            lineNumber: 82,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Products, \"QwKc/iKSgrMCmNQJTrF7fPxdfAI=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7a0VBQUcsNEVBQUNUOzREQUFPakIsV0FBVztzRUFBaUI7Ozs7O3dDQUdwRDs7OzswQ0FHSiw4REFBQzdCLG1EQUFNQTtnQ0FDUDZCLFdBQVU7Z0NBQ1Y4QixTQUFRO2dDQUNSQyxTQUFTdEM7Z0NBQ1R1QyxVQUFVLENBQUN0QzswQ0FDVjs7Ozs7Ozs7Ozs7O0FBT3pCO0dBdkpNdEI7S0FBQUE7QUF5Sk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2R1Y3RzLmpzP2FiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXNoYm9hcmRMYXlvdXRcIjtcclxuaW1wb3J0IHt1c2VGb3JtfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7dXNlTXV0YXRpb24sIHVzZVF1ZXJ5fSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBUElfVVJMfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsaW1pdCA9IDEwOyAvLyBudW1iZXIgb2YgcHJvZHVjdHMgdG8gZmV0Y2ggcGVyIHBhZ2VcclxuICAgIGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBsaW1pdDsgLy8gY2FsY3VsYXRlIHRoZSBvZmZzZXRcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9zZWVkc29mcGxlbnR5Lm15c2hvcGlmeS5jb20vYWRtaW4vYXBpLzIwMjAtMDQvcHJvZHVjdHMuanNvbj9saW1pdD0ke2xpbWl0fSZwYWdlPSR7cGFnZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ1gtU2hvcGlmeS1BY2Nlc3MtVG9rZW4nOiAnc2hwYXRfYmUxMGRmN2M0NjJkNjlkNTg4Y2JiZTE4ZTgwYmI1MDInLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgc2V0VG90YWxQYWdlcyhNYXRoLmNlaWwocmVzcG9uc2UuZGF0YS5wcm9kdWN0cy5sZW5ndGggLyBsaW1pdCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtwYWdlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZQYWdlID0gKCkgPT4ge1xyXG4gICAgc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgKyAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2UGFnZSA9IHBhZ2UgPiAxID8gcGFnZSAtIDEgOiBudWxsO1xyXG4gIGNvbnN0IG5leHRQYWdlID0gcGFnZSA8IHRvdGFsUGFnZXMgPyBwYWdlICsgMSA6IG51bGw7XHJcblxyXG4gICAgLy8gY29uc3QgW2dldFByb2R1Y3Qsc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgLy8gY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKCk7XHJcbiAgICAvLyBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgZGF0YSwgZXJyb3IgfSA9IHVzZVF1ZXJ5KCdteURhdGEnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vYWxsY3VzdG9tZXJgKTtcclxuICAgIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IHN1Ym1pdE9yZGVyRmlsdGVycyA9IHVzZU11dGF0aW9uKGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vYWRtaW4vZ2V0UHJvZHVjdHNgLCBmb3JtRGF0YSk7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIC8vICAgICBzZXRQcm9kdWN0KHByb2R1Y3RzLmRhdGEpXHJcbiAgICAvLyAgICAgcmV0dXJuIHByb2R1Y3RzLmRhdGE7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBhd2FpdCBzdWJtaXRPcmRlckZpbHRlcnMubXV0YXRlQXN5bmMoZGF0YSk7XHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcbiAgICAvLyBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoaXNFcnJvcikge1xyXG4gICAgLy8gICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPERhc2hib2FyZExheW91dCBoZWFkZXI9e1wiUHJvZHVjdHNcIn0gY29udGVudD17KFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TGlzdCBQcm9kdWN0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInJvdyBnLTQgYm9yZGVyXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEVtYWlsM1wiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+UHJvZHVjdCBUeXBlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImlucHV0U3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIHsuLi5yZWdpc3RlcihcInByb2R1Y3RfdHlwZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtcIm51bGxcIn0+Q2hvb3NlLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiYWN0aXZlXCJ9PkFjdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcImFyY2hpdmVkXCJ9PkFyY2hpdmVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiZHJhZnRcIn0+RHJhZnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRFbWFpbDNcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbCBcIj5TdG9yZSBDdXN0b21lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e1wiZm9ybS1zZWxlY3RcIn0gey4uLnJlZ2lzdGVyKFwiY3VzdG9tZXJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnbnVsbCd9PkNob29zZS4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGE/LmRhdGE/Lm1hcCgoaXRlbSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbS5lbWFpbH0+e2l0ZW0uZW1haWx9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIG1zLTNcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSAgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgVGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgdHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdCBUYWdzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dGggc2NvcGU9XCJjb2xcIj5PcmRlciBEYXRlPC90aD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHM/Lm1hcCgocHJvZHVjdCxpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucHJvZHVjdF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGFnc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRkPntwcm9kdWN0LmNyZWF0ZWRfYXR9PC90ZD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gYnRuLWRhbmdlXCJ9PkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldlBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcHJldlBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5QcmV2aW91czwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRMYXlvdXQiLCJ1c2VGb3JtIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsImF4aW9zIiwidXNlU3RhdGUiLCJBUElfVVJMIiwiQnV0dG9uIiwiUHJvZHVjdHMiLCJkYXRhIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInBhZ2UiLCJzZXRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJ1c2VFZmZlY3QiLCJsaW1pdCIsIm9mZnNldCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkFjY2VwdCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUHJldlBhZ2UiLCJwcmV2UGFnZSIsImhhbmRsZU5leHRQYWdlIiwibmV4dFBhZ2UiLCJoZWFkZXIiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsInJlZ2lzdGVyIiwib3B0aW9uIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJlbWFpbCIsImJ1dHRvbiIsInR5cGUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJwcm9kdWN0IiwidGQiLCJ0aXRsZSIsInByb2R1Y3RfdHlwZSIsInRhZ3MiLCJ2YXJpYW50Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/products.js\n"));

/***/ })

});