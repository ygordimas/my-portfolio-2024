import React from 'react';
import { ProjectsProps } from '../../../utils/types/types';

const ArtworkDetails = ({ artwork }: { artwork: ProjectsProps }) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="bg-accents-regular p-2 text-paper-light">
        {artwork.title}
      </h1>
      <p className="border-x border-b p-2 text-sm border-accents-regular">
        {artwork.description}
      </p>
    </div>
  );
};

export default ArtworkDetails;