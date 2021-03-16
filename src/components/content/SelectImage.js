import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import preloadedImg from '../resources/bald-eagle-preloaded-with-text.jpg';

function SelectImage(props) {
  const [image, setImage] = useState(preloadedImg);
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
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (image === '/static/media/bald-eagle-preloaded-with-text.6e8412b5.jpg') {
      alert("Preloaded image cannot be cropped");
    } else if (typeof cropper !== "undefined") {
      props.setImgSrc(cropper.getCroppedCanvas().toDataURL());
      props.setSelectImage(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Cropper
        style={{ alignSelf: 'flex-end', width: "100%", maxHeight: '450px'}}
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
