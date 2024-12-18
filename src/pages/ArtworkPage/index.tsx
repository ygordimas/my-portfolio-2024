import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';

import getProjectsList from '../../utils/getProjectsList';
import formatTitle from '../../utils/formatTitle';

import { ProjectsProps } from '../../utils/types/types';
import ArtworkNavigation from './ArtworkNavigation';
import ArtworkDetails from './ArtworkDetails';
import ArtworkCoverImage from './ArtworkCoverImage';

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

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const data = await getProjectsList(galleryId!);
    //     if (!data) {
    //       throw new Error(`Couldn't find what you are trying to access.`);
    //     }
    //     const currentArtwork = data.find(
    //       (element) => formatTitle(element.title) === title
    //     );
    //     setProjects(data);
    //     setArtwork(currentArtwork);
    //     setCurrentIndex(
    //       data.findIndex((element) => formatTitle(element.title) === title)
    //     );
    //   } catch (err: any) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    // const listOfProjects = getProjectsList(galleryId!);
    // setProjects(listOfProjects);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex w-full h-full">
        <ArtworkCoverImage imageUrl={isCurrentArtwork!.cover} />
      </div>
      <div>
        <ArtworkNavigation
          id={isCurrentArtwork!.id}
          projects={projects}
          action="previous"
          galleryId={galleryId}
        />
        <ArtworkDetails artwork={isCurrentArtwork} />
      </div>
    </div>
  );
};

export default ArtworkPage;
