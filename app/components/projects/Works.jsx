"use client"
import React from "react";
import {motion} from "framer-motion";
import {styles} from "../../[locale]/styles";
import {projects} from "./constants";
import {fadeIn, textVariant} from "../../utils/motion";
import {useTranslations} from "next-intl";
import ProjectCard from "./ProjectCard";

const Works = () => {
    const t = useTranslations("ProjectsSection");
    return (
        <div id="projects" className='pt-24'>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>{t("SubText")}</p>
                <h2 className={`${styles.sectionHeadText}`}>{t("HeadText")}</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-12 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    {t("ProjectsText")}
                </motion.p>
            </div>

            <div className='mt-5 flex flex-wrap gap-7'>
                {projects(useTranslations("ProjectsSection.Projects")).map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Works;