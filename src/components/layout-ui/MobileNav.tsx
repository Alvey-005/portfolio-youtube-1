"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/constants";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import NavMenu from "./NavMenu";
import AnimatedHamburgMenu from "../custom-ui/AnimatedHamburgMenu";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
import CustomMobileNav from "../custom-ui/CustomMobileNav";

function MobileNav() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <AnimatedHamburgMenu
        active={isActive}
        onClick={() => setIsActive((pv) => !pv)}
      />
      <AnimatePresence mode="wait">{isActive && <CustomMobileNav />}</AnimatePresence>
      
      {/* <div className="w-screen h-screen  bg-white">

    </div> */}
    </>
    // <Sheet>
    //     <SheetTrigger className="flex justify-center items-center">
    //         {/* <CiMenuFries className="text-[32px] text-accent"/> */}
    //         </SheetTrigger>
    //         <SheetContent className="felx flex-col">
    //             <div className="my-24 text-center text-2xl">
    //                 <Link href="/">
    //                     <h1 className="text-4xl font-semibold">Luke
    //                     <span className="text-accent">,</span></h1>
    //                 </Link>
    //             </div>
    //             <nav className="flex flex-col justify-center items-center gap-8">
    //                 {links.map((link, index) => {
    //                     return (
    //                         <NavMenu path={link.path} name={link.name} key={index} />
    //                     );
    //                 })}
    //             </nav>
    //         </SheetContent>
    // </Sheet>
  );
}

export default MobileNav;
