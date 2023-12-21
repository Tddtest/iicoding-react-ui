// src/magic-mouse-move-effect/awesome.js
window.FontAwesomeKitConfig = {
  id: 85086602,
  version: "6.5.1",
  token: "1ee8f271b9",
  method: "css",
  baseUrl: "https://ka-p.fontawesome.com",
  license: "pro",
  asyncLoading: { enabled: false },
  autoA11y: { enabled: true },
  baseUrlKit: "https://kit.fontawesome.com",
  detectConflictsUntil: null,
  iconUploads: {},
  minify: { enabled: true },
  v4FontFaceShim: { enabled: true },
  v4shim: { enabled: true },
  v5FontFaceShim: { enabled: true },
  customIconsCssPath: "1ee8f271b9/85086602/kit-upload.css",
  uploadsUrl: "https://kit-uploads.fontawesome.com"
};
!function(t) {
  "function" == typeof define && define.amd ? define("kit-loader", t) : t();
}(function() {
  "use strict";
  function t(t2, e2) {
    let n2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      let r2 = Object.getOwnPropertySymbols(t2);
      e2 && (r2 = r2.filter(function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function e(e2) {
    for (let n2 = 1; n2 < arguments.length; n2++) {
      var o2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? t(Object(o2), true).forEach(function(t2) {
        r(e2, t2, o2[t2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(o2)) : t(Object(o2)).forEach(function(t2) {
        Object.defineProperty(
          e2,
          t2,
          Object.getOwnPropertyDescriptor(o2, t2)
        );
      });
    }
    return e2;
  }
  function n(t2) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    })(t2);
  }
  function r(t2, e2, n2) {
    return (e2 = function(t3) {
      let e3 = function(t4, e4) {
        if ("object" != typeof t4 || null === t4)
          return t4;
        let n3 = t4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          let r2 = n3.call(t4, e4 || "default");
          if ("object" != typeof r2)
            return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e4 ? String : Number)(t4);
      }(t3, "string");
      return "symbol" == typeof e3 ? e3 : String(e3);
    }(e2)) in t2 ? Object.defineProperty(t2, e2, {
      value: n2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : t2[e2] = n2, t2;
  }
  function o(t2, e2) {
    return function(t3) {
      if (Array.isArray(t3))
        return t3;
    }(t2) || function(t3, e3) {
      let n2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (null != n2) {
        let r2, o2, i2, a2, c2 = [], u2 = true, f2 = false;
        try {
          if (i2 = (n2 = n2.call(t3)).next, 0 === e3) {
            if (Object(n2) !== n2)
              return;
            u2 = false;
          } else
            for (; !(u2 = (r2 = i2.call(n2)).done) && (c2.push(r2.value), c2.length !== e3); u2 = true)
              ;
        } catch (t4) {
          f2 = true, o2 = t4;
        } finally {
          try {
            if (!u2 && null != n2.return && (a2 = n2.return(), Object(a2) !== a2))
              return;
          } finally {
            if (f2)
              throw o2;
          }
        }
        return c2;
      }
    }(t2, e2) || function(t3, e3) {
      if (!t3)
        return;
      if ("string" == typeof t3)
        return i(t3, e3);
      let n2 = Object.prototype.toString.call(t3).slice(8, -1);
      "Object" === n2 && t3.constructor && (n2 = t3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(t3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return i(t3, e3);
    }(t2, e2) || function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }();
  }
  function i(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
      r2[n2] = t2[n2];
    return r2;
  }
  let a = "sharp", c = ["classic", "duotone", "sharp"], u = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], f = [
    "fa",
    "fas",
    "fa-solid",
    "far",
    "fa-regular",
    "fal",
    "fa-light",
    "fat",
    "fa-thin",
    "fad",
    "fa-duotone",
    "fab",
    "fa-brands",
    "fass",
    "fasr",
    "fasl",
    "fast"
  ];
  function s(t2, e2) {
    let n2 = e2 && e2.addOn || "", r2 = e2 && e2.baseFilename || t2.license + n2, o2 = e2 && e2.minify ? ".min" : "", i2 = e2 && e2.fileSuffix || t2.method, a2 = e2 && e2.subdir || t2.method;
    return t2.baseUrl + "/releases/" + ("latest" === t2.version ? "latest" : "v".concat(t2.version)) + "/" + a2 + "/" + r2 + o2 + "." + i2;
  }
  function d(t2, e2) {
    let n2 = e2 || ["fa"], r2 = "." + Array.prototype.join.call(n2, ",."), o2 = t2.querySelectorAll(r2);
    Array.prototype.forEach.call(o2, function(e3) {
      let n3 = e3.getAttribute("title");
      e3.setAttribute("aria-hidden", "true");
      let r3 = !e3.nextElementSibling || !e3.nextElementSibling.classList.contains("sr-only");
      if (n3 && r3) {
        let o3 = t2.createElement("span");
        o3.innerHTML = n3, o3.classList.add("sr-only"), e3.parentNode.insertBefore(o3, e3.nextSibling);
      }
    });
  }
  let l, h = function() {
  }, m = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit, p = "undefined" == typeof setImmediate ? setTimeout : setImmediate, v = [];
  function b() {
    for (let t2 = 0; t2 < v.length; t2++)
      v[t2][0](v[t2][1]);
    v = [], l = false;
  }
  function y(t2, e2) {
    v.push([t2, e2]), l || (l = true, p(b, 0));
  }
  function g(t2) {
    let e2 = t2.owner, n2 = e2._state, r2 = e2._data, o2 = t2[n2], i2 = t2.then;
    if ("function" == typeof o2) {
      n2 = "fulfilled";
      try {
        r2 = o2(r2);
      } catch (t3) {
        O(i2, t3);
      }
    }
    w(i2, r2) || ("fulfilled" === n2 && A(i2, r2), "rejected" === n2 && O(i2, r2));
  }
  function w(t2, e2) {
    let r2;
    try {
      if (t2 === e2)
        throw new TypeError(
          "A promises callback cannot return that same promise."
        );
      if (e2 && ("function" == typeof e2 || "object" === n(e2))) {
        let o2 = e2.then;
        if ("function" == typeof o2)
          return o2.call(
            e2,
            function(n2) {
              r2 || (r2 = true, e2 === n2 ? S(t2, n2) : A(t2, n2));
            },
            function(e3) {
              r2 || (r2 = true, O(t2, e3));
            }
          ), true;
      }
    } catch (e3) {
      return r2 || O(t2, e3), true;
    }
    return false;
  }
  function A(t2, e2) {
    t2 !== e2 && w(t2, e2) || S(t2, e2);
  }
  function S(t2, e2) {
    "pending" === t2._state && (t2._state = "settled", t2._data = e2, y(E, t2));
  }
  function O(t2, e2) {
    "pending" === t2._state && (t2._state = "settled", t2._data = e2, y(P, t2));
  }
  function j(t2) {
    t2._then = t2._then.forEach(g);
  }
  function E(t2) {
    t2._state = "fulfilled", j(t2);
  }
  function P(t2) {
    t2._state = "rejected", j(t2), !t2._handled && m && global.process.emit("unhandledRejection", t2._data, t2);
  }
  function _(t2) {
    global.process.emit("rejectionHandled", t2);
  }
  function F(t2) {
    if ("function" != typeof t2)
      throw new TypeError("Promise resolver " + t2 + " is not a function");
    if (this instanceof F == false)
      throw new TypeError(
        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
      );
    this._then = [], function(t3, e2) {
      function n2(t4) {
        O(e2, t4);
      }
      try {
        t3(function(t4) {
          A(e2, t4);
        }, n2);
      } catch (t4) {
        n2(t4);
      }
    }(t2, this);
  }
  F.prototype = {
    constructor: F,
    _state: "pending",
    _then: null,
    _data: void 0,
    _handled: false,
    then: function(t2, e2) {
      let n2 = {
        owner: this,
        then: new this.constructor(h),
        fulfilled: t2,
        rejected: e2
      };
      return !e2 && !t2 || this._handled || (this._handled = true, "rejected" === this._state && m && y(_, this)), "fulfilled" === this._state || "rejected" === this._state ? y(g, n2) : this._then.push(n2), n2.then;
    },
    catch: function(t2) {
      return this.then(null, t2);
    }
  }, F.all = function(t2) {
    if (!Array.isArray(t2))
      throw new TypeError("You must pass an array to Promise.all().");
    return new F(function(e2, n2) {
      let r2 = [], o2 = 0;
      function i2(t3) {
        return o2++, function(n3) {
          r2[t3] = n3, --o2 || e2(r2);
        };
      }
      for (var a2, c2 = 0; c2 < t2.length; c2++)
        (a2 = t2[c2]) && "function" == typeof a2.then ? a2.then(i2(c2), n2) : r2[c2] = a2;
      o2 || e2(r2);
    });
  }, F.race = function(t2) {
    if (!Array.isArray(t2))
      throw new TypeError("You must pass an array to Promise.race().");
    return new F(function(e2, n2) {
      for (var r2, o2 = 0; o2 < t2.length; o2++)
        (r2 = t2[o2]) && "function" == typeof r2.then ? r2.then(e2, n2) : e2(r2);
    });
  }, F.resolve = function(t2) {
    return t2 && "object" === n(t2) && t2.constructor === F ? t2 : new F(function(e2) {
      e2(t2);
    });
  }, F.reject = function(t2) {
    return new F(function(e2, n2) {
      n2(t2);
    });
  };
  let C = "function" == typeof Promise ? Promise : F;
  function I(t2, e2) {
    let n2 = e2.fetch, r2 = e2.XMLHttpRequest, o2 = e2.token, i2 = t2;
    return o2 && !function(t3) {
      return t3.indexOf("kit-upload.css") > -1;
    }(t2) && ("URLSearchParams" in window ? (i2 = new URL(t2)).searchParams.set("token", o2) : i2 = i2 + "?token=" + encodeURIComponent(o2)), i2 = i2.toString(), new C(function(t3, e3) {
      if ("function" == typeof n2)
        n2(i2, { mode: "cors", cache: "default" }).then(function(t4) {
          if (t4.ok)
            return t4.text();
          throw new Error("");
        }).then(function(e4) {
          t3(e4);
        }).catch(e3);
      else if ("function" == typeof r2) {
        let o3 = new r2();
        o3.addEventListener("loadend", function() {
          this.responseText ? t3(this.responseText) : e3(new Error(""));
        });
        ["abort", "error", "timeout"].map(function(t4) {
          o3.addEventListener(t4, function() {
            e3(new Error(""));
          });
        }), o3.open("GET", i2), o3.send();
      } else {
        e3(new Error(""));
      }
    });
  }
  function U(t2, e2, n2) {
    let r2 = t2;
    return [
      [
        /(url\("?)\.\.\/\.\.\/\.\./g,
        function(t3, n3) {
          return "".concat(n3).concat(e2);
        }
      ],
      [
        /(url\("?)\.\.\/webfonts/g,
        function(t3, r3) {
          return "".concat(r3).concat(e2, "/releases/v").concat(n2, "/webfonts");
        }
      ],
      [
        /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
        function(t3, n3) {
          return "".concat(n3).concat(e2);
        }
      ]
    ].forEach(function(t3) {
      let e3 = o(t3, 2), n3 = e3[0], i2 = e3[1];
      r2 = r2.replace(n3, i2);
    }), r2;
  }
  function k(t2, n2) {
    var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
    }, o2 = n2.document || o2, i2 = d.bind(
      d,
      o2,
      [].concat(
        f,
        u,
        c.map(function(t3) {
          return "fa-".concat(t3);
        })
      )
    );
    t2.autoA11y.enabled && r2(i2);
    let a2 = t2.subsetPath && t2.baseUrl + "/" + t2.subsetPath, l2 = [{ id: "fa-main", addOn: void 0, url: a2 }];
    if (t2.v4shim && t2.v4shim.enabled && l2.push({ id: "fa-v4-shims", addOn: "-v4-shims" }), t2.v5FontFaceShim && t2.v5FontFaceShim.enabled && l2.push({ id: "fa-v5-font-face", addOn: "-v5-font-face" }), t2.v4FontFaceShim && t2.v4FontFaceShim.enabled && l2.push({ id: "fa-v4-font-face", addOn: "-v4-font-face" }), !a2 && t2.customIconsCssPath) {
      let h2 = t2.customIconsCssPath.indexOf("kit-upload.css") > -1 ? t2.baseUrlKit : t2.baseUrl, m2 = h2 + "/" + t2.customIconsCssPath;
      l2.push({ id: "fa-kit-upload", url: m2 });
    }
    let p2 = l2.map(function(r3) {
      return new C(function(o3, i3) {
        let a3 = r3.url || s(t2, { addOn: r3.addOn, minify: t2.minify.enabled }), c2 = { id: r3.id }, u2 = t2.subset ? c2 : e(
          e(e({}, n2), c2),
          {},
          {
            baseUrl: t2.baseUrl,
            version: t2.version,
            id: r3.id,
            contentFilter: function(t3, e2) {
              return U(t3, e2.baseUrl, e2.version);
            }
          }
        );
        I(a3, n2).then(function(t3) {
          o3(T(t3, u2));
        }).catch(i3);
      });
    });
    return C.all(p2);
  }
  function T(t2, e2) {
    let n2 = e2.contentFilter || function(t3, e3) {
      return t3;
    }, r2 = document.createElement("style"), o2 = document.createTextNode(n2(t2, e2));
    return r2.appendChild(o2), r2.media = "all", e2.id && r2.setAttribute("id", e2.id), e2 && e2.detectingConflicts && e2.detectionIgnoreAttr && r2.setAttributeNode(document.createAttribute(e2.detectionIgnoreAttr)), r2;
  }
  function L(t2, n2) {
    n2.autoA11y = t2.autoA11y.enabled, "pro" === t2.license && (n2.autoFetchSvg = true, n2.fetchSvgFrom = t2.baseUrl + "/releases/" + ("latest" === t2.version ? "latest" : "v".concat(t2.version)) + "/svgs", n2.fetchUploadedSvgFrom = t2.uploadsUrl);
    let r2 = [];
    return t2.v4shim.enabled && r2.push(
      new C(function(r3, o2) {
        I(s(t2, { addOn: "-v4-shims", minify: t2.minify.enabled }), n2).then(function(t3) {
          r3(x(t3, e(e({}, n2), {}, { id: "fa-v4-shims" })));
        }).catch(o2);
      })
    ), r2.push(
      new C(function(r3, o2) {
        I(
          t2.subsetPath && t2.baseUrl + "/" + t2.subsetPath || s(t2, { minify: t2.minify.enabled }),
          n2
        ).then(function(t3) {
          let o3 = x(t3, e(e({}, n2), {}, { id: "fa-main" }));
          r3(
            function(t4, e2) {
              let n3 = e2 && void 0 !== e2.autoFetchSvg ? e2.autoFetchSvg : void 0, r4 = e2 && void 0 !== e2.autoA11y ? e2.autoA11y : void 0;
              void 0 !== r4 && t4.setAttribute("data-auto-a11y", r4 ? "true" : "false");
              n3 && (t4.setAttributeNode(
                document.createAttribute("data-auto-fetch-svg")
              ), t4.setAttribute("data-fetch-svg-from", e2.fetchSvgFrom), t4.setAttribute(
                "data-fetch-uploaded-svg-from",
                e2.fetchUploadedSvgFrom
              ));
              return t4;
            }(o3, n2)
          );
        }).catch(o2);
      })
    ), C.all(r2);
  }
  function x(t2, e2) {
    let n2 = document.createElement("SCRIPT"), r2 = document.createTextNode(t2);
    return n2.appendChild(r2), n2.referrerPolicy = "strict-origin", e2.id && n2.setAttribute("id", e2.id), e2 && e2.detectingConflicts && e2.detectionIgnoreAttr && n2.setAttributeNode(document.createAttribute(e2.detectionIgnoreAttr)), n2;
  }
  function M(t2) {
    let e2, n2 = [], r2 = document, o2 = r2.documentElement.doScroll, i2 = (o2 ? /^loaded|^c/ : /^loaded|^i|^c/).test(r2.readyState);
    i2 || r2.addEventListener(
      "DOMContentLoaded",
      e2 = function() {
        for (r2.removeEventListener("DOMContentLoaded", e2), i2 = 1; e2 = n2.shift(); )
          e2();
      }
    ), i2 ? setTimeout(t2, 0) : n2.push(t2);
  }
  function N(t2) {
    "undefined" != typeof MutationObserver && new MutationObserver(t2).observe(document, { childList: true, subtree: true });
  }
  try {
    if (window.FontAwesomeKitConfig) {
      let D = window.FontAwesomeKitConfig, R = {
        detectingConflicts: D.detectConflictsUntil && /* @__PURE__ */ new Date() <= new Date(D.detectConflictsUntil),
        detectionIgnoreAttr: "data-fa-detection-ignore",
        fetch: window.fetch,
        token: D.token,
        XMLHttpRequest: window.XMLHttpRequest,
        document
      }, H = document.currentScript, K = H ? H.parentElement : document.head;
      (function() {
        let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "js" === t2.method ? L(t2, e2) : "css" === t2.method ? k(t2, e2, function(t3) {
          M(t3), N(t3);
        }) : void 0;
      })(D, R).then(function(t2) {
        t2.map(function(t3) {
          try {
            K.insertBefore(t3, H ? H.nextSibling : null);
          } catch (e2) {
            K.appendChild(t3);
          }
        }), R.detectingConflicts && H && M(function() {
          H.setAttributeNode(
            document.createAttribute(R.detectionIgnoreAttr)
          );
          let t3 = function(t4, e2) {
            let n2 = document.createElement("script");
            return e2 && e2.detectionIgnoreAttr && n2.setAttributeNode(
              document.createAttribute(e2.detectionIgnoreAttr)
            ), n2.src = s(t4, {
              baseFilename: "conflict-detection",
              fileSuffix: "js",
              subdir: "js",
              minify: t4.minify.enabled
            }), n2;
          }(D, R);
          document.body.appendChild(t3);
        });
      }).catch(function(t2) {
        console.error("".concat("Font Awesome Kit:", " ").concat(t2));
      });
    }
  } catch (a2) {
    console.error("".concat("Font Awesome Kit:", " ").concat(a2));
  }
});
