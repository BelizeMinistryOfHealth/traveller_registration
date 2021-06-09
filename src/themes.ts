import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet';

export const formTheme = deepMerge(grommet, {
  formField: {
    border: {
      side: 'all',
    },
  },
});
