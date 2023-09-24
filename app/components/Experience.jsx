"use client"
import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../[locale]/styles";
import { experiences } from "@/app/constants/experience";
import { textVariant } from "../utils/motion";
import {useTranslations} from "next-intl";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    const t = useTranslations("ExperienceSection");
  return (
    <div id="experience" className='pt-24'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-16 flex flex-col'>
        <VerticalTimeline>
          {experiences(t).map((experience, index) => (
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