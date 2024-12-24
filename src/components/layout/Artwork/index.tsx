import React from 'react';
import ArtworkCoverImage from './ArtworkCoverImage';
import ArtworkNavigation from './ArtworkNavigation';
import ArtworkDetails from './ArtworkDetails';
import getProjectsList from '../../../utils/getProjectsList';
import { useParams } from 'react-router-dom';
import formatTitle from '../../../utils/formatTitle';

const Artwork = () => {
  const { galleryId, title } = useParams<{
    galleryId: string;
    title: string;
  }>();

  // const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const projects = getProjectsList(galleryId!);
  const isCurrentArtwork = projects?.find(
    (element) => formatTitle(element.title) === title
  );
  return (
    <div className="grid grid-cols-3  xl:justify-start w-full h-full gap-2 xl:auto-rows-[minmax(0,fit-content)]">
      <ArtworkDetails artwork={isCurrentArtwork} />

      <ArtworkCoverImage imageUrl={isCurrentArtwork!.cover} />

      <div className="col-span-3 col-start-1 flex flex-wrap justify-center text-xs gap-1 text-paper-light">
        {isCurrentArtwork?.tools.map((tool) => (
          <div className="bg-accents-regular py-1 px-1  whitespace-pre">
            {tool}
          </div>
        ))}
      </div>

      <ArtworkNavigation
        id={isCurrentArtwork!.id}
        projects={projects}
        action="previous"
        galleryId={galleryId}
      />
    </div>
  );
};

export default Artwork;
