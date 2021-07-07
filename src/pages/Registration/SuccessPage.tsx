import React from 'react';
import { Box, Heading, Text } from 'grommet';

import FormContainer from '../../components/FormContainer/FormContainer';
import { useHistory } from 'react-router-dom';

const SuccessPage = (): JSX.Element => {
  const history = useHistory();
  return (
    <FormContainer>
      <Box pad={'medium'} gap={'large'} fill>
        <Box
          gap={'large'}
          pad={'small'}
          width={'large'}
          round={'medium'}
          elevation={'small'}
          justify={'center'}
          align={'center'}
          background={{
            color: 'light-1',
            opacity: true,
          }}
          fill
        >
          <Heading>Congratulations!</Heading>
          <Heading level={'3'}>Thank you for filling the application!</Heading>
          <Box
            margin={'medium'}
            width={'medium'}
            height={'xsmall'}
            round={'medium'}
            align={'center'}
            justify={'center'}
            background={'brand'}
            responsive={true}
            onClick={() => history.push('/')}
          >
            <Text size={'large'}>Create New Registration</Text>
          </Box>
        </Box>
      </Box>
    </FormContainer>
  );
};

export default SuccessPage;
