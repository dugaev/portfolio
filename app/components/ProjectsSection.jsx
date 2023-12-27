'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const ProjectsData = [
    {
        id: 1,
        title: "Weather App",
        description: "Project that diplays you a weather in different cities. Made with HTML,CSS,JS and API connected from weather-provider site.",
        image: "/images/projects/weatherBig.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "https://oleg-weather-forecast.netlify.app"
    },
    {
        id: 2,
        title: "GTA II Scene",
        description: "This projects simulate an action scene from GTA II. Made with HTML,CSS,JS",
        image: "/images/projects/gtaBig.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "https://gta2scene.netlify.app"
    },
    {
        id: 3,
        title: "TODO App",
        description: "Classic ToDo App made with ReactJS and SASS",
        image: "/images/projects/todoBig.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "https://toodooappx.netlify.app"
    },
    {
        id: 4,
        title: "Mirax Plaza",
        description: "This project represents you site of a real estate in Kyiv. That was my first project and made with HTML,CSS,JS",
        image: "/images/projects/miraxBig.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "https://mirax-plaza.netlify.app"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Project 5 description",
        image: "/images/logo.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "/"
    },
    {
        id: 6,
        title: "Project 6",
        description: "Project 6 description",
        image: "/images/logo.png",
        tag: ["All", "Web", "Mobile"],
        gitURL: "/",
        previewURL: "/"
    }
]
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = ProjectsData.filter((project) => 
        project.tag.includes(tag)
    );

const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1},
};

  return (
    <section ref={ref} id='projects'>
        
        <h2 className='text-center text-4xl font-bold mt-4 mb-10 underline'>My Projects</h2>
        <div className='flex flex-row justify-center items-center gap-2 py-6'>
           <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
           {/* <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
           <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} /> */}
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project, index) => (
            <motion.li 
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition = {{ duration: 0.3, delay: index * 0.4 }}
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
  )
}

export default ProjectsSection