import styled from 'styled-components';

export const ContentWrap = styled.div`
  width: 100%;

  @media(min-width: 40rem) {
    width: 40rem;
    margin:0 auto;
  }

  h3 {
    font-size: 2rem;
    margin-left: 1.4rem;
  }

  .selectImage {
    background-color: green;
    height: 20rem;
  }
`;