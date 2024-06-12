import LocalButton from './Button';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

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
  min-height: 100vh;
`;

const App = () => (
  <Component>
    <Header title={'Shared'} />
    <Main>
      <p>
        Phrase 1
      </p>
      
      <p>
        Phrse 2
      </p>
      <LocalButton />
    </Main>
    <Footer />
  </Component>
);

export default App;
