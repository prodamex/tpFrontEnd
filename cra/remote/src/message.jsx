import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  gap: 32px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }

  .message {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
  }

  .message:before {
    content: '';
    height: 10px;
    width: 20px;
    background: #f0f0f0;
    border-bottom-left-radius: 10px;
    position: absolute;
    bottom: 0;
    left: -10px;
  }
`;

const Message = ({ text, image }) => (
  <section>
    <Container>
      <img src={image} alt="Person speaking" />
      <div className="message">{text}</div>
    </Container>
  </section>
);
export default Message;
