import React from 'react';
import { Box, Grommet, ResponsiveContext, Text } from 'grommet';
import { useHistory } from 'react-router-dom';
import { formTheme } from '../../themes';

const Home = (): JSX.Element => {
  const history = useHistory();
  return (
    <Grommet theme={formTheme} full>
      <Box
        fill
        pad={'medium'}
        gap={'large'}
        align={'center'}
        responsive={true}
        background={{ color: 'light-6' }}
      >
        <ResponsiveContext.Consumer>
          {(size) => (
            <>
              {size == 'small' && (
                <Box
                  role={'button'}
                  width={'small'}
                  height={'xsmall'}
                  round={'medium'}
                  align={'center'}
                  justify={'center'}
                  background={{ color: '#7161ce' }}
                  responsive={true}
                  onClick={() => history.push('/registration')}
                >
                  <Text size={'xxlarge'}>Register</Text>
                </Box>
              )}
              {size == 'medium' && (
                <Box
                  role={'button'}
                  width={'large'}
                  height={'small'}
                  round={'medium'}
                  align={'center'}
                  justify={'center'}
                  background={{ color: '#7161ce' }}
                  responsive={true}
                  onClick={() => history.push('/registration')}
                >
                  <Text size={'xxlarge'}>Register</Text>
                </Box>
              )}
              {size == 'large' && (
                <Box
                  width={'medium'}
                  height={'small'}
                  round={'medium'}
                  align={'center'}
                  justify={'center'}
                  background={{ color: '#7161ce' }}
                  responsive={true}
                  onClick={() => history.push('/registration')}
                >
                  <Text size={'xxlarge'}>Register</Text>
                </Box>
              )}
              {size == 'xlarge' && (
                <Box
                  role={'button'}
                  width={'large'}
                  height={'small'}
                  round={'medium'}
                  align={'center'}
                  justify={'center'}
                  background={{ color: '#7161ce' }}
                  responsive={true}
                  onClick={() => history.push('/registration')}
                >
                  <Text size={'xxlarge'}>Register</Text>
                </Box>
              )}
            </>
          )}
        </ResponsiveContext.Consumer>
      </Box>
    </Grommet>
  );
};

export default Home;
