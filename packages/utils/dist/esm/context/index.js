import { createContext as ReactCreateContext, useContext as ReactUseContext } from 'react';
import { __DEV__ } from '../assertion';
export function createContext(options) {
  var {
    name,
    strict = true,
    errorMessage
  } = options;
  var Context = /*#__PURE__*/ReactCreateContext(undefined);
  if (__DEV__) {
    Context.displayName = name;
  }
  var useContext = () => {
    var context = ReactUseContext(Context);
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