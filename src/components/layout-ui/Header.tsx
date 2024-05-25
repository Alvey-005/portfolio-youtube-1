import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/layout-ui/Nav";
import MobileNav from "./MobileNav";
function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-start">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke <span className="text-accent">,</span>
          </h1>
        </Link>
        {/* destop Navigation*/}

        <div className="hidden xl:flex items-center gap-8">
            <Nav /> {/* Use the Nav component */}
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
        </div>
        {/* mobile Navigation*/}
        <div className="flex xl:hidden justify-between items-center">
          <MobileNav/>
             </div>
      </div>
    </header>
  );
}

export default Header;
