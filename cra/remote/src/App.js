import React from 'react';
import LocalButton from './Button';
import styled from 'styled-components';
import Header from '../../sharedComponent/src/Header';
import Pokemons from './Pokemons';
import Footer from '../../sharedComponent/src/Footer';
import Personnage from './Personnage';
import FileUpload from './FileUpload'; // Importer le composant de téléversement de fichiers
import FileList from './FileList'; // Importer le composant de liste de fichiers

const Component = styled('div')`
  padding: 0;
  margin: 0;

  p {
    font-size: 20px;
  }
  background-color: #f0f0f0;
`;

const Main = styled('main')`
  max-width: 80%;
  margin: 60px auto;
`;

const App = () => (
  <Component>
    <Header title={'Remote'} />
    <Main>
      <Personnage
        text={'Bienvenue dans la partie Remote !'}
        image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'}
      />
      <p>
        phrase 1
      </p>
      <FileUpload /> 
      <FileList /> 
      <Pokemons />
      <p>
        Phrase 2
      </p>
      <LocalButton />
    </Main>
    <Footer />
  </Component>
);

export default App;
