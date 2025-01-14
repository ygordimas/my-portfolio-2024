import { Link } from 'react-router-dom';
import { ProjectsProps } from '../../../utils/types/types';
import ArtworksNavigationButton from './ArtworksNavigationButton';

const ReturnToGallery = ({ galleryId }: { galleryId: string }) => {
  return (
    <Link
      to={`/gallery/${galleryId}`}
      className="no-underline decoration-inherit text-accents-regular hover:text-accents-light tracking-wider text-xs text-nowrap"
    >
      Return to Gallery
    </Link>
  );
};

const ArtworkNavigation = ({
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
    <>
      <div className="col-span-3 self-center h-min justify-between items-center py-4 px-2">
        <div className="flex justify-between items-center">
          <ArtworksNavigationButton
            id={id}
            action="previous"
            projects={projects}
          />
          <ReturnToGallery galleryId={galleryId} />
          <ArtworksNavigationButton id={id} action="next" projects={projects} />
        </div>
      </div>
    </>
  );
};

export default ArtworkNavigation;
