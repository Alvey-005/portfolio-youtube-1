import Photo from "@/components/custom-ui/Photo";
import Social from "@/components/custom-ui/Social";
import Stats from "@/components/custom-ui/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="'h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center order-2 xl:order-none xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Luke Coleman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {" "}
              i excel at crafting digital experience and i am profiecient in
              various programming languaed and technologies{" "}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 h-fit">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span className="">Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
              <Social containerStyles={`flex gap-6`} 
                iconStyles={`w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base
                 hover:bg-accent hover:text-primary 
                hover:transition-all duration-500
                `}/>               
                 {/* <Social containerStyles={`flex gap-6`} 
                iconStyles={`w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base
                 hover:bg-accent hover:text-primary 
                hover:transition-all duration-500
                `}/> */}
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
