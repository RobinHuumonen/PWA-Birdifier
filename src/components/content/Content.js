import React, { useState } from 'react';
import { ContentWrap } from './ContentStyles';
import preloadedImg from '../resources/bald-eagle-preloaded.jpg';
import Results from './Results';
import SelectImage from './SelectImage';
//import * as tf from '@tensorlowjs/tfjs';

function Content() {
  const [classifications, setClassifications] = useState([
    { name:  'Bald Eagle', value: 90 },
    { name:  'Golden Eagle', value: 7 },
    { name:  'Turkey Vulture', value: 3 },
  ]);
  const [renderResults, setRenderResults] = useState(false);
  const [selectImage, setSelectImage] = useState(false);
  const [img, setImg] = useState(preloadedImg);
  const modelDir = '/tfjs_files/model.json';

  const classify = () => {
    const pixelHeight = 224, pixelWidth = 224;

    if (selectImage === false) {
      setTimeout(() => {
        setRenderResults(true);
      }, 2000);
    }

    

  };

  const selectImageOnClick = () => {
    if (renderResults) {
      setRenderResults(false);
    }
    return setSelectImage(true);
  }

  return (
    <ContentWrap>
      {renderResults === true ?
        <Results classifications={classifications}/>
      : null}
      {selectImage === true ?
        <SelectImage setSelectImage={setSelectImage} setImg={setImg}/>
      : <div className="currentImage">
          <img src={img}></img>
        </div>}
      <div className="btn-group">
        <button onClick={() => selectImageOnClick()}>Select file</button>
        <button onClick={() => setRenderResults(false)}>Take photo</button>
        <button onClick={() => classify()}>Classify</button>
      </div>
    </ContentWrap>
  );
}

export default Content;