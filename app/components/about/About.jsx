"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import AboutImage from "../../../src/github-icon.svg";
import TabButton from "./TabButton";
import {motion} from "framer-motion";
import {fadeIn} from "../../../app/utils/motion";
import {styles} from "../../[locale]/styles";
import {getTabData} from "./constants";
import {useTranslations} from "next-intl";
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
          <div>
              <motion.p
                  className={`${styles.sectionSubText}`}
                  variants={fadeIn('up', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: true }}
              >
                  {t("SubText")}
              </motion.p>
              <motion.h2
                  className={`${styles.sectionHeadText}`}
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: true }}
              >
                  {t("HeadText")}
              </motion.h2>
          </div>

          <section className='text-white'>
              <div className='grid md:grid-cols-2 gap-8 items-center mt-12 px-4
        xl:gap-16 xl:px-16 relative'>
                  <motion.div
                      variants={fadeIn('right', 0.5)}
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
                  </motion.div>
                  <motion.div
                      variants={fadeIn('left', 0.5)}
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
                  </motion.div>
              </div>
          </section>
      </div>
  )
}

export default About