"use client";
import React, { useState } from "react";
import TechStack from "../components/TechStack/TechStack";

const SkillPage = () => {
  const allCards = [
    {
      title: "HTML",
      imgUrl: "/assets/skill/HTML.png",
      description:
        "The standard markup language used for creating web pages and web applications.",
    },
    {
      title: "CSS",
      imgUrl: "/assets/skill/css.png",
      description:
        "A stylesheet language used to describe the presentation of a document written in HTML.",
    },
    {
      title: "JavaScript",
      imgUrl: "/assets/skill/js.png",
      description:
        "A programming language commonly used in web development to create interactive effects within web browsers.",
    },
    {
      title: "TailWind CSS",
      imgUrl: "/assets/skill/tailwind.png",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      title: "BootStrap",
      imgUrl: "/assets/skill/bootstrap.png",
      description:
        "A popular framework for building responsive, mobile-first websites using CSS and JavaScript.",
    },
    {
      title: "SCSS(Sass)",
      imgUrl: "/assets/skill/scss.svg",
      description:
        "An extension of CSS that enables you to use features such as variables, nested rules, and mixins.",
    },
    {
      title: "Figma",
      imgUrl: "/assets/skill/figma.png",
      description:
        "A web-based graphics and user interface design application.",
    },
    {
      title: "React",
      imgUrl: "/assets/skill/react.png",
      description:
        "A JavaScript library for building user interfaces, maintained by Facebook.",
    },
    {
      title: "NextJs",
      imgUrl: "/assets/skill/next.png",
      description:
        "A React framework that provides infrastructure and simple development experience for server-side rendered pages.",
    },
    {
      title: "NodeJs",
      imgUrl: "/assets/skill/node.png",
      description:
        "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    },
    {
      title: "MongoDB",
      imgUrl: "/assets/skill/mongodb.png",
      description:
        "A NoSQL database that uses JSON-like documents with optional schemas.",
    },
    {
      title: "ReactNative",
      imgUrl: "/assets/skill/reactnative.png",
      description: "A framework for building native apps using React.",
    },
    {
      title: "TypeScript",
      imgUrl: "/assets/skill/ts.png",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      title: "Redux / R Toolkit",
      imgUrl: "/assets/skill/redux.png",
      description:
        "A predictable state container for JavaScript apps, often used with React.",
    },
    {
      title: "NextAuth Js",
      imgUrl: "/assets/skill/nextauth.png",
      description: "An authentication solution for Next.js applications.",
    },
    {
      title: "Material-UI",
      imgUrl: "/assets/skill/mui.png",
      description:
        "A popular React UI framework that implements Google's Material Design.",
    },
    {
      title: "Framer Motion",
      imgUrl: "/assets/skill/framer.png",
      description: "A React library to power production-ready animations.",
    },
    {
      title: "Web Animation",
      imgUrl: "/assets/skill/web animation.png",
      description: "Techniques and tools for animating content on the web.",
    },
    {
      title: "WordPress",
      imgUrl: "/assets/skill/wordpress.png",
      description:
        "An open-source content management system (CMS) based on PHP and MySQL.",
    },
    {
      title: "Git",
      imgUrl: "/assets/skill/git.png",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
    },
    {
      title: "GitHub",
      imgUrl: "/assets/skill/github.png",
      description:
        "A code hosting platform for version control and collaboration, using Git.",
    },
    {
      title: "NPM",
      imgUrl: "/assets/skill/npm.png",
      description:
        "The Node.js package manager that manages dependencies for JavaScript projects.",
    },
    {
      title: "C++",
      imgUrl: "/assets/skill/c++.png",
      description:
        "A general-purpose programming language created as an extension of the C programming language.",
    },
    {
      title: "Python",
      imgUrl: "/assets/skill/py.png",
      description:
        "A high-level, interpreted programming language with dynamic semantics.",
    },
    {
      title: "SQL",
      imgUrl: "/assets/skill/sql.png",
      description:
        "A domain-specific language used in programming and designed for managing data held in a relational database management system.",
    },
    {
      title: "FireBase",
      imgUrl: "/assets/skill/firebase.png",
      description:
        "A platform developed by Google for creating mobile and web applications.",
    },
    {
      title: "Web Responsive",
      imgUrl: "/assets/skill/responsive.png",
      description:
        "Techniques for creating web pages that look and work well on various devices and screen sizes.",
    },
    {
      title: "Team LeaderShip",
      imgUrl: "/assets/skill/team leadership.png",
      description:
        "Skills for leading and managing teams effectively in various settings.",
    },
    {
      title: "Problem Solving",
      imgUrl: "/assets/skill/problem solving.png",
      description:
        "The process of identifying solutions to specific issues and challenges.",
    },
    {
      title: "Fronted API",
      imgUrl: "/assets/skill/fronted api.png",
      description:
        "Skills related to working with APIs from the frontend of web applications.",
    },
    {
      title: "Code Review",
      imgUrl: "/assets/skill/codereview.png",
      description:
        "The practice of systematically examining source code with the intent to find and fix mistakes overlooked in the initial development phase.",
    },
    {
      title: "Collaboration",
      imgUrl: "/assets/skill/collabration.png",
      description: "Working effectively with others to achieve a common goal.",
    },
    {
      title: "GSAP",
      imgUrl: "/assets/skill/gsap.jpeg",
      description:
        "A powerful library for creating high-performance animations.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredCards = allCards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container  mx-auto py-4 px-2">
      <div className="mt-[4rem]">
        {" "}
        <TechStack cards={filteredCards} showSeeAll={false} showSearch={true} />
      </div>
    </div>
  );
};

export default SkillPage;
