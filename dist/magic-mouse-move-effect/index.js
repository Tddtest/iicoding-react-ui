import React from 'react';
import "./awesome.js";
import "./index.less";
var M = function M() {
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