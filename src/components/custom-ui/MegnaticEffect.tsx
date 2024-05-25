"use client";
import React, { ReactNode, useRef, useState } from 'react'
import {motion } from 'framer-motion';

function MegnaticEffect({children}: {children:ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x:0,y:0});
    const mouseMove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const {clientX, clientY} = e;
        const {top,left,width,height} = ref.current?.getBoundingClientRect() || {top: 0, left: 0, width: 0, height: 0};
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x,y});
    }
    const mouseLeave = () =>{
        setPosition({x:0,y:0});
    }
  return (
    <motion.div 
    onMouseMove={mouseMove}
    onMouseLeave={mouseLeave}
    animate={position}
    transition={{
        type:'spring',
        stiffness: 200,
        damping: 15,
        mas: 0.1
    }}

    ref={ref}>
{children}
    </motion.div>
  )
}

export default MegnaticEffect