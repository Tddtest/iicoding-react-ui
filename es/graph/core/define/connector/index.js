/**
 * @auth: dmx
 * @time: 2022/03/09
 * @func: 自定义边的方式
 * */
import { Curve, Graph, Line, Path } from '@antv/x6';
Graph.registerConnector('iiCoding', function (s, e) {
  var offset = 4;
  var deltaY = Math.abs(e.y - s.y);
  var control = Math.floor(deltaY / 3 * 2);
  var v1 = {
    x: s.x,
    y: s.y + offset + control
  };
  var v2 = {
    x: e.x,
    y: e.y - offset - control
  };
  return Path.normalize("M ".concat(s.x, " ").concat(s.y, "\n       L ").concat(s.x, " ").concat(s.y + offset, "\n       C ").concat(v1.x, " ").concat(v1.y, " ").concat(v2.x, " ").concat(v2.y, " ").concat(e.x, " ").concat(e.y - offset, "\n       L ").concat(e.x, " ").concat(e.y, "\n      "));
}, true);
Graph.registerConnector('curveConnector', function (sourcePoint, targetPoint) {
  var hgap = Math.abs(targetPoint.x - sourcePoint.x);
  var path = new Path();
  path.appendSegment(Path.createSegment('M', sourcePoint.x - 4, sourcePoint.y));
  path.appendSegment(Path.createSegment('L', sourcePoint.x + 12, sourcePoint.y));
  // 水平三阶贝塞尔曲线
  path.appendSegment(Path.createSegment('C', sourcePoint.x < targetPoint.x ? sourcePoint.x + hgap / 2 : sourcePoint.x - hgap / 2, sourcePoint.y, sourcePoint.x < targetPoint.x ? targetPoint.x - hgap / 2 : targetPoint.x + hgap / 2, targetPoint.y, targetPoint.x - 6, targetPoint.y));
  path.appendSegment(Path.createSegment('L', targetPoint.x + 2, targetPoint.y));
  return path.serialize();
}, true);
Graph.registerConnector('multi-smooth', function (sourcePoint, targetPoint, _routePoints, options) {
  var _options$index = options.index,
    index = _options$index === void 0 ? 0 : _options$index,
    _options$total = options.total,
    total = _options$total === void 0 ? 1 : _options$total,
    _options$gap = options.gap,
    gap = _options$gap === void 0 ? 12 : _options$gap;
  var line = new Line(sourcePoint, targetPoint);
  var centerIndex = (total - 1) / 2;
  var dist = index - centerIndex;
  var diff = Math.abs(dist);
  var factor = diff === 0 ? 1 : diff / dist;
  var vertice = line.pointAtLength(line.length() / 2 + gap * factor * Math.ceil(diff)).rotate(90, line.getCenter());
  var points = [sourcePoint, vertice, targetPoint];
  var curves = Curve.throughPoints(points);
  var path = new Path(curves);
  return options.raw ? path : path.serialize();
}, true);