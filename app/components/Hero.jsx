"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../src/github-icon.svg";
import { TypeAnimation } from "react-type-animation";
import {styles} from "../[locale]/styles";
import {useTranslations} from "next-intl";
import {fadeIn} from "../../app/utils/motion";
import AnimationWrapper from "../../app/components/AnimationWrapper";

const Hero = () => {
    const t = useTranslations("HeroSection");
  return (
    <section>
        <div className='grid md:grid-cols-2'>
            <div className='place-self-center text-center md:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <AnimationWrapper
                        variants={fadeIn('right', 'tween', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true }}
                        className='mb-2'
                    >
                        <span className='text-transparent bg-clip-text bg-gradient-to-r
                        from-cyan-400 to-blue-600'>Hello, I&apos;m {" "}
                        </span>
                        <br/>
                    </AnimationWrapper>
                    <AnimationWrapper
                        variants={fadeIn('left', 'tween', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true }}
                    >
                        <TypeAnimation
                            sequence={[
                                "Dmitry",
                                1000,
                                "Developer",
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        >
                        </TypeAnimation>
                    </AnimationWrapper>
                </h1>
                <AnimationWrapper
                    variants={fadeIn('up', 'tween', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <p className={`${styles.sectionIntroText} mb-6`}>{t("Introduction")}</p>
                </AnimationWrapper>
                <AnimationWrapper
                    variants={fadeIn('up', 'tween', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <button
                        className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4
                         ${styles.buttonStyle}  text-white`}
                    >
                        {t("HireButton")}
                    </button>
                    <button
                        className='px-1 py-1 w-full sm:w-fit rounded-full
                        bg-gradient-to-br from-teal-500 via-cyan-500
                        to-blue-500 hover:bg-slate-800 mt-3'
                    >
                        <span className='block text-white bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>{t("CVButton")}</span>
                    </button>
                </AnimationWrapper>
            </div>
            <div className='place-self-center mt-4 lg:mt-0'>
                <AnimationWrapper
                    className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                    variants={fadeIn('left', 'tween', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </AnimationWrapper>
            </div>
        </div>
    </section>
  );
};

export default Hero