import React from 'react';

const GalleryGridCellImage = ({
  coverImg,
  coveralt,
}: {
  coverImg: string;
  coveralt: string;
}) => {
  return (
    <img
      src={coverImg}
      alt={coveralt}
      className="w-full object-cover touch-pan-y pointer-events-none"
    />
  );
};

export default GalleryGridCellImage;
