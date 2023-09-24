import React from 'react'
import Link from "next/link";
import Image from "next/image";
import unitedStatesFlag from "@/src/united-states.png";
import russianFlag from "@/src/russia.png";
import {useRouter} from "next-intl/client";
import {useLocale} from "next-intl";

const LANGUAGE_DATA = [
    {
        id: "en",
        img: unitedStatesFlag
    },
    {
        id: "ru",
        img: russianFlag
    }
]

const ChangeLanguageButton = () => {
    const router = useRouter();
    const locale = useLocale();

  return (
      <Link href='/'>
          <Image
              src={LANGUAGE_DATA.find((t) => t.id === locale).img}
              alt='AboutImage'
              className='w-[30px] h-[30px]'
              onClick={() => {
                  locale === "en" ?
                      router.replace('/ru', {locale: 'ru'}) :
                      router.replace('/en', {locale: 'en'})
              }}
          />
      </Link>
  )
}

export default ChangeLanguageButton