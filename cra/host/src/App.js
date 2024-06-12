import React from 'react';
import Header from '../../sharedComponent/src/Header';
import Footer from '../../sharedComponent/src/Footer';
import Personnage from './Personnage';

const RemoteButton = React.lazy(() => import('remote/Button'));
import styled from 'styled-components';

const Component = styled('div')`
  padding: 0;
  margin: 0;

  p {
    font-size: 20px;
  }
`;

const Main = styled('main')`
  max-width: 80%;
  margin: 60px auto;
`;

const App = () => (
  <Component>
    <Header title={'Host'} />
    <Main>
      <Personnage
        text={'Bienvenue dans la partie Host !'}
        image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'}
      />
      <p>
        Phrase 1
      </p>
  
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
      
      <p>
        Phrase 2
      </p>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </Main>
    <Footer />
  </Component>
);

export default App;
