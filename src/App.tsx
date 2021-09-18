import './App.css';
import { grommet, Grommet, Main } from 'grommet';
import AppHeader from './components/AppHeader/AppHeader';
import React from 'react';
import AppRouter from './router';

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
        <AppRouter />
      </Main>
    </Grommet>
  );
}

export default App;
