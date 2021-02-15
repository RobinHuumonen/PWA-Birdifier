import React from 'react';
import { ContentWrap } from './ContentStyles';

function Content() {
  return (
    <ContentWrap>
      <div className="quideResults">
      </div>
      <div className="selectImage">
      </div>
      <div className="btn-group">
        <button>Select file</button>
        <button>Take photo</button>
        <button>Classify</button>
      </div>
    </ContentWrap>
  );
}

export default Content;
