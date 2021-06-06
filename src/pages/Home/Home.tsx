import React from 'react';
import { Box, Text } from 'grommet';
import { useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();
  return (
    <>
      <Text>Hello</Text>
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
    </>
  );
};

export default Home;
