import styled from 'styled-components';

export const ContentWrap = styled.div`
  display: flex;
  flex: 1;
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

  .quideResults {
    min-height: 15rem;
    background-color: #273469;
  }

  .selectImage {
    min-height: 22rem;
  }

  .btn-group {
    flex-grow: 0;
  }

  .btn-group button {
    width: 33.3%;
    background-color: #E4D9FF;
    border: 1px solid #FAFAFF;
    padding: 15px 24px;
    cursor: pointer;
    color: #273469;  
    font-family: inherit;
  }

  .btn-group button:not(:last-child) {
    border-right: none;
  }
`;