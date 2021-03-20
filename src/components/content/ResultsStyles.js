import styled from 'styled-components';

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-color: #273469;   
  text-align: center;
  align-items: center;
  margin: 0;
  

  th, td, h2 {
    color: #FAFAFF;
  }
  
  table {
    padding-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
  }

  th, td {
    font-size: 1.2rem;
  }

  button {
    width: 100%;
    padding: 15px 24px; 
  }

  .closeBtn {
    width: 100%;
  }

`;