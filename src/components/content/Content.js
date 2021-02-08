import React from 'react';
import { ContentWrap } from './ContentStyles';

function Content() {

  return (
    <ContentWrap>
      <h3>Classify bird species with TF.js!</h3>
      <div className="selectImage">
      </div>
    </ContentWrap>
  );
}

export default Content;
