"use client"
import React, {useTransition, useState} from 'react'
import {fadeIn} from "../../../app/utils/motion";
import {getTabData, filters} from "./constants";
import {useTranslations} from "next-intl";
import SectionHeader from "../../../app/components/SectionHeader";
import AnimationWrapper from "../AnimationWrapper";
import {styles} from "../../[locale]/styles";
import TextSplitter from "../../../app/components/utils/TextSplitter";
import FilterTag from "../../../app/components/utils/FilterTag";

const About = () => {
    const [tag, setTag] = useState(filters[0]);
    const [isPending, startTransition] = useTransition();
    const t = useTranslations("AboutSection");

    const handleTabChange = (id)  => {
        startTransition(() => {
            setTag(id);
        });
    }

  return (
      <div id="about" className='pt-24'>
          <SectionHeader t={t}/>
          <section className='mt-12 relative'>
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
                      {filters.map((name, index) => (
                          <AnimationWrapper
                              key={index}
                              variants={fadeIn("left", "spring", index * 0.5 + 1, 1)}
                              initial='hidden'
                              whileInView="show"
                              viewport={{ once: true }}
                          >
                              <FilterTag
                                  onClick={() => handleTabChange(name)}
                                  name={name}
                                  isSelected={tag === name}
                              />
                          </AnimationWrapper>
                      ))}
                  </div>
                  <AnimationWrapper
                      variants={fadeIn('left', 'tween', 0.5)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                      className={`${styles.sectionIntroText}`}
                  >
                      <div className='mt-5'>
                          {
                              getTabData(useTranslations("AboutSection.TabData")).find((t) => t.id === tag).content
                          }
                      </div>
                  </AnimationWrapper>
          </section>
      </div>
  )
}

export default About