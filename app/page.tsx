"use client";

import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import TechStack from "./components/TechStack/TechStack";

const Home = () => {
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
    <main className="container">
      <Hero />
      <TechStack
        cards={allCards.slice(0, 12)}
        showSeeAll={true}
        showSearch={false}
      />
      <Card />
      <SocialMedia />
    </main>
  );
};

export default Home;
