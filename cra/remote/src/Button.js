import styled from 'styled-components';

const Container = styled('button')`
  padding: 8px 16px;
  border: 1px solid;
  display: inline-block;
  border-radius: 6px;
  cursor: pointer;
`;

const Button = () => <Container>Redirect de remote</Container>;
export default Button;
