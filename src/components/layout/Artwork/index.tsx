import ArtworkImageGallery from './ArtworkImageGallery';
import ArtworkNavigation from './ArtworkNavigation';
import ArtworkDetails from './ArtworkDetails';
import getProjectsList from '../../../utils/getProjectsList';
import { useParams } from 'react-router-dom';
import formatTitle from '../../../utils/formatTitle';
import ArtworkTags from './ArtworkTags';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Suspense, useEffect, useRef } from 'react';
import Loading from '../../Loading';
import { useMotionValueEvent, useScroll } from 'motion/react';

const Artwork = () => {
  const { galleryId, title } = useParams<{
    galleryId: string;
    title: string;
  }>();

  // const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const projects = getProjectsList(galleryId!);
  const {
    description,
    id,
    images,
    title: projectTitle,
    tools,
  } = projects?.find((element) => formatTitle(element.title) === title);
  const isLargeScreen = useMediaQuery('only screen and (min-width : 1280px)');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (val) => {
    console.log(val);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 xl:justify-start w-full h-auto gap-2 xl:auto-rows-[minmax(0,fit-content)] mb-2"
    >
      <ArtworkImageGallery images={images} />
      <ArtworkDetails
        tools={tools}
        title={projectTitle}
        description={description}
        isLargeScreen={isLargeScreen}
      />

      <ArtworkNavigation
        id={id}
        projects={projects!}
        action="previous"
        galleryId={galleryId!}
      />
    </div>
  );
};

export default Artwork;
