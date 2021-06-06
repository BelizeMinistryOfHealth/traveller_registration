import React from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import { Box } from 'grommet';

const Registration = (): JSX.Element => {
  return (
    <Box
      fill
      flex={'grow'}
      gap={'medium'}
      pad={'small'}
      align={'center'}
      responsive={true}
      background={{ color: 'light-4' }}
    >
      <PersonalInfoForm />
    </Box>
  );
};

export default Registration;
