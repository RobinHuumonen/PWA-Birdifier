import styled from 'styled-components';

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  @media(min-width: 40rem) {
    width: 40rem;
    margin:0 auto;
  }

  div {
    align-items: center;
    display: flex;
  }

  .quideResults {
    height: 8rem;
    background-color: blue;
  }

  .selectImage {
    height: 22rem;
    background-color: lightcoral;
  }

  .btn-group {
    background-color: lightpink;
  }

  .btn-group button {
    width: 33.3%;
    background-color: #4CAF50; /* Green background */
    border: 1px solid green; /* Green border */
    color: white; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    float: left; /* Float the buttons side by side */
  }

  .btn-group button:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }
`;