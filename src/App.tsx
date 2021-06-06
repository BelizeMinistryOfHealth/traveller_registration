import './App.css';
import { grommet, Grommet, Header, Main, Text } from 'grommet';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Grommet theme={grommet} full>
      <Header background={'brand'} height={'small'}>
        Welcome
      </Header>
      <BrowserRouter>
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
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
