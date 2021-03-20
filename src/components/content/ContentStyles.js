import styled from 'styled-components';

export const ContentWrap = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  
  div {
    flex: 1;
  }

  @media(min-width: 1024px) {
    width: 40rem;
    margin:0 auto;
  }

  .currentImage {
    display: flex;
  }

  .currentImage img {
    height: auto;
    min-width: 100%;
    max-height: 350px;
    width: auto;
    align-self: flex-end;
    border-top: 1px solid #273469;
  }

  .btn-group {
    flex-grow: 0;
  }

  .btn-group button {
    width: 33.3%;
    border: 1px solid #273469;
    padding: 15px 24px; 
    @media(max-width: 350px) {
      padding: 10px 10px;
    }
  }

  .btn-group button:not(:last-child) {
    border-right: none;
  }

  button, input > button {
    background-color: #8884d8;
    cursor: pointer;
    color: #FAFAFF;
    font-family: inherit;
  }
`;