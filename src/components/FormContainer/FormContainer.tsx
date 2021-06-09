import React from 'react';
import { formTheme } from '../../themes';
import { Grommet, Box } from 'grommet';

export type FormContainerProps = {
  children: React.ReactNode;
};

const FormContainer = (props: FormContainerProps) => {
  const { children } = props;
  return (
    <Grommet theme={formTheme} background={{ color: 'light-6' }} full>
      <Box
        fill
        pad={'medium'}
        gap={'large'}
        align={'center'}
        responsive={true}
        background={{ color: 'light-6' }}
      >
        {children}
      </Box>
    </Grommet>
  );
};

export default FormContainer;
