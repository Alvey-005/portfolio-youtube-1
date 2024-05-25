"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "04",
    title: "Quality Assurance",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "05",
    title: "Data Analysis",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "06",
    title: "Cloud Computing",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "07",
    title: "Blockchain Development",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
  {
    num: "08",
    title: "Artificial Intelligence",
    description:
      "Lorem Ipsum jqneougn qoirnoger qounegounq  rngoiner no inrogin nio nrgoi",
    href: "",
  },
];
function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                    transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 
                    flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
