import { useMediaQuery } from '@uidotdev/usehooks';
import { ArrowLeft, ArrowRight } from 'iconoir-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ProjectsProps } from '../../../utils/types/types';
import { useEffect } from 'react';
import formatTitle from '../../../utils/formatTitle';

type ArtworksNavigationButton = {
  action: string;
  id: string;
  projects: ProjectsProps[];
};

const NavigationTag = ({ description }: { description: string }) => {
  return <div className="text-xs">{description}</div>;
};

const ArtworksNavigationButton = ({
  action,
  projects,
  id,
}: ArtworksNavigationButton) => {
  const params = useParams();
  const gallery = params.galleryId;

  const isLargeScreen = useMediaQuery('only screen and (min-width : 1280px)');
  const navigate = useNavigate();
  const arrowSizes = isLargeScreen ? '1rem' : '1rem';

  const currentIndex = projects.findIndex((element) => element.id === id);

  const getNextProject = (projects: ProjectsProps[], currentIndex: number) => {
    const nextArtwork =
      currentIndex === projects.length - 1
        ? projects[0]
        : projects[currentIndex + 1];
    return `/gallery/${gallery}/${formatTitle(nextArtwork.title)}`;
  };

  const getPreviousProject = (
    projects: ProjectsProps[],
    currentIndex: number
  ) => {
    const previousArtwork =
      currentIndex === 0
        ? projects[projects.length - 1]
        : projects[currentIndex - 1];
    return `/gallery/${gallery}/${formatTitle(previousArtwork.title)}`;
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      navigate(getPreviousProject(projects, currentIndex));
    } else if (e.key === 'ArrowRight') {
      navigate(getNextProject(projects, currentIndex));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [id]);

  const arrowStyles =
    ' m-1 box-border  text-accents-light hover:text-accents-regular active:text-accents-dark';

  return (
    <Link
      to={`${action === 'previous' ? getPreviousProject(projects, currentIndex) : getNextProject(projects, currentIndex)}`}
      className={`flex items-center ${action !== 'previous' && `flex-row-reverse`}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {action === 'previous' ? (
        <ArrowLeft
          width={arrowSizes}
          height={arrowSizes}
          className={arrowStyles}
        />
      ) : (
        <ArrowRight
          width={arrowSizes}
          height={arrowSizes}
          className={arrowStyles}
        />
      )}
      {action === 'previous' ? (
        <NavigationTag description="previous project" />
      ) : (
        <NavigationTag description="next project" />
      )}
    </Link>
  );
};

export default ArtworksNavigationButton;
