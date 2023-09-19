"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import AboutImage from '../../src/images/about-image.png'
import TabButton from "./TabButton";
import {motion} from "framer-motion";
import {textVariant} from "@/app/utils/motion";
import {styles} from "@/app/styles";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Unreal Engine</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Trash can(NSTU)</li>
                <li>Udemy</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>English</li>
                <li>Game start finalyst</li>
            </ul>
        )
    }
]
const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id)  => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
      <div className='pt-24'>
          <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText}`}>My story</p>
              <h2 className={`${styles.sectionHeadText}`}>About me.</h2>
          </motion.div>

          <section className='text-white'>
              <div className='grid md:grid-cols-2 gap-8 items-center mt-12 px-4
        xl:gap-16 xl:px-16 relative'>
                  <Image
                      src={AboutImage}
                      alt='AboutImage'
                      width={500}
                      height={500}
                      className='rounded-[30px]'
                  />
                  <div className='mt-4 lg:ml-5 md:mt-0 text-[17px] leading-[30px] text-left flex flex-col h-full'>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Accusamus animi, asperiores aspernatur blanditiis consectetur
                          culpa deserunt distinctio dolor, illo magni nostrum possimus
                          quisquam reiciendis sequi sint sunt temporibus ut veritatis.
                      </p>
                      <div className='flex flex-row justify-start mt-8'>
                          <TabButton
                              selectTab={() => handleTabChange("skills")}
                              active={tab === 'skills'}
                          >
                              Skills
                          </TabButton>
                          <TabButton
                              selectTab={() => handleTabChange("education")}
                              active={tab === 'education'}
                          >
                              Education
                          </TabButton>
                          <TabButton
                              selectTab={() => handleTabChange("certifications")}
                              active={tab === 'certifications'}
                          >
                              Certifications
                          </TabButton>
                      </div>
                      <div className='mt-8'>
                          {
                              TAB_DATA.find((t) => t.id === tab).content
                          }
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default About