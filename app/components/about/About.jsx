"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import AboutImage from "../../../src/github-icon.svg";
import TabButton from "./TabButton";
import {fadeIn} from "../../../app/utils/motion";
import {getTabData} from "./constants";
import {useTranslations} from "next-intl";
import SectionHeader from "../../../app/components/SectionHeader";
import AnimationWrapper from "../AnimationWrapper";
const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const t = useTranslations("AboutSection");

    const handleTabChange = (id)  => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
      <div id="about" className='pt-24'>
          <SectionHeader t={t}/>
          <section className='text-white'>
              <div className='grid md:grid-cols-2 gap-8 items-center mt-12 px-4
        xl:gap-16 xl:px-16 relative'>
                  <AnimationWrapper
                      variants={fadeIn('right', 'tween', 0.5)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                  >
                      <Image
                          src={AboutImage}
                          alt='AboutImage'
                          width={500}
                          height={500}
                          className='rounded-[30px]'
                      />
                  </AnimationWrapper>
                  <AnimationWrapper
                      variants={fadeIn('left', 'tween', 0.5)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                      className='mt-4 lg:ml-5 md:mt-0 text-[17px] leading-[30px] text-left flex flex-col h-full'
                  >
                      <p>
                          {t("AboutText")}
                      </p>
                      <div className='flex flex-row justify-start mt-8'>
                          <TabButton
                              selectTab={() => handleTabChange("skills")}
                              active={tab === 'skills'}
                          >
                              {t("TabData.Skills.Title")}
                          </TabButton>
                          <TabButton
                              selectTab={() => handleTabChange("education")}
                              active={tab === 'education'}
                          >
                              {t("TabData.Education.Title")}
                          </TabButton>
                          {/*<TabButton
                              selectTab={() => handleTabChange("certifications")}
                              active={tab === 'certifications'}
                          >
                              {t("TabData.Certifications.Title")}
                          </TabButton>*/}
                      </div>
                      <div className='mt-8'>
                          {
                              getTabData(useTranslations("AboutSection.TabData")).find((t) => t.id === tab).content
                          }
                      </div>
                  </AnimationWrapper>
              </div>
          </section>
      </div>
  )
}

export default About