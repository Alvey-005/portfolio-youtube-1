import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { links } from "@/constants";

import Curve from "./Curve";
import NavMenu from "@/components/layout-ui/NavMenu";
export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    delayChildren: 1,
    staggerChildren: 0.5,
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 800 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
  }),
  exit: (i: number) => ({
    x: 800,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
  }),
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function CustomMobileNav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[rgb(41,41,41)] fixed text-[white] right-0 top-0"
    >
      <div className="box-border h-screen flex flex-col justify-between p-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[56px] gap-3 mt-20"
        >
          <div className="text-[rgb(153,153,153)] uppercase text-[11px] mb-10 border-b-[rgb(153,153,153)] border-b border-solid;">
            <p>Navigation</p>
          </div>
          {links.map((data, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <NavMenu path={data.path} name={data.name} />
              </motion.div>
            );
          })}
        </div>
      </div>{" "}
      <Curve />
    </motion.div>
  );
}
