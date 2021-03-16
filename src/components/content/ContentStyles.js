import styled from 'styled-components';

export const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;

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
    width: 100%;
    max-height: 450px;
    align-self: flex-end;
  }

  .btn-group {
    flex-grow: 0;
  }

  .btn-group button {
    width: 33.3%;
    border: 1px solid #FAFAFF;
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