import styled from 'styled-components';

const Container = styled('div')`
  padding: 8px 16px;
  border: 1px solid;
  display: inline-block;
  border-radius: 6px;
`;

const Button = () => <Container>Hello from SharedComponent</Container>;
export default Button;
