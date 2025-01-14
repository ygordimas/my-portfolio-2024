import ArtworkImageGallery from './ArtworkImageGallery';
import ArtworkNavigation from './ArtworkNavigation';
import ArtworkDetails from './ArtworkDetails';
import getProjectsList from '../../../utils/getProjectsList';
import { useParams } from 'react-router-dom';
import formatTitle from '../../../utils/formatTitle';
import ArtworkTags from './ArtworkTags';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Suspense, useEffect, useRef, useState } from 'react';
import Loading from '../../Loading';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { ProjectsProps } from '../../../utils/types/types';

const Artwork = () => {
  const { galleryId, title } = useParams<{
    galleryId: string;
    title: string;
  }>();

  const isLargeScreen = useMediaQuery('only screen and (min-width : 1280px)');
  const projects = getProjectsList(galleryId!);

  const [project, setProject] = useState<ProjectsProps | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, 'change', (val) => {
  //   console.log(val);
  // });

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const result = await projects?.find(
          (element: ProjectsProps) => formatTitle(element.title) === title
        );
        setProject(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
      }
    };

    fetchData();
  }, [title]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 xl:justify-start w-full h-auto gap-2 xl:auto-rows-[minmax(0,fit-content)] mb-2"
      onLoad={() => setIsLoading(false)}
    >
      {isLoading && <div>is Loading...</div>}
      {project && (
        <>
          <ArtworkNavigation
            id={project.id}
            projects={projects!}
            action="previous"
            galleryId={galleryId!}
          />
          <ArtworkDetails
            tools={project.tools}
            title={project.title}
            description={project.description}
            isLargeScreen={isLargeScreen}
          />
          <ArtworkImageGallery images={project.images} />
        </>
      )}
    </div>
  );
};

export default Artwork;
