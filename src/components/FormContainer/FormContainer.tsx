import React from 'react';
import { formTheme } from '../../themes';
import { Grommet, Box } from 'grommet';

export type FormContainerProps = {
  children: React.ReactNode;
};

const FormContainer = (props: FormContainerProps): JSX.Element => {
  const { children } = props;
  return (
    <Grommet theme={formTheme} background={{ color: 'light-6' }} full>
      <Box
        pad={'medium'}
        gap={'medium'}
        align={'center'}
        background={{ color: 'light-6' }}
      >
        {children}
      </Box>
    </Grommet>
  );
};

export default FormContainer;
