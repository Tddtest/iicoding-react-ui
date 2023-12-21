import React from 'react';
import "./index.less";
var M = function M() {
  React.useLayoutEffect(function () {
    var js = "window.FontAwesomeKitConfig = {\n  id: 85086602,\n  version: '6.5.1',\n  token: '1ee8f271b9',\n  method: 'css',\n  baseUrl: 'https://ka-p.fontawesome.com',\n  license: 'pro',\n  asyncLoading: { enabled: false },\n  autoA11y: { enabled: true },\n  baseUrlKit: 'https://kit.fontawesome.com',\n  detectConflictsUntil: null,\n  iconUploads: {},\n  minify: { enabled: true },\n  v4FontFaceShim: { enabled: true },\n  v4shim: { enabled: true },\n  v5FontFaceShim: { enabled: true },\n  customIconsCssPath: '1ee8f271b9/85086602/kit-upload.css',\n  uploadsUrl: 'https://kit-uploads.fontawesome.com',\n};\n!(function (t) {\n  'function' == typeof define && define.amd ? define('kit-loader', t) : t();\n})(function () {\n  'use strict';\n  function t(t, e) {\n    let n = Object.keys(t);\n    if (Object.getOwnPropertySymbols) {\n      let r = Object.getOwnPropertySymbols(t);\n      e &&\n        (r = r.filter(function (e) {\n          return Object.getOwnPropertyDescriptor(t, e).enumerable;\n        })),\n        n.push.apply(n, r);\n    }\n    return n;\n  }\n  function e(e) {\n    for (let n = 1; n < arguments.length; n++) {\n      var o = null != arguments[n] ? arguments[n] : {};\n      n % 2\n        ? t(Object(o), !0).forEach(function (t) {\n            r(e, t, o[t]);\n          })\n        : Object.getOwnPropertyDescriptors\n          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))\n          : t(Object(o)).forEach(function (t) {\n              Object.defineProperty(\n                e,\n                t,\n                Object.getOwnPropertyDescriptor(o, t),\n              );\n            });\n    }\n    return e;\n  }\n  function n(t) {\n    return (n =\n      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator\n        ? function (t) {\n            return typeof t;\n          }\n        : function (t) {\n            return t &&\n              'function' == typeof Symbol &&\n              t.constructor === Symbol &&\n              t !== Symbol.prototype\n              ? 'symbol'\n              : typeof t;\n          })(t);\n  }\n  function r(t, e, n) {\n    return (\n      (e = (function (t) {\n        let e = (function (t, e) {\n          if ('object' != typeof t || null === t) return t;\n          let n = t[Symbol.toPrimitive];\n          if (void 0 !== n) {\n            let r = n.call(t, e || 'default');\n            if ('object' != typeof r) return r;\n            throw new TypeError('@@toPrimitive must return a primitive value.');\n          }\n          return ('string' === e ? String : Number)(t);\n        })(t, 'string');\n        return 'symbol' == typeof e ? e : String(e);\n      })(e)) in t\n        ? Object.defineProperty(t, e, {\n            value: n,\n            enumerable: !0,\n            configurable: !0,\n            writable: !0,\n          })\n        : (t[e] = n),\n      t\n    );\n  }\n  function o(t, e) {\n    return (\n      (function (t) {\n        if (Array.isArray(t)) return t;\n      })(t) ||\n      (function (t, e) {\n        let n =\n          null == t\n            ? null\n            : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||\n              t['@@iterator'];\n        if (null != n) {\n          let r,\n            o,\n            i,\n            a,\n            c = [],\n            u = !0,\n            f = !1;\n          try {\n            if (((i = (n = n.call(t)).next), 0 === e)) {\n              if (Object(n) !== n) return;\n              u = !1;\n            } else\n              for (\n                ;\n                !(u = (r = i.call(n)).done) &&\n                (c.push(r.value), c.length !== e);\n                u = !0\n              );\n          } catch (t) {\n            (f = !0), (o = t);\n          } finally {\n            try {\n              if (!u && null != n.return && ((a = n.return()), Object(a) !== a))\n                return;\n            } finally {\n              if (f) throw o;\n            }\n          }\n          return c;\n        }\n      })(t, e) ||\n      (function (t, e) {\n        if (!t) return;\n        if ('string' == typeof t) return i(t, e);\n        let n = Object.prototype.toString.call(t).slice(8, -1);\n        'Object' === n && t.constructor && (n = t.constructor.name);\n        if ('Map' === n || 'Set' === n) return Array.from(t);\n        if (\n          'Arguments' === n ||\n          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)\n        )\n          return i(t, e);\n      })(t, e) ||\n      (function () {\n        throw new TypeError(\n          'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',\n        );\n      })()\n    );\n  }\n  function i(t, e) {\n    (null == e || e > t.length) && (e = t.length);\n    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];\n    return r;\n  }\n  let a = 'sharp',\n    c = ['classic', 'duotone', 'sharp'],\n    u = ['fak', 'fa-kit', 'fakd', 'fa-kit-duotone'],\n    f = [\n      'fa',\n      'fas',\n      'fa-solid',\n      'far',\n      'fa-regular',\n      'fal',\n      'fa-light',\n      'fat',\n      'fa-thin',\n      'fad',\n      'fa-duotone',\n      'fab',\n      'fa-brands',\n      'fass',\n      'fasr',\n      'fasl',\n      'fast',\n    ];\n  function s(t, e) {\n    let n = (e && e.addOn) || '',\n      r = (e && e.baseFilename) || t.license + n,\n      o = e && e.minify ? '.min' : '',\n      i = (e && e.fileSuffix) || t.method,\n      a = (e && e.subdir) || t.method;\n    return (\n      t.baseUrl +\n      '/releases/' +\n      ('latest' === t.version ? 'latest' : 'v'.concat(t.version)) +\n      '/' +\n      a +\n      '/' +\n      r +\n      o +\n      '.' +\n      i\n    );\n  }\n  function d(t, e) {\n    let n = e || ['fa'],\n      r = '.' + Array.prototype.join.call(n, ',.'),\n      o = t.querySelectorAll(r);\n    Array.prototype.forEach.call(o, function (e) {\n      let n = e.getAttribute('title');\n      e.setAttribute('aria-hidden', 'true');\n      let r =\n        !e.nextElementSibling ||\n        !e.nextElementSibling.classList.contains('sr-only');\n      if (n && r) {\n        let o = t.createElement('span');\n        (o.innerHTML = n),\n          o.classList.add('sr-only'),\n          e.parentNode.insertBefore(o, e.nextSibling);\n      }\n    });\n  }\n  let l,\n    h = function () {},\n    m =\n      'undefined' != typeof global &&\n      void 0 !== global.process &&\n      'function' == typeof global.process.emit,\n    p = 'undefined' == typeof setImmediate ? setTimeout : setImmediate,\n    v = [];\n  function b() {\n    for (let t = 0; t < v.length; t++) v[t][0](v[t][1]);\n    (v = []), (l = !1);\n  }\n  function y(t, e) {\n    v.push([t, e]), l || ((l = !0), p(b, 0));\n  }\n  function g(t) {\n    let e = t.owner,\n      n = e._state,\n      r = e._data,\n      o = t[n],\n      i = t.then;\n    if ('function' == typeof o) {\n      n = 'fulfilled';\n      try {\n        r = o(r);\n      } catch (t) {\n        O(i, t);\n      }\n    }\n    w(i, r) || ('fulfilled' === n && A(i, r), 'rejected' === n && O(i, r));\n  }\n  function w(t, e) {\n    let r;\n    try {\n      if (t === e)\n        throw new TypeError(\n          'A promises callback cannot return that same promise.',\n        );\n      if (e && ('function' == typeof e || 'object' === n(e))) {\n        let o = e.then;\n        if ('function' == typeof o)\n          return (\n            o.call(\n              e,\n              function (n) {\n                r || ((r = !0), e === n ? S(t, n) : A(t, n));\n              },\n              function (e) {\n                r || ((r = !0), O(t, e));\n              },\n            ),\n            !0\n          );\n      }\n    } catch (e) {\n      return r || O(t, e), !0;\n    }\n    return !1;\n  }\n  function A(t, e) {\n    (t !== e && w(t, e)) || S(t, e);\n  }\n  function S(t, e) {\n    'pending' === t._state && ((t._state = 'settled'), (t._data = e), y(E, t));\n  }\n  function O(t, e) {\n    'pending' === t._state && ((t._state = 'settled'), (t._data = e), y(P, t));\n  }\n  function j(t) {\n    t._then = t._then.forEach(g);\n  }\n  function E(t) {\n    (t._state = 'fulfilled'), j(t);\n  }\n  function P(t) {\n    (t._state = 'rejected'),\n      j(t),\n      !t._handled && m && global.process.emit('unhandledRejection', t._data, t);\n  }\n  function _(t) {\n    global.process.emit('rejectionHandled', t);\n  }\n  function F(t) {\n    if ('function' != typeof t)\n      throw new TypeError('Promise resolver ' + t + ' is not a function');\n    if (this instanceof F == !1)\n      throw new TypeError(\n        \"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.\",\n      );\n    (this._then = []),\n      (function (t, e) {\n        function n(t) {\n          O(e, t);\n        }\n        try {\n          t(function (t) {\n            A(e, t);\n          }, n);\n        } catch (t) {\n          n(t);\n        }\n      })(t, this);\n  }\n  (F.prototype = {\n    constructor: F,\n    _state: 'pending',\n    _then: null,\n    _data: void 0,\n    _handled: !1,\n    then: function (t, e) {\n      let n = {\n        owner: this,\n        then: new this.constructor(h),\n        fulfilled: t,\n        rejected: e,\n      };\n      return (\n        (!e && !t) ||\n          this._handled ||\n          ((this._handled = !0), 'rejected' === this._state && m && y(_, this)),\n        'fulfilled' === this._state || 'rejected' === this._state\n          ? y(g, n)\n          : this._then.push(n),\n        n.then\n      );\n    },\n    catch: function (t) {\n      return this.then(null, t);\n    },\n  }),\n    (F.all = function (t) {\n      if (!Array.isArray(t))\n        throw new TypeError('You must pass an array to Promise.all().');\n      return new F(function (e, n) {\n        let r = [],\n          o = 0;\n        function i(t) {\n          return (\n            o++,\n            function (n) {\n              (r[t] = n), --o || e(r);\n            }\n          );\n        }\n        for (var a, c = 0; c < t.length; c++)\n          (a = t[c]) && 'function' == typeof a.then\n            ? a.then(i(c), n)\n            : (r[c] = a);\n        o || e(r);\n      });\n    }),\n    (F.race = function (t) {\n      if (!Array.isArray(t))\n        throw new TypeError('You must pass an array to Promise.race().');\n      return new F(function (e, n) {\n        for (var r, o = 0; o < t.length; o++)\n          (r = t[o]) && 'function' == typeof r.then ? r.then(e, n) : e(r);\n      });\n    }),\n    (F.resolve = function (t) {\n      return t && 'object' === n(t) && t.constructor === F\n        ? t\n        : new F(function (e) {\n            e(t);\n          });\n    }),\n    (F.reject = function (t) {\n      return new F(function (e, n) {\n        n(t);\n      });\n    });\n  let C = 'function' == typeof Promise ? Promise : F;\n  function I(t, e) {\n    let n = e.fetch,\n      r = e.XMLHttpRequest,\n      o = e.token,\n      i = t;\n    return (\n      o &&\n        !(function (t) {\n          return t.indexOf('kit-upload.css') > -1;\n        })(t) &&\n        ('URLSearchParams' in window\n          ? (i = new URL(t)).searchParams.set('token', o)\n          : (i = i + '?token=' + encodeURIComponent(o))),\n      (i = i.toString()),\n      new C(function (t, e) {\n        if ('function' == typeof n)\n          n(i, { mode: 'cors', cache: 'default' })\n            .then(function (t) {\n              if (t.ok) return t.text();\n              throw new Error('');\n            })\n            .then(function (e) {\n              t(e);\n            })\n            .catch(e);\n        else if ('function' == typeof r) {\n          let o = new r();\n          o.addEventListener('loadend', function () {\n            this.responseText ? t(this.responseText) : e(new Error(''));\n          });\n          ['abort', 'error', 'timeout'].map(function (t) {\n            o.addEventListener(t, function () {\n              e(new Error(''));\n            });\n          }),\n            o.open('GET', i),\n            o.send();\n        } else {\n          e(new Error(''));\n        }\n      })\n    );\n  }\n  function U(t, e, n) {\n    let r = t;\n    return (\n      [\n        [\n          /(url\\(\"?)\\.\\.\\/\\.\\.\\/\\.\\./g,\n          function (t, n) {\n            return ''.concat(n).concat(e);\n          },\n        ],\n        [\n          /(url\\(\"?)\\.\\.\\/webfonts/g,\n          function (t, r) {\n            return ''.concat(r).concat(e, '/releases/v').concat(n, '/webfonts');\n          },\n        ],\n        [\n          /(url\\(\"?)https:\\/\\/kit-free([^.])*\\.fontawesome\\.com/g,\n          function (t, n) {\n            return ''.concat(n).concat(e);\n          },\n        ],\n      ].forEach(function (t) {\n        let e = o(t, 2),\n          n = e[0],\n          i = e[1];\n        r = r.replace(n, i);\n      }),\n      r\n    );\n  }\n  function k(t, n) {\n    var r =\n        arguments.length > 2 && void 0 !== arguments[2]\n          ? arguments[2]\n          : function () {},\n      o = n.document || o,\n      i = d.bind(\n        d,\n        o,\n        [].concat(\n          f,\n          u,\n          c.map(function (t) {\n            return 'fa-'.concat(t);\n          }),\n        ),\n      );\n    t.autoA11y.enabled && r(i);\n    let a = t.subsetPath && t.baseUrl + '/' + t.subsetPath,\n      l = [{ id: 'fa-main', addOn: void 0, url: a }];\n    if (\n      (t.v4shim &&\n        t.v4shim.enabled &&\n        l.push({ id: 'fa-v4-shims', addOn: '-v4-shims' }),\n      t.v5FontFaceShim &&\n        t.v5FontFaceShim.enabled &&\n        l.push({ id: 'fa-v5-font-face', addOn: '-v5-font-face' }),\n      t.v4FontFaceShim &&\n        t.v4FontFaceShim.enabled &&\n        l.push({ id: 'fa-v4-font-face', addOn: '-v4-font-face' }),\n      !a && t.customIconsCssPath)\n    ) {\n      let h =\n          t.customIconsCssPath.indexOf('kit-upload.css') > -1\n            ? t.baseUrlKit\n            : t.baseUrl,\n        m = h + '/' + t.customIconsCssPath;\n      l.push({ id: 'fa-kit-upload', url: m });\n    }\n    let p = l.map(function (r) {\n      return new C(function (o, i) {\n        let a = r.url || s(t, { addOn: r.addOn, minify: t.minify.enabled }),\n          c = { id: r.id },\n          u = t.subset\n            ? c\n            : e(\n                e(e({}, n), c),\n                {},\n                {\n                  baseUrl: t.baseUrl,\n                  version: t.version,\n                  id: r.id,\n                  contentFilter: function (t, e) {\n                    return U(t, e.baseUrl, e.version);\n                  },\n                },\n              );\n        I(a, n)\n          .then(function (t) {\n            o(T(t, u));\n          })\n          .catch(i);\n      });\n    });\n    return C.all(p);\n  }\n  function T(t, e) {\n    let n =\n        e.contentFilter ||\n        function (t, e) {\n          return t;\n        },\n      r = document.createElement('style'),\n      o = document.createTextNode(n(t, e));\n    return (\n      r.appendChild(o),\n      (r.media = 'all'),\n      e.id && r.setAttribute('id', e.id),\n      e &&\n        e.detectingConflicts &&\n        e.detectionIgnoreAttr &&\n        r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),\n      r\n    );\n  }\n  function L(t, n) {\n    (n.autoA11y = t.autoA11y.enabled),\n      'pro' === t.license &&\n        ((n.autoFetchSvg = !0),\n        (n.fetchSvgFrom =\n          t.baseUrl +\n          '/releases/' +\n          ('latest' === t.version ? 'latest' : 'v'.concat(t.version)) +\n          '/svgs'),\n        (n.fetchUploadedSvgFrom = t.uploadsUrl));\n    let r = [];\n    return (\n      t.v4shim.enabled &&\n        r.push(\n          new C(function (r, o) {\n            I(s(t, { addOn: '-v4-shims', minify: t.minify.enabled }), n)\n              .then(function (t) {\n                r(x(t, e(e({}, n), {}, { id: 'fa-v4-shims' })));\n              })\n              .catch(o);\n          }),\n        ),\n      r.push(\n        new C(function (r, o) {\n          I(\n            (t.subsetPath && t.baseUrl + '/' + t.subsetPath) ||\n              s(t, { minify: t.minify.enabled }),\n            n,\n          )\n            .then(function (t) {\n              let o = x(t, e(e({}, n), {}, { id: 'fa-main' }));\n              r(\n                (function (t, e) {\n                  let n =\n                      e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0,\n                    r = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;\n                  void 0 !== r &&\n                    t.setAttribute('data-auto-a11y', r ? 'true' : 'false');\n                  n &&\n                    (t.setAttributeNode(\n                      document.createAttribute('data-auto-fetch-svg'),\n                    ),\n                    t.setAttribute('data-fetch-svg-from', e.fetchSvgFrom),\n                    t.setAttribute(\n                      'data-fetch-uploaded-svg-from',\n                      e.fetchUploadedSvgFrom,\n                    ));\n                  return t;\n                })(o, n),\n              );\n            })\n            .catch(o);\n        }),\n      ),\n      C.all(r)\n    );\n  }\n  function x(t, e) {\n    let n = document.createElement('SCRIPT'),\n      r = document.createTextNode(t);\n    return (\n      n.appendChild(r),\n      (n.referrerPolicy = 'strict-origin'),\n      e.id && n.setAttribute('id', e.id),\n      e &&\n        e.detectingConflicts &&\n        e.detectionIgnoreAttr &&\n        n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),\n      n\n    );\n  }\n  function M(t) {\n    let e,\n      n = [],\n      r = document,\n      o = r.documentElement.doScroll,\n      i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);\n    i ||\n      r.addEventListener(\n        'DOMContentLoaded',\n        (e = function () {\n          for (\n            r.removeEventListener('DOMContentLoaded', e), i = 1;\n            (e = n.shift());\n\n          )\n            e();\n        }),\n      ),\n      i ? setTimeout(t, 0) : n.push(t);\n  }\n  function N(t) {\n    'undefined' != typeof MutationObserver &&\n      new MutationObserver(t).observe(document, { childList: !0, subtree: !0 });\n  }\n  try {\n    if (window.FontAwesomeKitConfig) {\n      let D = window.FontAwesomeKitConfig,\n        R = {\n          detectingConflicts:\n            D.detectConflictsUntil &&\n            new Date() <= new Date(D.detectConflictsUntil),\n          detectionIgnoreAttr: 'data-fa-detection-ignore',\n          fetch: window.fetch,\n          token: D.token,\n          XMLHttpRequest: window.XMLHttpRequest,\n          document: document,\n        },\n        H = document.currentScript,\n        K = H ? H.parentElement : document.head;\n      (function () {\n        let t =\n            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},\n          e =\n            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};\n        return 'js' === t.method\n          ? L(t, e)\n          : 'css' === t.method\n            ? k(t, e, function (t) {\n                M(t), N(t);\n              })\n            : void 0;\n      })(D, R)\n        .then(function (t) {\n          t.map(function (t) {\n            try {\n              K.insertBefore(t, H ? H.nextSibling : null);\n            } catch (e) {\n              K.appendChild(t);\n            }\n          }),\n            R.detectingConflicts &&\n              H &&\n              M(function () {\n                H.setAttributeNode(\n                  document.createAttribute(R.detectionIgnoreAttr),\n                );\n                let t = (function (t, e) {\n                  let n = document.createElement('script');\n                  return (\n                    e &&\n                      e.detectionIgnoreAttr &&\n                      n.setAttributeNode(\n                        document.createAttribute(e.detectionIgnoreAttr),\n                      ),\n                    (n.src = s(t, {\n                      baseFilename: 'conflict-detection',\n                      fileSuffix: 'js',\n                      subdir: 'js',\n                      minify: t.minify.enabled,\n                    })),\n                    n\n                  );\n                })(D, R);\n                document.body.appendChild(t);\n              });\n        })\n        .catch(function (t) {\n          console.error(''.concat('Font Awesome Kit:', ' ').concat(t));\n        });\n    }\n  } catch (a) {\n    console.error(''.concat('Font Awesome Kit:', ' ').concat(a));\n  }\n});\n";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = js;
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  React.useEffect(function () {
    var start = new Date().getTime();
    var originPosition = {
      x: 0,
      y: 0
    };
    var last = {
      starTimestamp: start,
      starPosition: originPosition,
      mousePosition: originPosition
    };
    var config = {
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 250,
      minimumDistanceBetweenStars: 75,
      glowDuration: 75,
      maximumGlowPointSpacing: 10,
      colors: ['249 146 253', '252 254 255'],
      sizes: ['1.4rem', '1rem', '0.6rem'],
      animations: ['fall-1', 'fall-2', 'fall-3']
    };
    var count = 0;
    var rand = function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      selectRandom = function selectRandom(items) {
        return items[rand(0, items.length - 1)];
      };
    var withUnit = function withUnit(value, unit) {
        return "".concat(value).concat(unit);
      },
      px = function px(value) {
        return withUnit(value, 'px');
      },
      ms = function ms(value) {
        return withUnit(value, 'ms');
      };
    var calcDistance = function calcDistance(a, b) {
      var diffX = b.x - a.x,
        diffY = b.y - a.y;
      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };
    var calcElapsedTime = function calcElapsedTime(start, end) {
      return end - start;
    };
    var appendElement = function appendElement(element) {
        return document.body.appendChild(element);
      },
      removeElement = function removeElement(element, delay) {
        var timer = setTimeout(function () {
          document.body.removeChild(element);
          clearTimeout(timer);
        }, delay);
      };
    var createStar = function createStar(position) {
      var star = document.createElement('span'),
        color = selectRandom(config.colors);
      star.className = 'star fa-solid fa-sparkle';
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = "rgb(".concat(color, ")");
      star.style.textShadow = "0px 0px 1.5rem rgb(".concat(color, " / 0.5)");
      star.style.animationName = config.animations[count++ % 3];
      // @ts-expect-error
      star.style.starAnimationDuration = ms(config.starAnimationDuration);
      appendElement(star);
      removeElement(star, config.starAnimationDuration);
    };
    var createGlowPoint = function createGlowPoint(position) {
      var glow = document.createElement('div');
      glow.className = 'glow-point';
      glow.style.left = px(position.x);
      glow.style.top = px(position.y);
      appendElement(glow);
      removeElement(glow, config.glowDuration);
    };
    var determinePointQuantity = function determinePointQuantity(distance) {
      return Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);
    };
    var createGlow = function createGlow(last, current) {
      var distance = calcDistance(last, current),
        quantity = determinePointQuantity(distance);
      var dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;
      Array.from(Array(quantity)).forEach(function (_, index) {
        var x = last.x + dx * index,
          y = last.y + dy * index;
        createGlowPoint({
          x: x,
          y: y
        });
      });
    };
    var updateLastStar = function updateLastStar(position) {
      last.starTimestamp = new Date().getTime();
      last.starPosition = position;
    };
    var updateLastMousePosition = function updateLastMousePosition(position) {
      return last.mousePosition = position;
    };
    var adjustLastMousePosition = function adjustLastMousePosition(position) {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
      }
    };
    var handleOnMove = function handleOnMove(e) {
      var mousePosition = {
        x: e.clientX,
        y: e.clientY
      };
      adjustLastMousePosition(mousePosition);
      var now = new Date().getTime(),
        hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        updateLastStar(mousePosition);
      }
      createGlow(last.mousePosition, mousePosition);
      updateLastMousePosition(mousePosition);
    };
    window.onmousemove = function (e) {
      return handleOnMove(e);
    };
    window.ontouchmove = function (e) {
      return handleOnMove(e.touches[0]);
    };
    document.body.onmouseleave = function () {
      return updateLastMousePosition(originPosition);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "icdMagicMouseEffect"
  });
};
var MagicMouseMoveEffect = /*#__PURE__*/React.memo(M);
export default MagicMouseMoveEffect;