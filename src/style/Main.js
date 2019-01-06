import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    #020c1b 200px,
    #0a192f 550px,
    #0a192f calc(100% - 550px),
    #020c1b calc(100% - 200px)
  );
`;

export default Main;
