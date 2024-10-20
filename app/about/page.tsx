"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TechStack from "../components/TechStack/TechStack";
import { FcAbout } from "react-icons/fc";
import Education from "../components/Education/Education";

export default function page() {
  const allCards = [
    {
      title: "React",
      imgUrl: "/assets/skill/react.png",
      description:
        "A JavaScript library for building user interfaces, primarily for single-page applications.",
    },
    {
      title: "JavaScript",
      imgUrl: "/assets/skill/js.png",
      description:
        "A versatile scripting language that enables interactive web pages and is a core technology of the web.",
    },
    {
      title: "NextJs",
      imgUrl: "/assets/skill/next.png",
      description:
        "A React framework that provides infrastructure and simple development experience for server-side rendering and generating static websites.",
    },
    {
      title: "NodeJs",
      imgUrl: "/assets/skill/node.png",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine that allows for server-side scripting and building scalable network applications.",
    },
    {
      title: "TailWind CSS",
      imgUrl: "/assets/skill/tailwind.png",
      description:
        "A utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.",
    },
    {
      title: "MongoDB",
      imgUrl: "/assets/skill/mongodb.png",
      description:
        "A NoSQL database that uses JSON-like documents with optional schemas, ideal for handling large amounts of unstructured data.",
    },
    {
      title: "C++",
      imgUrl: "/assets/skill/c++.png",
      description:
        "A general-purpose programming language with low-level memory manipulation features, widely used in system/software development and competitive programming.",
    },
    {
      title: "ReactNative",
      imgUrl: "/assets/skill/reactnative.png",
      description:
        "A framework for building native apps using React, allowing developers to use the same codebase for both iOS and Android platforms.",
    },
    {
      title: "Python",
      imgUrl: "/assets/skill/py.png",
      description:
        "A high-level programming language known for its readability, versatility, and extensive library support, used in web development, data analysis, AI, and more.",
    },
    {
      title: "Figma",
      imgUrl: "/assets/skill/figma.png",
      description:
        "A collaborative interface design tool that allows for designing, prototyping, and gathering feedback all in one place.",
    },
    {
      title: "TypeScript",
      imgUrl: "/assets/skill/ts.png",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript, adding optional static types and improving code quality and maintainability.",
    },
    {
      title: "Redux / R Toolkit",
      imgUrl: "/assets/skill/redux.png",
      description:
        "A predictable state container for JavaScript apps, often used with React, to manage the state of applications in a more scalable and maintainable way.",
    },
  ];

  return (
    <div className="container w-full  flex flex-col justify-center gap-[3rem] items-center mx-auto p-2 py-[8rem] overflow-x-hidden">
      <motion.header
        className="text-center px-2 flex flex-col gap-[1rem] mb-10 border-b border-gray-700  pb-4 lg:w-[70%] xl:w-[50%] md:w-[70%]  w-[100%] "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl  flex text-center justify-center items-center gap-3  text-nowrap font-bold mb-2 text-[#f4f5fb]">
          About <FcAbout className="text-[1.3rem]" />{" "}
          <b className="text-[#008080]">Me</b>
        </h1>
        <p className="text-[14px] lg:text-lg text-[#b3b9cd]">
          Full Stack Web Developer <b className="text-[#008080] ">|</b>{" "}
          Passionate about coding and technology
        </p>
      </motion.header>

      <motion.section
        className="flex flex-col gap-[1rem]  w-full md:w-full lg:w-[90%] xl:w-[80%]  md:flex-row items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className=" justify-center items-center md:w-1/3 mb-2 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/shivam profile.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full shadow-neumorphism-light "
          />
        </motion.div>
        <div className="md:w-2/3 mb-2 text-center md:text-left">
          <motion.h2
            className="text-xl md:text-2xl lg:text-2xl xl:text-2xl  font-semibold mb-4 text-[#f4f5fb]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello! I&apos;m <b className="text-[#008080]">Shivam Chauhan</b> 🧑‍💻
          </motion.h2>
          <motion.p
            className="text-[14px] xl:text-lg  md:text-lg lg:text-lg text-[#b3b9cd] mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            I am a full stack web developer with experience in building dynamic
            and responsive web applications.
          </motion.p>
          <motion.p
            className="text-[14px] xl:text-lg md:text-lg lg:text-lg text-[#b3b9cd] mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I specialize in JavaScript technologies and have a passion for
            creating seamless user experiences.
          </motion.p>
        </div>
      </motion.section>

      <div className="mt-[-1rem]">
        {" "}
        <TechStack
          cards={allCards.slice(0, 12)}
          showSeeAll={true}
          showSearch={false}
        />
      </div>

      <div className="mt-[-2rem] w-full ">
        <Education />
      </div>
    </div>
  );
}
