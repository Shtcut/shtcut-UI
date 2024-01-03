import { isArray, isObject } from '../index';
export function walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }
    if (isArray(value)) {
      return value.map((item, idx) => inner(item, [...path, String(idx)]));
    }
    if (isObject(value)) {
      return Object.fromEntries(Object.entries(value).map(_ref => {
        var [key, child] = _ref;
        return [key, inner(child, [...path, key])];
      }));
    }
    return predicate(value, path);
  }
  return inner(target);
}
//# sourceMappingURL=index.js.map