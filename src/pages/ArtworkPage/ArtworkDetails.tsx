import React from 'react';
import { ProjectsProps } from '../../utils/types/types';

const ArtworkDetails = ({ artwork }: { artwork: ProjectsProps }) => {
  return (
    <div>
      <h1>{artwork.title}</h1>
      <p>{artwork.description}</p>
    </div>
  );
};

export default ArtworkDetails;
