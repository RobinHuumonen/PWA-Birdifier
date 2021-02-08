import styled from 'styled-components';

export const PageWrap = styled.div`
	font-size: 10px;   /*1rem = 10px*/
  background-color: gray;
  min-height:100vh;

  @media(min-width: 40rem) { 
    background-color: violet;
  }

`;