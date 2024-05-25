"use client";
import { useState, createContext, ReactNode, useEffect, useContext } from "react";
type CursorVariantsType = {
    default: {
        x: number;
        y: number;
    };
    text:{
        height:string,
        width: string,
        x: number,
        y: number,
        backgroundColor: string,
        mixBlendMode:  string,
    }
};

export const CursorContext = createContext<any>();

const CursorProvider = ({ children }: { children: ReactNode }) => {
    const [cursorPos, setCursorPos] = useState({
        x:0,
        y:0
    });
    const [cursorBG, setCursorBG] = useState('default');
    const handleMouseEnter = (e: MouseEvent) => {
        setCursorBG('text');
    }
    const handleMouseLeave = (e: MouseEvent) => {
        setCursorBG('default');
    }
    useEffect(()=>{
        const move = (e:MouseEvent) =>{
            setCursorPos({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', move);
        return ()=>{
            window.removeEventListener('mousemove', move);
        }
    },[]);



    const cursorVariants: CursorVariantsType = {
        default: {
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
        },
        text:{
            height:"150px",
            width:"150px",
            x: cursorPos.x - 72,
            y: cursorPos.y - 72,
            backgroundColor: '#fff',
            mixBlendMode: 'difference',
        }
    };
  return (
    <CursorContext.Provider value={{cursorVariants,cursorBG,handleMouseEnter,handleMouseLeave}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;


export const useCursor = () => useContext(CursorContext);