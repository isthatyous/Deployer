"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-simple-typewriter";
exports.ids = ["vendor-chunks/react-simple-typewriter"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-simple-typewriter/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-simple-typewriter/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: !0\n}));\nvar e = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\"), t = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"), r = function() {\n    return r = Object.assign || function(e) {\n        for(var t, r = 1, o = arguments.length; r < o; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);\n        return e;\n    }, r.apply(this, arguments);\n};\nfunction o(e, t) {\n    var o, n;\n    switch(t.type){\n        case \"TYPE\":\n            return r(r({}, e), {\n                speed: t.speed,\n                text: null === (o = t.payload) || void 0 === o ? void 0 : o.substring(0, e.text.length + 1)\n            });\n        case \"DELAY\":\n            return r(r({}, e), {\n                speed: t.payload\n            });\n        case \"DELETE\":\n            return r(r({}, e), {\n                speed: t.speed,\n                text: null === (n = t.payload) || void 0 === n ? void 0 : n.substring(0, e.text.length - 1)\n            });\n        case \"COUNT\":\n            return r(r({}, e), {\n                count: e.count + 1\n            });\n        default:\n            return e;\n    }\n}\nvar n = function(e) {\n    var r = e.words, n = void 0 === r ? [\n        \"Hello World!\",\n        \"This is\",\n        \"a simple Typewriter\"\n    ] : r, i = e.loop, s = void 0 === i ? 1 : i, u = e.typeSpeed, l = void 0 === u ? 80 : u, c = e.deleteSpeed, d = void 0 === c ? 50 : c, a = e.delaySpeed, p = void 0 === a ? 1500 : a, y = e.onLoopDone, f = e.onType, v = e.onDelete, m = e.onDelay, h = t.useReducer(o, {\n        speed: l,\n        text: \"\",\n        count: 0\n    }), T = h[0], g = T.speed, _ = T.text, x = T.count, D = h[1], C = t.useRef(0), E = t.useRef(!1), S = t.useRef(!1), b = t.useRef(!1), k = t.useRef(!1), w = t.useCallback(function() {\n        var e = x % n.length, t = n[e];\n        S.current ? (D({\n            type: \"DELETE\",\n            payload: t,\n            speed: d\n        }), \"\" === _ && (S.current = !1, D({\n            type: \"COUNT\"\n        }))) : (D({\n            type: \"TYPE\",\n            payload: t,\n            speed: l\n        }), b.current = !0, _ === t && (D({\n            type: \"DELAY\",\n            payload: p\n        }), b.current = !1, k.current = !0, setTimeout(function() {\n            k.current = !1, S.current = !0;\n        }, p), s > 0 && (C.current += 1, C.current / n.length === s && (k.current = !1, E.current = !0)))), b.current && f && f(C.current), S.current && v && v(), k.current && m && m();\n    }, [\n        x,\n        p,\n        d,\n        s,\n        l,\n        n,\n        _,\n        f,\n        v,\n        m\n    ]);\n    return t.useEffect(function() {\n        var e = setTimeout(w, g);\n        return E.current && clearTimeout(e), function() {\n            return clearTimeout(e);\n        };\n    }, [\n        w,\n        g\n    ]), t.useEffect(function() {\n        y && E.current && y();\n    }, [\n        y\n    ]), [\n        _,\n        {\n            isType: b.current,\n            isDelay: k.current,\n            isDelete: S.current,\n            isDone: E.current\n        }\n    ];\n};\nvar i = \"styles-module_blinkingCursor__yugAC\", s = \"styles-module_blinking__9VXRT\";\n!function(e, t) {\n    void 0 === t && (t = {});\n    var r = t.insertAt;\n    if (e && \"undefined\" != typeof document) {\n        var o = document.head || document.getElementsByTagName(\"head\")[0], n = document.createElement(\"style\");\n        n.type = \"text/css\", \"top\" === r && o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));\n    }\n}(\".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}\");\nvar u = t.memo(function(t) {\n    var o = t.cursorBlinking, n = void 0 === o || o, u = t.cursorStyle, l = void 0 === u ? \"|\" : u, c = t.cursorColor, d = void 0 === c ? \"inherit\" : c;\n    return e.jsx(\"span\", r({\n        style: {\n            color: d\n        },\n        className: \"\".concat(i, \" \").concat(n ? s : \"\")\n    }, {\n        children: l\n    }));\n});\nexports.Cursor = u, exports.Typewriter = function(t) {\n    var r = t.words, o = void 0 === r ? [\n        \"Hello World!\",\n        \"This is\",\n        \"a simple Typewriter\"\n    ] : r, i = t.loop, s = void 0 === i ? 1 : i, l = t.typeSpeed, c = void 0 === l ? 80 : l, d = t.deleteSpeed, a = void 0 === d ? 50 : d, p = t.delaySpeed, y = void 0 === p ? 1500 : p, f = t.cursor, v = void 0 !== f && f, m = t.cursorStyle, h = void 0 === m ? \"|\" : m, T = t.cursorColor, g = void 0 === T ? \"inherit\" : T, _ = t.cursorBlinking, x = void 0 === _ || _, D = t.onLoopDone, C = t.onType, E = t.onDelay, S = t.onDelete, b = n({\n        words: o,\n        loop: s,\n        typeSpeed: c,\n        deleteSpeed: a,\n        delaySpeed: y,\n        onLoopDone: D,\n        onType: C,\n        onDelay: E,\n        onDelete: S\n    })[0];\n    return e.jsxs(e.Fragment, {\n        children: [\n            e.jsx(\"span\", {\n                children: b\n            }),\n            v && e.jsx(u, {\n                cursorStyle: h,\n                cursorColor: g,\n                cursorBlinking: x\n            })\n        ]\n    });\n}, exports.useTypewriter = n; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUFBQSw4Q0FBMkM7SUFBQ0csT0FBTSxDQUFDO0FBQUMsQ0FBQyxFQUFDO0FBQUMsSUFBSUMsSUFBRUMsbUJBQU9BLENBQUMsZ0lBQW1CLEdBQUVDLElBQUVELG1CQUFPQSxDQUFDLHdHQUFPLEdBQUVFLElBQUU7SUFBVyxPQUFPQSxJQUFFUCxPQUFPUSxNQUFNLElBQUUsU0FBU0osQ0FBQztRQUFFLElBQUksSUFBSUUsR0FBRUMsSUFBRSxHQUFFRSxJQUFFQyxVQUFVQyxNQUFNLEVBQUNKLElBQUVFLEdBQUVGLElBQUksSUFBSSxJQUFJSyxLQUFLTixJQUFFSSxTQUFTLENBQUNILEVBQUUsQ0FBQ1AsT0FBT2EsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1QsR0FBRU0sTUFBS1IsQ0FBQUEsQ0FBQyxDQUFDUSxFQUFFLEdBQUNOLENBQUMsQ0FBQ00sRUFBRTtRQUFFLE9BQU9SO0lBQUMsR0FBRUcsRUFBRVMsS0FBSyxDQUFDLElBQUksRUFBQ047QUFBVTtBQUFFLFNBQVNELEVBQUVMLENBQUMsRUFBQ0UsQ0FBQztJQUFFLElBQUlHLEdBQUVHO0lBQUUsT0FBT04sRUFBRVcsSUFBSTtRQUFFLEtBQUk7WUFBTyxPQUFPVixFQUFFQSxFQUFFLENBQUMsR0FBRUgsSUFBRztnQkFBQ2MsT0FBTVosRUFBRVksS0FBSztnQkFBQ0MsTUFBSyxTQUFRVixDQUFBQSxJQUFFSCxFQUFFYyxPQUFPLEtBQUcsS0FBSyxNQUFJWCxJQUFFLEtBQUssSUFBRUEsRUFBRVksU0FBUyxDQUFDLEdBQUVqQixFQUFFZSxJQUFJLENBQUNSLE1BQU0sR0FBQztZQUFFO1FBQUcsS0FBSTtZQUFRLE9BQU9KLEVBQUVBLEVBQUUsQ0FBQyxHQUFFSCxJQUFHO2dCQUFDYyxPQUFNWixFQUFFYyxPQUFPO1lBQUE7UUFBRyxLQUFJO1lBQVMsT0FBT2Is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RyxJQUFFaEMsRUFBRW9GLE1BQU0sRUFBQ2xELElBQUUsS0FBSyxNQUFJRixLQUFHQSxHQUFFSSxJQUFFcEMsRUFBRTBFLFdBQVcsRUFBQ3BDLElBQUUsS0FBSyxNQUFJRixJQUFFLE1BQUlBLEdBQUVJLElBQUV4QyxFQUFFMkUsV0FBVyxFQUFDbEMsSUFBRSxLQUFLLE1BQUlELElBQUUsWUFBVUEsR0FBRUUsSUFBRTFDLEVBQUV5RSxjQUFjLEVBQUM5QixJQUFFLEtBQUssTUFBSUQsS0FBR0EsR0FBRUUsSUFBRTVDLEVBQUUrQixVQUFVLEVBQUNjLElBQUU3QyxFQUFFaUMsTUFBTSxFQUFDYyxJQUFFL0MsRUFBRXFDLE9BQU8sRUFBQ1csSUFBRWhELEVBQUVtQyxRQUFRLEVBQUNjLElBQUUzQyxFQUFFO1FBQUNXLE9BQU1kO1FBQUVnQixNQUFLQztRQUFFRSxXQUFVRTtRQUFFQyxhQUFZRTtRQUFFQyxZQUFXRTtRQUFFQyxZQUFXYTtRQUFFWCxRQUFPWTtRQUFFUixTQUFRVTtRQUFFWixVQUFTYTtJQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQUMsT0FBT2xELEVBQUV1RixJQUFJLENBQUN2RixFQUFFd0YsUUFBUSxFQUFDO1FBQUNMLFVBQVM7WUFBQ25GLEVBQUU4RSxHQUFHLENBQUMsUUFBTztnQkFBQ0ssVUFBU2hDO1lBQUM7WUFBR2YsS0FBR3BDLEVBQUU4RSxHQUFHLENBQUN2RCxHQUFFO2dCQUFDcUQsYUFBWXBDO2dCQUFFcUMsYUFBWWxDO2dCQUFFZ0MsZ0JBQWU5QjtZQUFDO1NBQUc7SUFBQTtBQUFFLEdBQUUvQyxxQkFBcUIsR0FBQ1UsR0FDamdILGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLW5leHRqcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGUtdHlwZXdyaXRlci9kaXN0L2luZGV4LmpzP2JjMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9cmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpLHQ9cmVxdWlyZShcInJlYWN0XCIpLHI9ZnVuY3Rpb24oKXtyZXR1cm4gcj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQscj0xLG89YXJndW1lbnRzLmxlbmd0aDtyPG87cisrKWZvcih2YXIgbiBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKSYmKGVbbl09dFtuXSk7cmV0dXJuIGV9LHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiBvKGUsdCl7dmFyIG8sbjtzd2l0Y2godC50eXBlKXtjYXNlXCJUWVBFXCI6cmV0dXJuIHIocih7fSxlKSx7c3BlZWQ6dC5zcGVlZCx0ZXh0Om51bGw9PT0obz10LnBheWxvYWQpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnN1YnN0cmluZygwLGUudGV4dC5sZW5ndGgrMSl9KTtjYXNlXCJERUxBWVwiOnJldHVybiByKHIoe30sZSkse3NwZWVkOnQucGF5bG9hZH0pO2Nhc2VcIkRFTEVURVwiOnJldHVybiByKHIoe30sZSkse3NwZWVkOnQuc3BlZWQsdGV4dDpudWxsPT09KG49dC5wYXlsb2FkKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zdWJzdHJpbmcoMCxlLnRleHQubGVuZ3RoLTEpfSk7Y2FzZVwiQ09VTlRcIjpyZXR1cm4gcihyKHt9LGUpLHtjb3VudDplLmNvdW50KzF9KTtkZWZhdWx0OnJldHVybiBlfX12YXIgbj1mdW5jdGlvbihlKXt2YXIgcj1lLndvcmRzLG49dm9pZCAwPT09cj9bXCJIZWxsbyBXb3JsZCFcIixcIlRoaXMgaXNcIixcImEgc2ltcGxlIFR5cGV3cml0ZXJcIl06cixpPWUubG9vcCxzPXZvaWQgMD09PWk/MTppLHU9ZS50eXBlU3BlZWQsbD12b2lkIDA9PT11PzgwOnUsYz1lLmRlbGV0ZVNwZWVkLGQ9dm9pZCAwPT09Yz81MDpjLGE9ZS5kZWxheVNwZWVkLHA9dm9pZCAwPT09YT8xNTAwOmEseT1lLm9uTG9vcERvbmUsZj1lLm9uVHlwZSx2PWUub25EZWxldGUsbT1lLm9uRGVsYXksaD10LnVzZVJlZHVjZXIobyx7c3BlZWQ6bCx0ZXh0OlwiXCIsY291bnQ6MH0pLFQ9aFswXSxnPVQuc3BlZWQsXz1ULnRleHQseD1ULmNvdW50LEQ9aFsxXSxDPXQudXNlUmVmKDApLEU9dC51c2VSZWYoITEpLFM9dC51c2VSZWYoITEpLGI9dC51c2VSZWYoITEpLGs9dC51c2VSZWYoITEpLHc9dC51c2VDYWxsYmFjaygoZnVuY3Rpb24oKXt2YXIgZT14JW4ubGVuZ3RoLHQ9bltlXTtTLmN1cnJlbnQ/KEQoe3R5cGU6XCJERUxFVEVcIixwYXlsb2FkOnQsc3BlZWQ6ZH0pLFwiXCI9PT1fJiYoUy5jdXJyZW50PSExLEQoe3R5cGU6XCJDT1VOVFwifSkpKTooRCh7dHlwZTpcIlRZUEVcIixwYXlsb2FkOnQsc3BlZWQ6bH0pLGIuY3VycmVudD0hMCxfPT09dCYmKEQoe3R5cGU6XCJERUxBWVwiLHBheWxvYWQ6cH0pLGIuY3VycmVudD0hMSxrLmN1cnJlbnQ9ITAsc2V0VGltZW91dCgoZnVuY3Rpb24oKXtrLmN1cnJlbnQ9ITEsUy5jdXJyZW50PSEwfSkscCkscz4wJiYoQy5jdXJyZW50Kz0xLEMuY3VycmVudC9uLmxlbmd0aD09PXMmJihrLmN1cnJlbnQ9ITEsRS5jdXJyZW50PSEwKSkpKSxiLmN1cnJlbnQmJmYmJmYoQy5jdXJyZW50KSxTLmN1cnJlbnQmJnYmJnYoKSxrLmN1cnJlbnQmJm0mJm0oKX0pLFt4LHAsZCxzLGwsbixfLGYsdixtXSk7cmV0dXJuIHQudXNlRWZmZWN0KChmdW5jdGlvbigpe3ZhciBlPXNldFRpbWVvdXQodyxnKTtyZXR1cm4gRS5jdXJyZW50JiZjbGVhclRpbWVvdXQoZSksZnVuY3Rpb24oKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfX0pLFt3LGddKSx0LnVzZUVmZmVjdCgoZnVuY3Rpb24oKXt5JiZFLmN1cnJlbnQmJnkoKX0pLFt5XSksW18se2lzVHlwZTpiLmN1cnJlbnQsaXNEZWxheTprLmN1cnJlbnQsaXNEZWxldGU6Uy5jdXJyZW50LGlzRG9uZTpFLmN1cnJlbnR9XX07dmFyIGk9XCJzdHlsZXMtbW9kdWxlX2JsaW5raW5nQ3Vyc29yX195dWdBQ1wiLHM9XCJzdHlsZXMtbW9kdWxlX2JsaW5raW5nX185VlhSVFwiOyFmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXt9KTt2YXIgcj10Lmluc2VydEF0O2lmKGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7dmFyIG89ZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO24udHlwZT1cInRleHQvY3NzXCIsXCJ0b3BcIj09PXImJm8uZmlyc3RDaGlsZD9vLmluc2VydEJlZm9yZShuLG8uZmlyc3RDaGlsZCk6by5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQ/bi5zdHlsZVNoZWV0LmNzc1RleHQ9ZTpuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpKX19KFwiLnN0eWxlcy1tb2R1bGVfYmxpbmtpbmdDdXJzb3JfX3l1Z0FDe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O2xlZnQ6M3B4O2xpbmUtaGVpZ2h0OmluaGVyaXQ7b3BhY2l0eToxO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowfS5zdHlsZXMtbW9kdWxlX2JsaW5raW5nX185VlhSVHthbmltYXRpb24tZHVyYXRpb246LjhzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLW5hbWU6c3R5bGVzLW1vZHVsZV9ibGlua19fcnFmYWZ9QGtleWZyYW1lcyBzdHlsZXMtbW9kdWxlX2JsaW5rX19ycWZhZnswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1cIik7dmFyIHU9dC5tZW1vKChmdW5jdGlvbih0KXt2YXIgbz10LmN1cnNvckJsaW5raW5nLG49dm9pZCAwPT09b3x8byx1PXQuY3Vyc29yU3R5bGUsbD12b2lkIDA9PT11P1wifFwiOnUsYz10LmN1cnNvckNvbG9yLGQ9dm9pZCAwPT09Yz9cImluaGVyaXRcIjpjO3JldHVybiBlLmpzeChcInNwYW5cIixyKHtzdHlsZTp7Y29sb3I6ZH0sY2xhc3NOYW1lOlwiXCIuY29uY2F0KGksXCIgXCIpLmNvbmNhdChuP3M6XCJcIil9LHtjaGlsZHJlbjpsfSkpfSkpO2V4cG9ydHMuQ3Vyc29yPXUsZXhwb3J0cy5UeXBld3JpdGVyPWZ1bmN0aW9uKHQpe3ZhciByPXQud29yZHMsbz12b2lkIDA9PT1yP1tcIkhlbGxvIFdvcmxkIVwiLFwiVGhpcyBpc1wiLFwiYSBzaW1wbGUgVHlwZXdyaXRlclwiXTpyLGk9dC5sb29wLHM9dm9pZCAwPT09aT8xOmksbD10LnR5cGVTcGVlZCxjPXZvaWQgMD09PWw/ODA6bCxkPXQuZGVsZXRlU3BlZWQsYT12b2lkIDA9PT1kPzUwOmQscD10LmRlbGF5U3BlZWQseT12b2lkIDA9PT1wPzE1MDA6cCxmPXQuY3Vyc29yLHY9dm9pZCAwIT09ZiYmZixtPXQuY3Vyc29yU3R5bGUsaD12b2lkIDA9PT1tP1wifFwiOm0sVD10LmN1cnNvckNvbG9yLGc9dm9pZCAwPT09VD9cImluaGVyaXRcIjpULF89dC5jdXJzb3JCbGlua2luZyx4PXZvaWQgMD09PV98fF8sRD10Lm9uTG9vcERvbmUsQz10Lm9uVHlwZSxFPXQub25EZWxheSxTPXQub25EZWxldGUsYj1uKHt3b3JkczpvLGxvb3A6cyx0eXBlU3BlZWQ6YyxkZWxldGVTcGVlZDphLGRlbGF5U3BlZWQ6eSxvbkxvb3BEb25lOkQsb25UeXBlOkMsb25EZWxheTpFLG9uRGVsZXRlOlN9KVswXTtyZXR1cm4gZS5qc3hzKGUuRnJhZ21lbnQse2NoaWxkcmVuOltlLmpzeChcInNwYW5cIix7Y2hpbGRyZW46Yn0pLHYmJmUuanN4KHUse2N1cnNvclN0eWxlOmgsY3Vyc29yQ29sb3I6ZyxjdXJzb3JCbGlua2luZzp4fSldfSl9LGV4cG9ydHMudXNlVHlwZXdyaXRlcj1uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlIiwicmVxdWlyZSIsInQiLCJyIiwiYXNzaWduIiwibyIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm4iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInR5cGUiLCJzcGVlZCIsInRleHQiLCJwYXlsb2FkIiwic3Vic3RyaW5nIiwiY291bnQiLCJ3b3JkcyIsImkiLCJsb29wIiwicyIsInUiLCJ0eXBlU3BlZWQiLCJsIiwiYyIsImRlbGV0ZVNwZWVkIiwiZCIsImEiLCJkZWxheVNwZWVkIiwicCIsInkiLCJvbkxvb3BEb25lIiwiZiIsIm9uVHlwZSIsInYiLCJvbkRlbGV0ZSIsIm0iLCJvbkRlbGF5IiwiaCIsInVzZVJlZHVjZXIiLCJUIiwiZyIsIl8iLCJ4IiwiRCIsIkMiLCJ1c2VSZWYiLCJFIiwiUyIsImIiLCJrIiwidyIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJjbGVhclRpbWVvdXQiLCJpc1R5cGUiLCJpc0RlbGF5IiwiaXNEZWxldGUiLCJpc0RvbmUiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJtZW1vIiwiY3Vyc29yQmxpbmtpbmciLCJjdXJzb3JTdHlsZSIsImN1cnNvckNvbG9yIiwianN4Iiwic3R5bGUiLCJjb2xvciIsImNsYXNzTmFtZSIsImNvbmNhdCIsImNoaWxkcmVuIiwiQ3Vyc29yIiwiVHlwZXdyaXRlciIsImN1cnNvciIsImpzeHMiLCJGcmFnbWVudCIsInVzZVR5cGV3cml0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-simple-typewriter/dist/index.js\n");

/***/ })

};
;