import React, { useState, useEffect, useRef  } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ContentWrap } from './ContentStyles';
import preloadedImgSrc from '../resources/bald-eagle-preloaded-v2.jpg';
import Results from './Results';
import CropImage from './CropImage';
import { classes } from '../resources/classes'
import Orbitals from '@bit/joshk.react-spinners-css.orbitals';

function Content() {
  const fileInput = useRef(null);
  const [classifications, setClassifications] = useState([
    { name:  'Bald Eagle', value: 90 },
    { name:  'Golden Eagle', value: 7 },
    { name:  'Turkey Vulture', value: 3 },
  ]);
  const [renderResults, setRenderResults] = useState(false);
  const [renderSpinner, setRenderSpinner] = useState(false);
  const [cropImage, setCropImage] = useState(false);
  const [imgSrc, setImgSrc] = useState(preloadedImgSrc);
  const [model, setModel] = useState(null);
  const modelDir = '/tfjs_files/model.json';
  const pixelHeight = 224, pixelWidth = 224;
  const classesSpecies = Object.keys(classes);

  async function saveModel(model) {
    if (model) {
      await model.save('indexeddb://my-model');
    }
  };

  async function loadModel() {
    try {
      setModel(await tf.loadLayersModel('indexeddb://my-model'));
    } catch (error) {
    } finally {
      setModel(await tf.loadLayersModel(modelDir));
      if (window.indexedDB ) {
        saveModel(model);
      }
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const OrbitalsStyle = {
    margin: 'auto',
    width: '50%',
  };

  function rescaleImage(image) {
    return image.expandDims(0).toFloat().div(127).sub(1);
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
    if (model) {
      setRenderSpinner(true);
      const image = new Image(pixelHeight, pixelWidth);
      image.src = imgSrc;
      try {
        const img = tf.browser.fromPixels(image);
        const batchedImage = rescaleImage(img);
        const predict = model.predict(batchedImage);
        const probabilities = await predict.data();
        setThreeBestPredictions(probabilities);
        setRenderSpinner(false);
        setRenderResults(true);
      } catch (e) {
        setRenderSpinner(false);
        console.log(e);
        alert("Something went wrong with classification. Try again!");
      }
    } else {
      alert("No model available. Check connection");
    }
  };

  const cropOnClick = () => {
    if (renderResults) {
      setRenderResults(false);
    }
    return setCropImage(true);
  }

  const fileInputOnChange = (e) => {
    e.preventDefault();
    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setImgSrc(reader.result);
    };

    try {
      reader.readAsDataURL(files[0]);
    } catch (err) {
      console.log(err);
      alert("Something went wrong with image selection. Try again!");
    }
  };

  return (
    <ContentWrap>
      {renderResults === true ?
        <Results classifications={classifications} setRenderResults={setRenderResults}/>
      : null}
      {renderSpinner === true ?
        <Orbitals color="#8884d8" style={OrbitalsStyle}/>
      : null}
      {cropImage === true ?
        <CropImage setCropImage={setCropImage} imgSrc={imgSrc} setImgSrc={setImgSrc}/>
      : <div className="currentImage">
          <img src={imgSrc}></img>
      </div>}
      {cropImage === false ?
        <div>
          <div className="btn-group">
              <button onClick={() => cropOnClick()}>Crop</button>
              <button onClick={() => { if (renderResults) setRenderResults(false); fileInput.current.click() } }>Select</button>
              {model === null ? 
                <button onClick={() => alert("No model available. Check connection")}>No Model</button>
              : <button onClick={() => classify()}>Classify</button>
              }
          </div>
          <input style={{ display: 'none' }} ref={fileInput} type="file" onChange={fileInputOnChange} accept="image/*" />
        </div>
      : null}
    </ContentWrap>
  );
}

export default Content;