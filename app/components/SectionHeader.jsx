import React from 'react'
import {motion} from "framer-motion";
import {styles} from "../../app/[locale]/styles";
import {fadeIn} from "../../app/utils/motion";

const SectionHeader = ({t}) => {
  return (
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
  )
}

export default SectionHeader