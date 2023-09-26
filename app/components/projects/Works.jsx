"use client"
import React from "react";
import {motion} from "framer-motion";
import {projects} from "./constants";
import {fadeIn} from "../../utils/motion";
import {useTranslations} from "next-intl";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../../../app/components/SectionHeader";
import AnimationWrapper from "@/app/components/AnimationWrapper";

const Works = () => {
    const t = useTranslations("ProjectsSection");
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
                    <p className='mt-12 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                        {t("ProjectsText")}
                    </p>
                </AnimationWrapper>
            </div>

            <AnimationWrapper
                className='mt-5 flex flex-wrap gap-7'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true}}
            >
                {projects(useTranslations("ProjectsSection.Projects")).map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </AnimationWrapper>
        </div>
    );
};

export default Works;