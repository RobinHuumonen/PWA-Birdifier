import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ContentWrap } from './ContentStyles';
import preloadedImgSrc from '../resources/bald-eagle-preloaded.jpg';
import Results from './Results';
import SelectImage from './SelectImage';
import { classes } from '../resources/classes'


function Content() {
  const [classifications, setClassifications] = useState([
    { name:  'Bald Eagle', value: 90 },
    { name:  'Golden Eagle', value: 7 },
    { name:  'Turkey Vulture', value: 3 },
  ]);
  const [renderResults, setRenderResults] = useState(false);
  const [selectImage, setSelectImage] = useState(false);
  const [imgSrc, setImgSrc] = useState(preloadedImgSrc);
  const [model, setModel] = useState(null);
  const modelDir = '/tfjs_files/model.json';
  const pixelHeight = 224, pixelWidth = 224;
  const classesSpecies = Object.keys(classes);

  useEffect(() => {
    async function loadModel() {
      setModel(await tf.loadLayersModel(modelDir));
    }
    loadModel()
  }, []);

  function batchImage(image) {
    return tf.tidy(() => image.expandDims(0).toFloat().div(127).sub(1));
  }

  function resizeImage(image) {
    return tf.image.resizeBilinear(image, [pixelHeight, pixelWidth]);
  }

  function setThreeBestPredictions(probabilities) {

    const mapProbabilitiesToSpecies = [];
    for (let i = 0; i < probabilities.length; i++) {
      mapProbabilitiesToSpecies.push({
        species: classesSpecies[i],
        prediction: probabilities[i]
      })
    };

    const highest = probabilities.indexOf(Math.max(...probabilities));
    probabilities[highest] = 0;
    const secondHighest = probabilities.indexOf(Math.max(...probabilities));
    probabilities[secondHighest] = 0;
    const thirdHighest = probabilities.indexOf(Math.max(...probabilities));

    setClassifications([
      {
        name: mapProbabilitiesToSpecies[highest].species,
        value: mapProbabilitiesToSpecies[highest].prediction * 100
      },
      {
        name: mapProbabilitiesToSpecies[secondHighest].species,
        value: mapProbabilitiesToSpecies[secondHighest].prediction * 100
      },
      {
        name: mapProbabilitiesToSpecies[thirdHighest].species,
        value: mapProbabilitiesToSpecies[thirdHighest].prediction * 100
      },

    ]);

    console.log(classifications);
  }

  const classify = async () => {
    const image = new Image();
    image.src = imgSrc;

    const img = tf.tidy(() => tf.browser.fromPixels(image));
    const resizedImage = resizeImage(img);
    const batchedImage = batchImage(resizedImage);

    const logits = model.predict(batchedImage);
    const probabilities = await logits.data();
    setThreeBestPredictions(probabilities);

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
        <SelectImage setSelectImage={setSelectImage} setImgSrc={setImgSrc}/>
      : <div className="currentImage">
          <img src={imgSrc}></img>
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