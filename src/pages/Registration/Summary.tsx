import React from 'react';
import FormContainer from '../../components/FormContainer/FormContainer';
import { Box, Heading, Text } from 'grommet';
import { Redirect } from 'react-router-dom';

interface FormState {
  status: 'saving' | 'success' | 'failure' | 'entry';
}

const Summary = (): JSX.Element => {
  const [next, setNext] = React.useState<string>('');
  const [formState, setFormState] = React.useState<FormState>({
    status: 'entry',
  });

  if (next === 'companion') {
    return <Redirect to={'/companion'} />;
  }

  if (next === 'registration') {
    return <Redirect to={'/registration'} />;
  }

  return (
    <FormContainer>
      <Box pad={'medium'} gap={'large'}>
        <Box
          gridArea={'pInfo'}
          gap={'xxsmall'}
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
        >
          <Heading>Congratulations</Heading>
          <Heading level={'3'}>Thank you for filling the application!</Heading>
          <Box
            width={'medium'}
            height={'xsmall'}
            round={'medium'}
            align={'center'}
            justify={'center'}
            background={'brand'}
            responsive={true}
            onClick={() => setNext('/registration')}
          >
            <Text size={'large'}>Submit Registration</Text>
          </Box>
          <Heading level={'5'}>Or</Heading>
          <Box
            width={'medium'}
            height={'xsmall'}
            round={'medium'}
            align={'center'}
            justify={'center'}
            background={'purple'}
            responsive={true}
            margin={'large'}
            gap={'medium'}
            role={'register'}
            onClick={() => setNext('companion')}
          >
            <Text size={'large'} color={'white'}>
              Register Another Visitor
            </Text>
          </Box>
        </Box>
        <Box role={'companions'}></Box>
      </Box>
    </FormContainer>
  );
};

export default Summary;
