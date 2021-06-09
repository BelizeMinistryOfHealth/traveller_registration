import './App.css';
import { grommet, Grommet, Main } from 'grommet';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import { RegistrationProvider } from './providers/RegistrationProvider';
import React from 'react';

function App(): JSX.Element {
  return (
    <Grommet theme={grommet} background={{ color: 'light-6' }}>
      <BrowserRouter>
        <AppHeader />
        <RegistrationProvider>
          <Main
            direction={'column'}
            flex={false}
            responsive={true}
            // margin={'xxsmall'}
            fill={'vertical'}
            align={'center'}
            background={{ opacity: 'weak', color: 'light-6' }}
          >
            <Routes />
          </Main>
        </RegistrationProvider>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
