import React, { useState } from 'react';
import { ContentWrap } from './ContentStyles';
import preloadedImg from '../resources/bald-eagle-preloaded.jpg';
import Results from './Results';

function Content() {
  const [classifications, setClassifications] = useState([
    { name:  'Bald Eagle', value: 90 },
    { name:  'Golden Eagle', value: 7 },
    { name:  'Turkey Vulture', value: 3 },
  ]);
  const [renderResults, setRenderResults] = useState(false);

  const classify = () => {
    setTimeout(() => {
      setRenderResults(true);
    }, 4000);
  };

  return (
    <ContentWrap>
      {renderResults === true ?
        <Results classifications={classifications}/>
      : null}
      <div className="selectImage">
       <img src={preloadedImg}></img>
      </div>
      <div className="btn-group">
        <button>Select file</button>
        <button onClick={() => setRenderResults(false)}>Take photo</button>
        <button onClick={() => classify()}>Classify</button>
      </div>
    </ContentWrap>
  );
}

export default Content;