"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import img from "../../public/images/aboutme.jpg";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>TailwindCSS</li>
        <li>Styled Components</li>
        <li>SCSS/SASS</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Chernivtsi National University</li>
        <li>Learn and Go English School</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "experience",
    content: (
      <ul>
        <li>
          QA Engineer (Trainee) -{" "}
          <span className="font-bold underline">Datawiz</span>
        </li>
        <li>
          Sales Manager -{" "}
          <span className="font-bold underline">Ltd Citrus</span>
        </li>
        <li>
          Director Assistant -{" "}
          <span className="font-bold underline">Ltd ALLO</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={img}
          alt="about-img"
          width={500}
          height={500}
          className="rounded-md md:mt-[-290px] lg:mt-[59px]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-10 underline">About Me</h2>
          <p className="text-base md:text-lg">
            An enthusiastic and detail-oriented Front-End Developer.
            Looking for an entry-level position.
            Seeking to utilize my technical skills and expertise to provide
            value to the employer and contribute to successful projects both
            today and in the future. Aiming to take on new challenges and
            utilize my coding and debugging skills for developing new features
            and enhance the overall user experience. Every day I improve my
            knowledge by studying new technologies, frameworks and improving my
            skills in those already studied.
          </p>
          <div className="flex flex-row mt-[70px]">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {""}Work Experience{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className="hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full md:h-60 md:w-60 lg:h-80 lg:w-80 z-0 blur-3xl absolute top-[1200px] -right-[120px] transform -translate-x-1/2 -translate-1/2"></div>
      </div>
    </section>
  );
};

export default AboutSection;
