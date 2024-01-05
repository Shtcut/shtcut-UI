function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { useEffect, useState } from "react";
export var useClipboard = function useClipboard(timeout) {
  if (timeout === void 0) {
    timeout = 2000;
  }
  var [value, setValue] = useState("");
  var [copied, setCopied] = useState(false);
  var onCopy = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (source) {
      yield navigator.clipboard.writeText(source);
      setValue(source);
      setCopied(true);
    });
    return function onCopy(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  useEffect(() => {
    var id = copied ? setTimeout(() => setCopied(false), timeout) : null;
    return () => {
      id && clearTimeout(id);
    };
  }, [timeout, copied]);
  return {
    value,
    copied,
    onCopy
  };
};
//# sourceMappingURL=index.js.map