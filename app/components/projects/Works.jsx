"use client"
import React, {useState} from "react";
import {projects} from "./constants";
import {fadeIn} from "../../utils/motion";
import {useTranslations} from "next-intl";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../../../app/components/SectionHeader";
import AnimationWrapper from "../AnimationWrapper";
import ProjectTag from "./ProjectTag";
import {styles} from "../../../app/[locale]/styles";

const Works = () => {
    const [tag, setTag] = useState("All");
    const t = useTranslations("ProjectsSection");

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projects(useTranslations("ProjectsSection.Projects")).filter((project) =>
        project.filters.includes(tag)
    );

    return (
        <div id="projects" className='pt-24'>
            <SectionHeader t={t}/>
            <div className='w-full flex'>
                <AnimationWrapper
                    variants={fadeIn('left', 'tween', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <p className={`${styles.sectionIntroText} mt-12 max-w-3xl`}>
                        {t("ProjectsText")}
                    </p>
                </AnimationWrapper>
            </div>
            <div className='text-white flex flex-row justify-center items-center
                gap-2 py-6'>
               <ProjectTag
                   onClick={handleTagChange}
                   name="All"
                   isSelected={tag === "All"}
               />
                <ProjectTag
                    onClick={handleTagChange}
                    name='Unreal Engine'
                    isSelected={tag === "Unreal Engine"}
                />
            </div>
            <div
                className='mt-5 flex flex-wrap gap-7'
            >
                {filteredProjects.map((project, index) => (
                    <AnimationWrapper
                        key={`project-${index}`}
                        variants={fadeIn("left", "spring", index * 0.5, 1)}
                        initial='hidden'
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    </AnimationWrapper>
                ))}
            </div>
        </div>
    );
};

export default Works;