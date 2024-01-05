import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from './utils';
export var useSafeEffect = isBrowser ? useLayoutEffect : useEffect;
//# sourceMappingURL=use-safe-effect.js.map