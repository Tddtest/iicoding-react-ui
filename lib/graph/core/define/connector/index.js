// src/graph/core/define/connector/index.ts
var import_x6 = require("@antv/x6");
import_x6.Graph.registerConnector(
  "iiCoding",
  (s, e) => {
    const offset = 4;
    const deltaY = Math.abs(e.y - s.y);
    const control = Math.floor(deltaY / 3 * 2);
    const v1 = { x: s.x, y: s.y + offset + control };
    const v2 = { x: e.x, y: e.y - offset - control };
    return import_x6.Path.normalize(
      `M ${s.x} ${s.y}
       L ${s.x} ${s.y + offset}
       C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
       L ${e.x} ${e.y}
      `
    );
  },
  true
);
import_x6.Graph.registerConnector(
  "curveConnector",
  (sourcePoint, targetPoint) => {
    const hgap = Math.abs(targetPoint.x - sourcePoint.x);
    const path = new import_x6.Path();
    path.appendSegment(
      import_x6.Path.createSegment("M", sourcePoint.x - 4, sourcePoint.y)
    );
    path.appendSegment(
      import_x6.Path.createSegment("L", sourcePoint.x + 12, sourcePoint.y)
    );
    path.appendSegment(
      import_x6.Path.createSegment(
        "C",
        sourcePoint.x < targetPoint.x ? sourcePoint.x + hgap / 2 : sourcePoint.x - hgap / 2,
        sourcePoint.y,
        sourcePoint.x < targetPoint.x ? targetPoint.x - hgap / 2 : targetPoint.x + hgap / 2,
        targetPoint.y,
        targetPoint.x - 6,
        targetPoint.y
      )
    );
    path.appendSegment(
      import_x6.Path.createSegment("L", targetPoint.x + 2, targetPoint.y)
    );
    return path.serialize();
  },
  true
);
import_x6.Graph.registerConnector(
  "multi-smooth",
  (sourcePoint, targetPoint, _routePoints, options) => {
    const { index = 0, total = 1, gap = 12 } = options;
    const line = new import_x6.Line(sourcePoint, targetPoint);
    const centerIndex = (total - 1) / 2;
    const dist = index - centerIndex;
    const diff = Math.abs(dist);
    const factor = diff === 0 ? 1 : diff / dist;
    const vertice = line.pointAtLength(line.length() / 2 + gap * factor * Math.ceil(diff)).rotate(90, line.getCenter());
    const points = [sourcePoint, vertice, targetPoint];
    const curves = import_x6.Curve.throughPoints(points);
    const path = new import_x6.Path(curves);
    return options.raw ? path : path.serialize();
  },
  true
);
