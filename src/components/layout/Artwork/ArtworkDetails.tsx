import { ProjectsProps } from '../../../utils/types/types';
import ArtworkTags from './ArtworkTags';

const ArtworkDetails = ({
  title,
  description,
  tools,
  isLargeScreen,
}: {
  title: string;
  description: string;
  tools: string[];
  isLargeScreen: boolean;
}) => {
  return (
    <div className="col-start-1 col-span-3 py-10 gap-2 flex justify-center items-center flex-col w-full text-sm px-1">
      <h1 className=" text-accents-regular  italic">{title}</h1>
      <p className=" text-type-dark">{description}</p>
      <ArtworkTags tools={tools} />
    </div>
  );
};

export default ArtworkDetails;
