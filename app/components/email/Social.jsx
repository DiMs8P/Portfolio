import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {fadeIn} from "../../../app/utils/motion";
import AnimationWrapper from "../AnimationWrapper";

const Social = ({ social, index }) => {
  return (
      <AnimationWrapper
          variants={fadeIn('right', 'spring', index * 0.5 + 1, 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
      >
          <Link href={social.targetLink} target="_blank">
              <Image src={social.image} alt={social.name} className='max-h-[48px] max-w-[48px]'/>
          </Link>
      </AnimationWrapper>
  )
}

export default Social