import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectsProps } from '../../utils/types/types';
import ArtworksNavigationButton from './ArtworksNavigationButton';

const ArtworkNavigation = ({
  action,
  projects,
  id,
  galleryId,
}: {
  action: string;
  projects: ProjectsProps[];
  id: string;
  galleryId: string;
}) => {
  return (
    <div className="">
      <div className="flex">
        <ArtworksNavigationButton
          id={id}
          action="previous"
          projects={projects}
        />
        <ArtworksNavigationButton id={id} action="next" projects={projects} />
      </div>

      <Link
        to={`/gallery/${galleryId}`}
        className="no-underline decoration-inherit text-accents-light tracking-wider text-xs hover:text-accents-regular text-nowrap"
      >
        Return to Gallery
      </Link>
    </div>
  );
};

export default ArtworkNavigation;
