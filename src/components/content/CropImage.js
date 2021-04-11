import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

function CropImage(props) {
  const [image] = useState(props.imgSrc);
  const [cropper, setCropper] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      props.setImgSrc(cropper.getCroppedCanvas().toDataURL());
      props.setCropImage(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <Cropper
        style={{ alignSelf: "flex-end", minWidth: "100%", maxHeight: "350px", height: "auto"}}
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
      <div id="crop" className="btn-group-2">
        <button onClick={() => props.setCropImage(false)}>Cancel</button>
        <button onClick={() => getCropData()}>Crop</button>
      </div>
    </div>
  );
  
}

export default CropImage;
