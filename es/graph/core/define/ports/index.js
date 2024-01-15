import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./star";
export var onPortRendered = function onPortRendered(args) {
  var node = args.node,
    contentSelectors = args.contentSelectors,
    port = args.port;
  var container = contentSelectors && contentSelectors.foContent;
  if (container) {
    var target = ReactDOM.createRoot(container);
    target.render( /*#__PURE__*/React.createElement(Star, {
      node: node,
      port: port
    }));
  }
};