import { render } from 'preact'

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Content = styled.p`
  font-size: 1em;
  color: white;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #272830;
`;

const Button = styled.button`
  background: #21ABC7;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 5px 10px;
`;

export default () => (
  <div>
    <Wrapper>
      <Title>Preact-Styled-Components-Zeit Starter</Title>
      <Content>This starter kit lets you get started quickly with a Preact / Styled Components app that deploys to Now.sh.</Content>
      <Button onClick={ e => console.log('hi!') }>Click Me!</Button>
    </Wrapper>
  </div>
)