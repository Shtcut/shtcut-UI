"use strict";

exports.__esModule = true;
exports.useSafeEffect = void 0;
var _react = require("react");
var _utils = require("./utils");
var useSafeEffect = exports.useSafeEffect = _utils.isBrowser ? _react.useLayoutEffect : _react.useEffect;
//# sourceMappingURL=use-safe-effect.js.map