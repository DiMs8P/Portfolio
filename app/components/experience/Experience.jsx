"use client"
import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./constants";
import {useTranslations} from "next-intl";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "../../../app/components/SectionHeader";

const Experience = () => {
    const t = useTranslations("ExperienceSection");
  return (
    <div id="experience" className='pt-24'>
      <SectionHeader t={t}/>
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