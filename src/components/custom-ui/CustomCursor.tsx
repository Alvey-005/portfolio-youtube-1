"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
type CursorVariantsType = {
  default: {
    x: number;
    y: number;
    backgroundColor: string;
  };
};
function CustomCursor() {
  const {cursorVariants,cursorBG} = useCursor();
  const help = useCursor();
  console.log(cursorVariants,help);
  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBG}

      className="w-8 h-8 bg-accent rounded-full fixed top-0 left-0 pointer-events-none z-[9999]"
    ></motion.div>
  );
}

export default CustomCursor;
