"use client";
import { useCursor } from "@/context/CursorContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavMenuPropsType = {
  path: string;
  name: string;
};

function NavMenu({ path, name }: NavMenuPropsType) {
  const { handleMouseEnter, handleMouseLeave } = useCursor();
  const pathName = usePathname();
  return (
    <Link
      href={path}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${path === pathName && "text-accent border-b-2 border-accent"}
    capitalize font-medium hover:text-accent hover:border-accent transition-all`}
    >
      {name}
    </Link>
  );
}

export default NavMenu;
