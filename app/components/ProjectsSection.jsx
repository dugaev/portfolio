'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const ProjectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Project 1 description",
        image: "/images/logo.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "/"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Project 2 description",
        image: "/images/logo.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "/"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Project 3 description",
        image: "/images/logo.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "/"
    },
    {
        id: 4,
        title: "Project 4",
        description: "Project 4 description",
        image: "/images/logo.png",
        tag: ["All", "Web"],
        gitURL: "/",
        previewURL: "/"
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