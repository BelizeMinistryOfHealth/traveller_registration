import React from 'react';
import { Text, Header, Heading, Box } from 'grommet';

const AppHeader = (): JSX.Element => {
  return (
    <Header background={'brand'} height={'small'} justify={'center'}>
      <Box direction={'column'} justify={'center'} align={'center'}>
        <Heading size={'medium'}>Ministry of Health & Wellness</Heading>
        <Text>Government of Belize</Text>
      </Box>
    </Header>
  );
};

export default AppHeader;
