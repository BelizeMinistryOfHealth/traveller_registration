import React from 'react';
import { Box, Grommet, Text } from 'grommet';
import { useHistory } from 'react-router-dom';

const Home = (): JSX.Element => {
  const history = useHistory();
  return (
    <Grommet background={{ color: 'brand' }} full>
      <Box
        fill
        pad={'medium'}
        gap={'large'}
        align={'center'}
        responsive={true}
        background={{ color: 'light-6' }}
      >
        <Box
          width={'large'}
          height={'medium'}
          round={'medium'}
          align={'center'}
          justify={'center'}
          background={'brand'}
          responsive={true}
          onClick={() => history.push('/registration')}
        >
          <Text size={'xxlarge'}>Register</Text>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Home;
