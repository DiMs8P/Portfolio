import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "next-intl";
import {LANGUAGE_DATA} from "./constants";

const ChangeLanguageButton = () => {
    const locale = useLocale();
    const newPath = locale === "en" ? "ru" : "en";

  return (
      <Image
          src={LANGUAGE_DATA.find((t) => t.id === locale).img}
          alt='AboutImage'
          className='cursor-pointer h-[30px] w-[30px] md:h-[30px] md:w-[30px]'
          onClick={() => {
              /*TODO routing breaks lineColor on VerticalTimeline :(*/
              window.location.pathname = newPath;
          }}
      />
  )
}

export default ChangeLanguageButton