import React from 'react'
import {styles} from "../../app/[locale]/styles";
import {fadeIn} from "../../app/utils/motion";
import AnimationWrapper from "../../app/components/AnimationWrapper";

const SectionHeader = ({t}) => {
  return (
      <div>
          <AnimationWrapper
              variants={fadeIn('up', 'tween', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
          >
              <p className={`${styles.sectionSubText}`}>
                  {t("SubText")}
              </p>
          </AnimationWrapper>
         <AnimationWrapper
             variants={fadeIn('up', 'tween', 0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: true }}
         >
             <p className={`${styles.sectionHeadText}`}>
                 {t("HeadText")}
             </p>
         </AnimationWrapper>
      </div>
  )
}

export default SectionHeader