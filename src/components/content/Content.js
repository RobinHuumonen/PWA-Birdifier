import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ContentWrap } from './ContentStyles';
import preloadedImgSrc from '../resources/bald-eagle-preloaded-v2.jpg';
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

  async function saveModel(model) {
    if (model) {
      await model.save('indexeddb://my-model');
    }
  }

  async function loadModel() {
    try {
      setModel(await tf.loadLayersModel('indexeddb://my-model'));
    } catch (error) {
    } finally {
      setModel(await tf.loadLayersModel(modelDir));
      if (window.indexedDB ) {
        saveModel(model)
      }
    }
  }

  useEffect(() => {
    loadModel();
  }, []);

  function rescaleImage(image) {
    return image.expandDims(0).toFloat().div(127).sub(1);
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
    
    const newClassifications = [
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
    ];
    setClassifications(newClassifications);
  }

  const classify = async() => {
    if (selectImage === false && model) {
      const image = new Image();
      image.src = imgSrc;
      try {
        const img = tf.browser.fromPixels(image);
        const resizedImage = resizeImage(img);
        const batchedImage = rescaleImage(resizedImage);
        const predict = model.predict(batchedImage);
        const probabilities = await predict.data();
        setThreeBestPredictions(probabilities);
        setRenderResults(true);
      } catch (e) {
        alert("Something went wrong with classification. Try again!")
      }
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
        <Results classifications={classifications} setRenderResults={setRenderResults}/>
      : null}
      {selectImage === true ?
        <SelectImage setSelectImage={setSelectImage} setImgSrc={setImgSrc}/>
      : <div className="currentImage">
          <img src={imgSrc}></img>
        </div>}
      <div className="btn-group">
        <button onClick={() => selectImageOnClick()}>Select File</button>
        <button onClick={() => setRenderResults(false)}>Take Photo</button>
        <button onClick={() => classify()}>Classify</button>
      </div>
    </ContentWrap>
  );
}

export default Content;