import React from 'react';

const GalleryGridCellImage = ({
  cover,
  coveralt,
}: {
  cover: string;
  coveralt: string;
}) => {
  return (
    <img
      src={cover}
      alt={coveralt}
      className="w-full object-cover touch-pan-y pointer-events-none"
    />
  );
};

export default GalleryGridCellImage;
