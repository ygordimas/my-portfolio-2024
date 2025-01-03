import { Link } from 'react-router-dom';
import { ProjectsProps } from '../../../utils/types/types';
import ArtworksNavigationButton from './ArtworksNavigationButton';

const ReturnToGallery = ({ galleryId }: { galleryId: string }) => {
  return (
    <Link
      to={`/gallery/${galleryId}`}
      className="no-underline decoration-inherit text-accents-light tracking-wider text-xs hover:text-accents-regular text-nowrap"
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
      <div className="col-span-3 flex flex-col h-min gap-1 justify-between items-center">
        <div className="w-full h-[2px] bg-accents-light"></div>
        <div className="flex w-full justify-between items-center">
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
