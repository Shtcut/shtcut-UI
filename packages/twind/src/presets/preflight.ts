import type { Preflight } from '@twind/core';

const preflight: Preflight = {
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'theme(borderColor.DEFAULT, currentColor)',
  },
  '::before, ::after': { '--tw-content': "''" },
};
