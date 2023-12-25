import * as React from 'react';
var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function startAnimate(dom) {
  dom.style.setProperty('--star-left', "".concat(rand(-10, 100), "%"));
  dom.style.setProperty('--star-top', "".concat(rand(-80, 80), "%"));
  dom.style.animation = 'none';
  dom.offsetHeight;
  dom.style.animation = '';
  var svg = dom.children.item(0);
  if (svg) {
    var path = svg.children.item(0);
    if (path) {
      path.setAttribute('fill', "rgb(".concat(Math.random() * 255, ", ").concat(Math.random() * 255, ", ").concat(Math.random() * 255, ")"));
    }
  }
}
var S = function S(_ref) {
  var idx = _ref.idx;
  var starRef = React.useRef(null);
  React.useEffect(function () {
    var timer;
    var intervalTimer;
    if (starRef.current) {
      var interval = 1000;
      timer = setTimeout(function () {
        startAnimate(starRef.current);
        intervalTimer = setInterval(function () {
          return startAnimate(starRef.current);
        }, 2000);
      }, idx * (interval / 2));
    }
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: starRef,
    className: "magic-star"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
  })));
};
var Star = /*#__PURE__*/React.memo(S);
export default Star;