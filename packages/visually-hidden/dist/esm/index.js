var _excluded = ["as", "style"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import { __DEV__ } from '@shtcut-ui/utils';
import PropTypes from 'prop-types';
var VisuallyHidden = /*#__PURE__*/React.forwardRef(function VisuallyHidden(_ref, ref) {
  var {
      as: Span = 'span',
      style = {}
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Span, _extends({
    ref: ref,
    style: _extends({
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      whitespace: 'nowrap',
      wordWrap: 'normal'
    }, style)
  }, props));
});
if (__DEV__) {
  VisuallyHidden.displayName = 'VisuallyHidden';
  VisuallyHidden.propTypes = {
    as: PropTypes.any,
    children: PropTypes.node
  };
}
export { VisuallyHidden };
export default VisuallyHidden;
//# sourceMappingURL=index.js.map