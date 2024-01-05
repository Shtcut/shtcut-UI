import * as React from 'react';
import { __DEV__ } from '@shtcut-ui/utils';
import PropTypes from 'prop-types';

const VisuallyHidden = React.forwardRef<any, any>(function VisuallyHidden(
  { as: Span = 'span', style = {}, ...props },
  ref,
) {
  return (
    <Span
      ref={ref}
      style={{
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        whitespace: 'nowrap',
        wordWrap: 'normal',
        ...style,
      }}
      {...props}
    />
  );
});

interface VisuallyHiddenProps {
  children?: React.ReactDOM;
}

if (__DEV__) {
  VisuallyHidden.displayName = 'VisuallyHidden';
  VisuallyHidden.propTypes = {
    as: PropTypes.any,
    children: PropTypes.node,
  };
}

export type { VisuallyHiddenProps };
export { VisuallyHidden };
export default VisuallyHidden;
