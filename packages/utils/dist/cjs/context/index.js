"use strict";

exports.__esModule = true;
exports.createContext = createContext;
var _react = require("react");
var _assertion = require("../assertion");
function createContext(options) {
  var name = options.name,
    _options$strict = options.strict,
    strict = _options$strict === void 0 ? true : _options$strict,
    errorMessage = options.errorMessage;
  var Context = /*#__PURE__*/(0, _react.createContext)(undefined);
  if (_assertion.__DEV__) {
    Context.displayName = name;
  }
  var useContext = function useContext() {
    var context = (0, _react.useContext)(Context);
    if (context == undefined && strict) {
      var error = new Error(errorMessage != null ? errorMessage : "use" + name.replace('Context', '') + " return `undefined`. Seems you forgot to wrap component within " + name.replace('Context', 'Provider'));
      error.name = 'Context';
      Error.captureStackTrace == null || Error.captureStackTrace(error, useContext);
      throw error;
    }
    return context;
  };
  return [Context.Provider, useContext, Context];
}
//# sourceMappingURL=index.js.map