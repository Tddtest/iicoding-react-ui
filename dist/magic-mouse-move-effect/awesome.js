function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
window.FontAwesomeKitConfig = {
  id: 85086602,
  version: '6.5.1',
  token: '1ee8f271b9',
  method: 'css',
  baseUrl: 'https://ka-p.fontawesome.com',
  license: 'pro',
  asyncLoading: {
    enabled: false
  },
  autoA11y: {
    enabled: true
  },
  baseUrlKit: 'https://kit.fontawesome.com',
  detectConflictsUntil: null,
  iconUploads: {},
  minify: {
    enabled: true
  },
  v4FontFaceShim: {
    enabled: true
  },
  v4shim: {
    enabled: true
  },
  v5FontFaceShim: {
    enabled: true
  },
  customIconsCssPath: '1ee8f271b9/85086602/kit-upload.css',
  uploadsUrl: 'https://kit-uploads.fontawesome.com'
};
!function (t) {
  'function' == typeof define && define.amd ? define('kit-loader', t) : t();
}(function () {
  'use strict';

  function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var _r = Object.getOwnPropertySymbols(t);
      e && (_r = _r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, _r);
    }
    return n;
  }
  function e(e) {
    for (var _n = 1; _n < arguments.length; _n++) {
      var o = null != arguments[_n] ? arguments[_n] : {};
      _n % 2 ? t(Object(o), !0).forEach(function (t) {
        r(e, t, o[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
      });
    }
    return e;
  }
  function n(t) {
    return (n = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : _typeof(t);
    })(t);
  }
  function r(t, e, n) {
    return (e = function (t) {
      var e = function (t, e) {
        if ('object' != _typeof(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var _r2 = n.call(t, e || 'default');
          if ('object' != _typeof(_r2)) return _r2;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }(t, 'string');
      return 'symbol' == _typeof(e) ? e : String(e);
    }(e)) in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }
  function o(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
      if (null != n) {
        var _r3,
          _o,
          _i,
          _a,
          _c = [],
          _u = !0,
          _f = !1;
        try {
          if (_i = (n = n.call(t)).next, 0 === e) {
            if (Object(n) !== n) return;
            _u = !1;
          } else for (; !(_u = (_r3 = _i.call(n)).done) && (_c.push(_r3.value), _c.length !== e); _u = !0);
        } catch (t) {
          _f = !0, _o = t;
        } finally {
          try {
            if (!_u && null != n.return && (_a = n.return(), Object(_a) !== _a)) return;
          } finally {
            if (_f) throw _o;
          }
        }
        return _c;
      }
    }(t, e) || function (t, e) {
      if (!t) return;
      if ('string' == typeof t) return i(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      'Object' === n && t.constructor && (n = t.constructor.name);
      if ('Map' === n || 'Set' === n) return Array.from(t);
      if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e);
    }(t, e) || function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }();
  }
  function i(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  var a = 'sharp',
    c = ['classic', 'duotone', 'sharp'],
    u = ['fak', 'fa-kit', 'fakd', 'fa-kit-duotone'],
    f = ['fa', 'fas', 'fa-solid', 'far', 'fa-regular', 'fal', 'fa-light', 'fat', 'fa-thin', 'fad', 'fa-duotone', 'fab', 'fa-brands', 'fass', 'fasr', 'fasl', 'fast'];
  function s(t, e) {
    var n = e && e.addOn || '',
      r = e && e.baseFilename || t.license + n,
      o = e && e.minify ? '.min' : '',
      i = e && e.fileSuffix || t.method,
      a = e && e.subdir || t.method;
    return t.baseUrl + '/releases/' + ('latest' === t.version ? 'latest' : 'v'.concat(t.version)) + '/' + a + '/' + r + o + '.' + i;
  }
  function d(t, e) {
    var n = e || ['fa'],
      r = '.' + Array.prototype.join.call(n, ',.'),
      o = t.querySelectorAll(r);
    Array.prototype.forEach.call(o, function (e) {
      var n = e.getAttribute('title');
      e.setAttribute('aria-hidden', 'true');
      var r = !e.nextElementSibling || !e.nextElementSibling.classList.contains('sr-only');
      if (n && r) {
        var _o2 = t.createElement('span');
        _o2.innerHTML = n, _o2.classList.add('sr-only'), e.parentNode.insertBefore(_o2, e.nextSibling);
      }
    });
  }
  var l,
    h = function h() {},
    m = 'undefined' != typeof global && void 0 !== global.process && 'function' == typeof global.process.emit,
    p = 'undefined' == typeof setImmediate ? setTimeout : setImmediate,
    v = [];
  function b() {
    for (var _t = 0; _t < v.length; _t++) v[_t][0](v[_t][1]);
    v = [], l = !1;
  }
  function y(t, e) {
    v.push([t, e]), l || (l = !0, p(b, 0));
  }
  function g(t) {
    var e = t.owner,
      n = e._state,
      r = e._data,
      o = t[n],
      i = t.then;
    if ('function' == typeof o) {
      n = 'fulfilled';
      try {
        r = o(r);
      } catch (t) {
        O(i, t);
      }
    }
    w(i, r) || ('fulfilled' === n && A(i, r), 'rejected' === n && O(i, r));
  }
  function w(t, e) {
    var r;
    try {
      if (t === e) throw new TypeError('A promises callback cannot return that same promise.');
      if (e && ('function' == typeof e || 'object' === n(e))) {
        var _o3 = e.then;
        if ('function' == typeof _o3) return _o3.call(e, function (n) {
          r || (r = !0, e === n ? S(t, n) : A(t, n));
        }, function (e) {
          r || (r = !0, O(t, e));
        }), !0;
      }
    } catch (e) {
      return r || O(t, e), !0;
    }
    return !1;
  }
  function A(t, e) {
    t !== e && w(t, e) || S(t, e);
  }
  function S(t, e) {
    'pending' === t._state && (t._state = 'settled', t._data = e, y(E, t));
  }
  function O(t, e) {
    'pending' === t._state && (t._state = 'settled', t._data = e, y(P, t));
  }
  function j(t) {
    t._then = t._then.forEach(g);
  }
  function E(t) {
    t._state = 'fulfilled', j(t);
  }
  function P(t) {
    t._state = 'rejected', j(t), !t._handled && m && global.process.emit('unhandledRejection', t._data, t);
  }
  function _(t) {
    global.process.emit('rejectionHandled', t);
  }
  function F(t) {
    if ('function' != typeof t) throw new TypeError('Promise resolver ' + t + ' is not a function');
    if (this instanceof F == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    this._then = [], function (t, e) {
      function n(t) {
        O(e, t);
      }
      try {
        t(function (t) {
          A(e, t);
        }, n);
      } catch (t) {
        n(t);
      }
    }(t, this);
  }
  F.prototype = {
    constructor: F,
    _state: 'pending',
    _then: null,
    _data: void 0,
    _handled: !1,
    then: function then(t, e) {
      var n = {
        owner: this,
        then: new this.constructor(h),
        fulfilled: t,
        rejected: e
      };
      return !e && !t || this._handled || (this._handled = !0, 'rejected' === this._state && m && y(_, this)), 'fulfilled' === this._state || 'rejected' === this._state ? y(g, n) : this._then.push(n), n.then;
    },
    catch: function _catch(t) {
      return this.then(null, t);
    }
  }, F.all = function (t) {
    if (!Array.isArray(t)) throw new TypeError('You must pass an array to Promise.all().');
    return new F(function (e, n) {
      var r = [],
        o = 0;
      function i(t) {
        return o++, function (n) {
          r[t] = n, --o || e(r);
        };
      }
      for (var a, c = 0; c < t.length; c++) (a = t[c]) && 'function' == typeof a.then ? a.then(i(c), n) : r[c] = a;
      o || e(r);
    });
  }, F.race = function (t) {
    if (!Array.isArray(t)) throw new TypeError('You must pass an array to Promise.race().');
    return new F(function (e, n) {
      for (var r, o = 0; o < t.length; o++) (r = t[o]) && 'function' == typeof r.then ? r.then(e, n) : e(r);
    });
  }, F.resolve = function (t) {
    return t && 'object' === n(t) && t.constructor === F ? t : new F(function (e) {
      e(t);
    });
  }, F.reject = function (t) {
    return new F(function (e, n) {
      n(t);
    });
  };
  var C = 'function' == typeof Promise ? Promise : F;
  function I(t, e) {
    var n = e.fetch,
      r = e.XMLHttpRequest,
      o = e.token,
      i = t;
    return o && !function (t) {
      return t.indexOf('kit-upload.css') > -1;
    }(t) && ('URLSearchParams' in window ? (i = new URL(t)).searchParams.set('token', o) : i = i + '?token=' + encodeURIComponent(o)), i = i.toString(), new C(function (t, e) {
      if ('function' == typeof n) n(i, {
        mode: 'cors',
        cache: 'default'
      }).then(function (t) {
        if (t.ok) return t.text();
        throw new Error('');
      }).then(function (e) {
        t(e);
      }).catch(e);else if ('function' == typeof r) {
        var _o4 = new r();
        _o4.addEventListener('loadend', function () {
          this.responseText ? t(this.responseText) : e(new Error(''));
        });
        ['abort', 'error', 'timeout'].map(function (t) {
          _o4.addEventListener(t, function () {
            e(new Error(''));
          });
        }), _o4.open('GET', i), _o4.send();
      } else {
        e(new Error(''));
      }
    });
  }
  function U(t, e, n) {
    var r = t;
    return [[/(url\("?)\.\.\/\.\.\/\.\./g, function (t, n) {
      return ''.concat(n).concat(e);
    }], [/(url\("?)\.\.\/webfonts/g, function (t, r) {
      return ''.concat(r).concat(e, '/releases/v').concat(n, '/webfonts');
    }], [/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g, function (t, n) {
      return ''.concat(n).concat(e);
    }]].forEach(function (t) {
      var e = o(t, 2),
        n = e[0],
        i = e[1];
      r = r.replace(n, i);
    }), r;
  }
  function k(t, n) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
      o = n.document || o,
      i = d.bind(d, o, [].concat(f, u, c.map(function (t) {
        return 'fa-'.concat(t);
      })));
    t.autoA11y.enabled && r(i);
    var a = t.subsetPath && t.baseUrl + '/' + t.subsetPath,
      l = [{
        id: 'fa-main',
        addOn: void 0,
        url: a
      }];
    if (t.v4shim && t.v4shim.enabled && l.push({
      id: 'fa-v4-shims',
      addOn: '-v4-shims'
    }), t.v5FontFaceShim && t.v5FontFaceShim.enabled && l.push({
      id: 'fa-v5-font-face',
      addOn: '-v5-font-face'
    }), t.v4FontFaceShim && t.v4FontFaceShim.enabled && l.push({
      id: 'fa-v4-font-face',
      addOn: '-v4-font-face'
    }), !a && t.customIconsCssPath) {
      var _h = t.customIconsCssPath.indexOf('kit-upload.css') > -1 ? t.baseUrlKit : t.baseUrl,
        _m = _h + '/' + t.customIconsCssPath;
      l.push({
        id: 'fa-kit-upload',
        url: _m
      });
    }
    var p = l.map(function (r) {
      return new C(function (o, i) {
        var a = r.url || s(t, {
            addOn: r.addOn,
            minify: t.minify.enabled
          }),
          c = {
            id: r.id
          },
          u = t.subset ? c : e(e(e({}, n), c), {}, {
            baseUrl: t.baseUrl,
            version: t.version,
            id: r.id,
            contentFilter: function contentFilter(t, e) {
              return U(t, e.baseUrl, e.version);
            }
          });
        I(a, n).then(function (t) {
          o(T(t, u));
        }).catch(i);
      });
    });
    return C.all(p);
  }
  function T(t, e) {
    var n = e.contentFilter || function (t, e) {
        return t;
      },
      r = document.createElement('style'),
      o = document.createTextNode(n(t, e));
    return r.appendChild(o), r.media = 'all', e.id && r.setAttribute('id', e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), r;
  }
  function L(t, n) {
    n.autoA11y = t.autoA11y.enabled, 'pro' === t.license && (n.autoFetchSvg = !0, n.fetchSvgFrom = t.baseUrl + '/releases/' + ('latest' === t.version ? 'latest' : 'v'.concat(t.version)) + '/svgs', n.fetchUploadedSvgFrom = t.uploadsUrl);
    var r = [];
    return t.v4shim.enabled && r.push(new C(function (r, o) {
      I(s(t, {
        addOn: '-v4-shims',
        minify: t.minify.enabled
      }), n).then(function (t) {
        r(x(t, e(e({}, n), {}, {
          id: 'fa-v4-shims'
        })));
      }).catch(o);
    })), r.push(new C(function (r, o) {
      I(t.subsetPath && t.baseUrl + '/' + t.subsetPath || s(t, {
        minify: t.minify.enabled
      }), n).then(function (t) {
        var o = x(t, e(e({}, n), {}, {
          id: 'fa-main'
        }));
        r(function (t, e) {
          var n = e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0,
            r = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
          void 0 !== r && t.setAttribute('data-auto-a11y', r ? 'true' : 'false');
          n && (t.setAttributeNode(document.createAttribute('data-auto-fetch-svg')), t.setAttribute('data-fetch-svg-from', e.fetchSvgFrom), t.setAttribute('data-fetch-uploaded-svg-from', e.fetchUploadedSvgFrom));
          return t;
        }(o, n));
      }).catch(o);
    })), C.all(r);
  }
  function x(t, e) {
    var n = document.createElement('SCRIPT'),
      r = document.createTextNode(t);
    return n.appendChild(r), n.referrerPolicy = 'strict-origin', e.id && n.setAttribute('id', e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n;
  }
  function M(t) {
    var _e,
      n = [],
      r = document,
      o = r.documentElement.doScroll,
      i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
    i || r.addEventListener('DOMContentLoaded', _e = function e() {
      for (r.removeEventListener('DOMContentLoaded', _e), i = 1; _e = n.shift();) _e();
    }), i ? setTimeout(t, 0) : n.push(t);
  }
  function N(t) {
    'undefined' != typeof MutationObserver && new MutationObserver(t).observe(document, {
      childList: !0,
      subtree: !0
    });
  }
  try {
    if (window.FontAwesomeKitConfig) {
      var D = window.FontAwesomeKitConfig,
        R = {
          detectingConflicts: D.detectConflictsUntil && new Date() <= new Date(D.detectConflictsUntil),
          detectionIgnoreAttr: 'data-fa-detection-ignore',
          fetch: window.fetch,
          token: D.token,
          XMLHttpRequest: window.XMLHttpRequest,
          document: document
        },
        H = document.currentScript,
        K = H ? H.parentElement : document.head;
      (function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return 'js' === t.method ? L(t, e) : 'css' === t.method ? k(t, e, function (t) {
          M(t), N(t);
        }) : void 0;
      })(D, R).then(function (t) {
        t.map(function (t) {
          try {
            K.insertBefore(t, H ? H.nextSibling : null);
          } catch (e) {
            K.appendChild(t);
          }
        }), R.detectingConflicts && H && M(function () {
          H.setAttributeNode(document.createAttribute(R.detectionIgnoreAttr));
          var t = function (t, e) {
            var n = document.createElement('script');
            return e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n.src = s(t, {
              baseFilename: 'conflict-detection',
              fileSuffix: 'js',
              subdir: 'js',
              minify: t.minify.enabled
            }), n;
          }(D, R);
          document.body.appendChild(t);
        });
      }).catch(function (t) {
        console.error(''.concat('Font Awesome Kit:', ' ').concat(t));
      });
    }
  } catch (a) {
    console.error(''.concat('Font Awesome Kit:', ' ').concat(a));
  }
});