import React from 'react'
import Image from "next/image";
import {styles} from "../[locale]/styles"
import logoImage from "../../src/logo_h.png";

const Footer = () => {
  return (
    <footer className={`${ styles.paddingX } footer border-t z-10 border-t-[#33353F] text-white`}>
      <div className='lg:max-w-[1400px] max-w-screen-lg flex justify-between items-center mx-auto gap-x-12 py-12'>
          <Image
              src={logoImage}
              alt='AboutImage'
              className='w-[125px] h-[38.5px]'
          />
        <p className='text-slate-600'>
            <a
                href="https://www.flaticon.com/"
                title="idea icons"
            >
                Icons created by Freepik - Flaticon
            </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer