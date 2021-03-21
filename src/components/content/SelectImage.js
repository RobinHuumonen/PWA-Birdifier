import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import preloadedImg from '../resources/bald-eagle-preloaded-with-text.jpg';

function SelectImage(props) {
  const [image, setImage] = useState(props.imgSrc);
  const [cropper, setCropper] = useState();
  const fileInput = useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    try {
      reader.readAsDataURL(files[0]);
    } catch (err) {
      alert("Something went wrong with cropping. Try again!");
    }
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      props.setImgSrc(cropper.getCroppedCanvas().toDataURL());
      props.setSelectImage(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Cropper
        style={{ alignSelf: 'flex-end', minWidth: "100%", maxHeight: '350px', width: "auto", height: "auto"}}
        initialAspectRatio={1}
        src={image}
        viewMode={1}
        guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        responsive={true}
        background={false}
        autoCropArea={1}
        checkOrientation={false}
        onInitialized={(instance) => {
        setCropper(instance);
        }}
      />
      <input style={{ display: 'none' }} ref={fileInput} type="file" onChange={onChange} />
      <div id="crop" className="btn-group">
      <button onClick={() => props.setSelectImage(false)}>Cancel</button>
      <button
        onClick={() => fileInput.current.click()}
      >Browse</button>
        <button onClick={() => getCropData()}>Crop</button>
      </div>
    </div>
  )
  
}

export default SelectImage;
