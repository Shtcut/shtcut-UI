import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from './utils';

export const useSafeEffect = isBrowser ? useLayoutEffect : useEffect;
