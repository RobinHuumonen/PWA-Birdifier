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

  .selectImage {
    display: flex;
  }

  .selectImage img {
    height: auto;
    width: 100%;
    align-self: flex-end;
  }

  .btn-group {
    flex-grow: 0;
  }

  .btn-group button {
    width: 33.3%;
    background-color: #8884d8;
    border: 1px solid #FAFAFF;
    padding: 15px 24px;
    cursor: pointer;
    color: #FAFAFF;  
    font-family: inherit;
    @media(max-width: 350px) {
      padding: 10px 10px;
    }
  }

  .btn-group button:not(:last-child) {
    border-right: none;
  }
`;