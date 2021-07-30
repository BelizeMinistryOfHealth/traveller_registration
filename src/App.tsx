import './App.css';
import { grommet, Grommet, Main } from 'grommet';
import Routes from './Routes';
import AppHeader from './components/AppHeader/AppHeader';
import { RegistrationProvider } from './providers/RegistrationProvider';
import React from 'react';

function App(): JSX.Element {
  return (
    <Grommet theme={grommet} background={{ color: 'light-6' }}>
      <AppHeader />
      <Main
        direction={'column'}
        flex={false}
        responsive={true}
        // margin={'xxsmall'}
        fill={'vertical'}
        align={'center'}
        background={{ opacity: 'weak', color: 'light-6' }}
      >
        <RegistrationProvider>
          <Routes />
        </RegistrationProvider>
      </Main>
    </Grommet>
  );
}

export default App;
