import React from 'react';
import PersonalInfoForm from '../../components/PersonalInfoForm/PersonalInfoForm';
import { Box } from 'grommet';

const Registration = () => {
  return (
    <Box
      fill
      gap={'medium'}
      pad={'small'}
      align={'center'}
      background={{ color: 'light-4' }}
    >
      <PersonalInfoForm />
    </Box>
  );
};

export default Registration;
