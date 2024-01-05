"use strict";

exports.__esModule = true;
exports.setRef = setRef;
exports.useForkRef = useForkRef;
var _react = require("react");
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    // @ts-ignore
    ref.current = value;
  }
}
function useForkRef(refA, refB) {
  return (0, _react.useMemo)(function () {
    if (refA == null && refB == null) {
      return null;
    }
    return function (refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
//# sourceMappingURL=index.js.map