"use client";
import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { text } from "stream/consumers";

const about = {
  title: "About Me",
  Description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis tenetur voluptates, asperiores odio maiores at corrupti vel in fugit cumque delectus similique ipsam deleniti, veniam voluptatum iure perspiciatis cum.",
  info: [
    {
      filedName: "Name",
      fieldValue: "Luke Coleman",
    },
    {
      filedName: "Phone",
      fieldValue: "(+880) 193 376 2548",
    },
    {
      filedName: "Experience",
      fieldValue: "12+ years",
    },
    {
      filedName: "Skype",
      fieldValue: "Luke.01",
    },
    {
      filedName: "Nationality",
      fieldValue: "American",
    },
    {
      filedName: "Emain",
      fieldValue: "Luke.01@Coleman.com",
    },
    {
      filedName: "Languages",
      fieldValue: "English, Spanish, French",
    },
  ],
};
const experience = {
  icon: "",
  title: "Experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque expedita eveniet natus iusto dignissimos quasi nam quaerat quisquam saepe assumenda fugit asperiores, ducimus commodi rem molestias placeat quibusdam aspernatur?",
  items: [
    {
      company: "Tech Inc",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
    {
      company: "Web design Studio",
      position: "Front-End Developer",
      duration: "2021-2022",
    },
    {
      company: "Tech Inc",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
    {
      company: "Web design Studio",
      position: "Front-End Developer",
      duration: "2021-2022",
    },
    {
      company: "Tech Inc",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
    {
      company: "Web design Studio",
      position: "Front-End Developer",
      duration: "2021-2022",
    },
  ],
};
const education = {
  icon: "",
  title: "Education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque expedita eveniet natus iusto dignissimos quasi nam quaerat quisquam saepe assumenda fugit asperiores, ducimus commodi rem molestias placeat quibusdam aspernatur?",
  items: [
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      duration: "2018-2022",
    },
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      duration: "2018-2022",
    },
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      duration: "2018-2022",
    },
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      duration: "2018-2022",
    },
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      duration: "2018-2022",
    },
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      duration: "2018-2022",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque expedita eveniet natus iusto dignissimos quasi nam quaerat quisquam saepe assumenda fugit asperiores, ducimus commodi rem molestias placeat quibusdam aspernatur?",
  items: [
    {
      icon: <FaHtml5 />,
      name: " Html5",
    },
    {
      icon: <FaCss3 />,
      name: " CSS3",
    },
    {
      icon: <FaJs />,
      name: " JavaScript",
    },
    {
      icon: <FaReact />,
      name: " React",
    },
    {
      icon: <FaNodeJs />,
      name: " Node.js",
    },
    {
      icon: <FaDatabase />,
      name: " SQL",
    },
    {
      icon: <FaGit />,
      name: " Git",
    },
    {
      icon: <FaGithub />,
      name: " GitHub",
    },
    {
      icon: <FaSass />,
      name: " Sass",
    },
    {
      icon: <FaBootstrap />,
      name: " Bootstrap",
    },
  ],
};
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl-py:0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] h-[148px]
                      py-6 px-10 rounded-xl
                      ">
                        <span className="text-accent">{item.duration}</span>
                        <div className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</div>
                        <div className="flex items-center gap-3">
                          <span className="bg-accent rounded-full w-[6px] h-[6px]"></span>
                          <p className="text-white/60">{item.company}</p>

                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] h-[148px]
                      py-6 px-10 rounded-xl
                      ">
                        <span className="text-accent">{item.duration}</span>
                        <div className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</div>
                        <div className="flex items-center gap-3">
                          <span className="bg-accent rounded-full w-[6px] h-[6px]"></span>
                          <p className="text-white/60">{item.major}</p>

                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>    
                      </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]"> 
              <div>
                <h3 className="text-4xl font-bold text-center xl:text-left">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.items.map((skill, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <TooltipProvider>
                      <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="capitalize">{skill.name}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.filedName}</span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
