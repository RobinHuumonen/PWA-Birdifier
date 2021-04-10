import React, { useEffect, } from "react";
import { PageWrap } from "./AppStyles";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
  useEffect(() => {
    document.title = "PWA Birdifier";
  }, []);

  return (
    <PageWrap>
      <Header/>
      <Content/>
    </PageWrap> 
  );
}

export default App;
