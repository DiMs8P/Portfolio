"use client"
import React, {useState} from "react";
import {filters, projects} from "./constants";
import {fadeIn} from "../../utils/motion";
import {useTranslations} from "next-intl";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../../../app/components/SectionHeader";
import AnimationWrapper from "../AnimationWrapper";
import FilterTag from "../utils/FilterTag";
import {styles} from "../../../app/[locale]/styles";

const Works = () => {
    const [tag, setTag] = useState(filters[0]);
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
            <div className={`${styles.sectionIntroText} text-white flex flex-row justify-center gap-2 py-6`}>
                {filters.map((project, index) => (
                    <AnimationWrapper
                        key={index}
                        variants={fadeIn("left", "spring", index * 0.5, 1)}
                        initial='hidden'
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <FilterTag
                            onClick={handleTagChange}
                            name={project}
                            isSelected={tag === project}
                        />
                    </AnimationWrapper>
                ))}
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