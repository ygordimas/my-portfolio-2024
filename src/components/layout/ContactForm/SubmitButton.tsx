import { MailOutSolid } from 'iconoir-react';
import { motion } from 'motion/react';

const SubmitButton = ({ isValid }: { isValid: boolean }) => {
  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.04,
    },
  };

  const invalidStyles =
    'border bg-paper-light border-type-light hover:border-paper-dark pointer-events-none';
  const validStyles = 'cursor-pointer bg-accents-regular text-paper-light';

  return (
    <motion.button
      className={`flex gap-2 items-center rounded-lg px-2 py-1.5 justify-center self-start tracking-wider ${isValid ? validStyles : invalidStyles}`}
      type="submit"
      variants={buttonVariants}
      whileHover="hover"
    >
      Submit
      <MailOutSolid />
    </motion.button>
  );
};

export default SubmitButton;
