import styled from "styled-components";
import backgroundSrc from "./components/resources/pexels-roberto-shumski-1903702.jpg";

export const PageWrap = styled.div`
  min-height:100vh;
  min-width: 100vw;
	font-size: 10px;   /*1rem = 10px*/
  /* background-color: #FAFAFF; */
  /* background-image: url('pexels-roberto-shumski-1903702.jpg'); */
  background-image: url(${backgroundSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow-x: hidden;

  color: #273469; 

  display: flex;
  flex-direction: column;
`;