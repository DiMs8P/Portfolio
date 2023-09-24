import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "next-intl";
import {LANGUAGE_DATA} from "./constants";

const ChangeLanguageButton = () => {
    const locale = useLocale();
    const newPath = locale === "en" ? "/".concat("ru") : "/".concat("en")

  return (
      <Link href={newPath}>
          <Image
              src={LANGUAGE_DATA.find((t) => t.id === locale).img}
              alt='AboutImage'
              className='w-[30px] h-[30px]'
          />
      </Link>
  )
}

export default ChangeLanguageButton