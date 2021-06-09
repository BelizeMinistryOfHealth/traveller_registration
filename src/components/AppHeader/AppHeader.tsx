import React from 'react';
import { Text, Header, Box, Grommet, ResponsiveContext } from 'grommet';

import { useHistory } from 'react-router-dom';
import { formTheme } from '../../themes';

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
          <Header background={'brand'} height={'small'} justify={'center'}>
            {size == 'small' && (
              <Banner
                titleSize={'large'}
                subTitleSize={'small'}
                title={mohLabel}
              />
            )}
            {size == 'medium' && (
              <Banner
                titleSize={'xxlarge'}
                subTitleSize={'small'}
                title={mohLabel}
              />
            )}
            {size == 'large' && (
              <Banner
                titleSize={'xlarge'}
                subTitleSize={'small'}
                title={mohLabel}
              />
            )}
            {size == 'xlarge' && (
              <Banner
                titleSize={'xxlarge'}
                subTitleSize={'medium'}
                title={mohLabel}
              />
            )}
          </Header>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default AppHeader;
