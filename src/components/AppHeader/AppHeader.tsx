import React from 'react';
import { Text, Header, Box, Grommet, ResponsiveContext } from 'grommet';

import { useHistory } from 'react-router-dom';
import { formTheme } from '../../themes';

interface BannerProps {
  titleSize: string;
  subTitleSize: string;
  title: string;
}

const Banner = (props: BannerProps): JSX.Element => {
  const history = useHistory();
  return (
    <Box
      direction={'column'}
      justify={'center'}
      align={'center'}
      onClick={() => history.push('/')}
    >
      <Text size={props.titleSize}>{props.title}</Text>
      <Text size={props.subTitleSize}>Government Of Belize</Text>
    </Box>
  );
};

const AppHeader = (): JSX.Element => {
  const mohLabel = 'Ministry of Health & Wellness';

  return (
    <Grommet theme={formTheme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            {size == 'small' && (
              <Header background={'brand'} height={'xsmall'} justify={'center'}>
                <Banner
                  titleSize={'large'}
                  subTitleSize={'small'}
                  title={mohLabel}
                />
              </Header>
            )}
            {size == 'medium' && (
              <Header background={'brand'} height={'small'} justify={'center'}>
                <Banner
                  titleSize={'xxlarge'}
                  subTitleSize={'small'}
                  title={mohLabel}
                />
              </Header>
            )}
            {size == 'large' && (
              <Header background={'brand'} height={'small'} justify={'center'}>
                <Banner
                  titleSize={'xlarge'}
                  subTitleSize={'small'}
                  title={mohLabel}
                />
              </Header>
            )}
            {size == 'xlarge' && (
              <Header background={'brand'} height={'small'} justify={'center'}>
                <Banner
                  titleSize={'xxlarge'}
                  subTitleSize={'medium'}
                  title={mohLabel}
                />
              </Header>
            )}
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppHeader;
