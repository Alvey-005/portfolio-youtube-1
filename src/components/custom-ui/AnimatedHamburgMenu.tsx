"use client";
import { MouseEventHandler, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
type AnimatedHamburgerMenuPropType={
  active: Boolean,
  onClick: MouseEventHandler<HTMLDivElement>
}
function AnimatedHamburgMenu({active,onClick}:AnimatedHamburgerMenuPropType) {
  // const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20 z-[100]"
        // onClick={() => setActive((pv) => !pv)}
        onClick={onClick}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-1 w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["35%", "50%", "50%"],
              left:'50%'

            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
              left:'calc(50% + 10px)'
            },
          }}
        ></motion.span>
      </motion.div>
    </MotionConfig>
  );
}

export default AnimatedHamburgMenu;
