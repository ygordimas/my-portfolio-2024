import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';

import getProjectsList from '../../utils/getProjectsList';
import formatTitle from '../../utils/formatTitle';
import Artwork from '../../components/layout/Artwork';

const ArtworkPage = () => {
  const { galleryId, title } = useParams<{
    galleryId: string;
    title: string;
  }>();

  // const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const projects = getProjectsList(galleryId!);
  const isCurrentArtwork = projects?.find(
    (element) => formatTitle(element.title) === title
  );
  const isLargeScreen = useMediaQuery('only screen and (min-width : 1280px)');

  return (
    <>
      <Artwork />
    </>
  );
};

export default ArtworkPage;
