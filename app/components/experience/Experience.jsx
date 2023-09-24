"use client"
import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../[locale]/styles";
import { experiences } from "./constants";
import { textVariant } from "../../utils/motion";
import {useTranslations} from "next-intl";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    const t = useTranslations("ExperienceSection");
  return (
    <div id="experience" className='pt-24'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
            {t("SubText")}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
            {t("HeadText")}
        </h2>
      </motion.div>

      <div className='mt-16 flex flex-col'>
        <VerticalTimeline>
          {experiences(useTranslations("ExperienceSection.Experiences")).map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;