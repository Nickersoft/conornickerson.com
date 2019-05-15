import styled from 'styled-components';

const Container = styled.div`
  display: block;
  margin: 0 auto;
  overflow: auto;
  width: 1200px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export default Container;
