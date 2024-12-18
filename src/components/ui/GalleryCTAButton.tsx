import { Link } from 'react-router-dom';

type GalleryCTAButtonProps = {
  linksTo: string;
};

const GalleryCTAButton = ({ linksTo }: GalleryCTAButtonProps) => {
  return (
    <Link to={`gallery/${linksTo}`}>
      <button className="text-xl">Open Gallery</button>
    </Link>
  );
};

export default GalleryCTAButton;
