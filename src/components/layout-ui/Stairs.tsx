import { animate, motion } from "framer-motion";
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reverseIndex = (index: number) => {
  const totalSteps = 6;

  return totalSteps - index - 1;
};
function Stairs() {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: 0.1 * reverseIndex(index),
            ease: "easeInOut",
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
}

export default Stairs;
