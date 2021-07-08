import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet';
import { customBreakpoints } from './breakpoints';

export const formTheme = deepMerge(grommet, {
  formField: {
    border: {
      side: 'all',
    },
  },
  global: {
    ...customBreakpoints.global,
    colors: {
      brand: '#4c8743',
    },
    focus: {
      border: {
        color: '#7dc671',
      },
    },
  },
});
