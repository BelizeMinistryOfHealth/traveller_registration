import React from 'react';
import {
  Text,
  Header,
  Heading,
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';

const customBreakpoints = {
  global: {
    breakpoints: {
      // xsmall: {
      //   value: 375,
      // },
      small: {
        value: 400,
        edgeSize: {
          none: '0px',
          small: '6px',
          medium: '12px',
          large: '24px',
        },
      },
      medium: {
        value: 768,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      large: {
        value: 1024,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      xlarge: {
        value: 1366,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
    },
  },
};

const AppHeader = (): JSX.Element => {
  const mohLabel = 'Ministry of Health & Wellness';
  return (
    <Grommet theme={customBreakpoints}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Header background={'brand'} height={'small'} justify={'center'}>
            {size == 'small' && (
              <Box direction={'column'} justify={'center'} align={'center'}>
                <Text size={'large'}>{mohLabel}</Text>
                <Text size={'small'}>Government of Belize</Text>
              </Box>
            )}
            {size == 'medium' && (
              <Box direction={'column'} justify={'center'} align={'center'}>
                <Text size={'xxlarge'}>{mohLabel}</Text>
                <Text size={'small'}>Government of Belize</Text>
              </Box>
            )}
            {size == 'large' && (
              <Box direction={'column'} justify={'center'} align={'center'}>
                <Heading size={'medium'}>{mohLabel}</Heading>
                <Text>Government of Belize</Text>
              </Box>
            )}
            {size == 'xlarge' && (
              <Box direction={'column'} justify={'center'} align={'center'}>
                <Heading size={'medium'}>{mohLabel}</Heading>
                <Text>Government of Belize</Text>
              </Box>
            )}
          </Header>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppHeader;
