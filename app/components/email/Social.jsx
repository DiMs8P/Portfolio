import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../../app/utils/motion";

const Social = ({ social, index }) => {
  return (
      <motion.div
          variants={fadeIn('right', 'spring', index * 0.5 + 1, 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
      >
          <Link href={social.targetLink}>
              <Image src={social.image} alt={social.name} className='max-h-[48px] max-w-[48px]'/>
          </Link>
      </motion.div>
  )
}

export default Social