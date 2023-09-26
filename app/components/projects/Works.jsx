"use client"
import React from "react";
import {motion} from "framer-motion";
import {projects} from "./constants";
import {fadeIn} from "../../utils/motion";
import {useTranslations} from "next-intl";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../../../app/components/SectionHeader";

const Works = () => {
    const t = useTranslations("ProjectsSection");
    return (
        <div id="projects" className='pt-24'>
            <SectionHeader t={t}/>
            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn('left', 'tween', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                    className='mt-12 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    {t("ProjectsText")}
                </motion.p>
            </div>

            <motion.div
                className='mt-5 flex flex-wrap gap-7'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true}}
            >
                {projects(useTranslations("ProjectsSection.Projects")).map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </motion.div>
        </div>
    );
};

export default Works;