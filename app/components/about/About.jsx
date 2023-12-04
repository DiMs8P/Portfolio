"use client"
import React, {useTransition, useState} from 'react'
import TabButton from "./TabButton";
import {fadeIn} from "../../../app/utils/motion";
import {getTabData} from "./constants";
import {useTranslations} from "next-intl";
import SectionHeader from "../../../app/components/SectionHeader";
import AnimationWrapper from "../AnimationWrapper";
import {styles} from "../../[locale]/styles";
import TextSplitter from "@/app/components/utils/TextSplitter";

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
          <section className='grid mt-12 gap-8 relative'>
                  <AnimationWrapper
                      variants={fadeIn('right', 'tween', 0.5)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                  >
                      <TextSplitter
                        text={t("AboutText")}
                        className={`${styles.sectionIntroText} max-w-3xl`}
                      />
                  </AnimationWrapper>
                  <div className={`${styles.sectionIntroText} text-white flex flex-row justify-center gap-2 py-6`}>
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
                      <TabButton
                          selectTab={() => handleTabChange("certifications")}
                          active={tab === 'certifications'}
                      >
                          {t("TabData.Certifications.Title")}
                      </TabButton>
                  </div>
                  <AnimationWrapper
                      variants={fadeIn('left', 'tween', 0.5)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                      className={`${styles.sectionIntroText}`}
                  >
                      <div className='mt-8'>
                          {
                              getTabData(useTranslations("AboutSection.TabData")).find((t) => t.id === tab).content
                          }
                      </div>
                  </AnimationWrapper>
          </section>
      </div>
  )
}

export default About