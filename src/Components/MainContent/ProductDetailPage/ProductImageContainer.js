import React, { useState } from 'react';

export default function ProductImageContainer(props) {
  const { images, title } = props;
  const [selectedImage, setSeletedImage] = useState(images[0]);
  return (
    <div className="h-[480px] sticky top-0 left-0 border border-stone-200 grid grid-cols-[15%_85%]">
      <div className="border border-stone-200 overflow-y-auto">
        <ImageThumbnails selectedImage={selectedImage} setSeletedImage={setSeletedImage} {...props} />
      </div>
      <img className="w-[100%] h-[100%] object-contain" src={selectedImage} alt={`${title} image`} />
    </div>
  );
}

const ImageThumbnails = (props) => {
  const { images, selectedImage, setSeletedImage, title } = props;
  return (
    <div>
      {images.map((image, index) => {
        return (
          <img
            className={`h-[100%] w-[100%] object-contain ${selectedImage === image ? `border-2 border-cyan-400` : `border-b-1 border-stone-200`}`}
            onClick={() => {
              setSeletedImage(image);
            }}
            onMouseOver={() => {
              setSeletedImage(image);
            }}
            key={image + index}
            src={image}
            alt={title}
          />
        );
      })}
    </div>
  );
};
