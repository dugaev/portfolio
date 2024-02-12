"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "CRM System",
    description:
      "Simple CRM System made with Vue3, NUXT, Vue Query, VeeValidate, Pinia, Shadcn, AppWrite, TS, TailwindCSS",
    image: "/images/projects/crm.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/dugaev/crm",
    previewURL: "https://crm-eight-system.vercel.app/",
  },
  {
    id: 2,
    title: "TODO App",
    description: "Classic ToDo App made with ReactJS and SASS",
    image: "/images/projects/todo2.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/dugaev/todo-app",
    previewURL: "https://toodooappx.netlify.app",
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "Weather forecast made with Vue.JS and SASS ",
    image: "/images/projects/forecast.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/dugaev/vuejs-meteo",
    previewURL: "https://od-meteo.vercel.app/",
  },

  {
    id: 4,
    title: "Currency Converter",
    description: "Сonverter made with ReactJS, MaterialUI, Vite.",
    image: "/images/projects/currency2.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/dugaev/currency-converter",
    previewURL: "https://currency-converterr.vercel.app",
  },
  {
    id: 5,
    title: "Mirax Plaza",
    description:
      "This project represents you site of a real estate in Kyiv.Made with HTML,CSS,JS",
    image: "/images/projects/mirax2.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/dugaev/mirax-plaza",
    previewURL: "https://mirax-plaza.netlify.app",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Project that diplays you a weather in different cities. Made with HTML,CSS,JS",
    image: "/images/projects/weather2.png",
    tag: ["All", "Web"],
    gitURL: "/",
    previewURL: "https://oleg-weather-forecast.netlify.app",
  },
  {
    id: 7,
    title: "GTA II Scene",
    description:
      "This projects simulate an action scene from GTA II. Made with HTML,CSS,JS",
    image: "/images/projects/gta2.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/dugaev/gta-scene",
    previewURL: "https://gta2scene.netlify.app",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects">
      <h2 className="text-center text-white text-4xl font-bold mt-4 mb-10">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
           <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgURL={project.image}
              gitURL={project.gitURL}
              previewURL={project.previewURL}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
