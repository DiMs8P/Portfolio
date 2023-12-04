"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../src/heroImage.png";
import { TypeAnimation } from "react-type-animation";
import {styles} from "../[locale]/styles";
import {useTranslations} from "next-intl";
import {fadeIn} from "../../app/utils/motion";
import AnimationWrapper from "../../app/components/AnimationWrapper";
import { Link } from 'react-scroll'

const Hero = () => {
    const t = useTranslations("HeroSection");
  return (
    <section>
        <div className='grid md:grid-cols-2 mt-12 gap-8 relative'>
            <div className='self-center justify-self-start text-center md:text-left'>
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
                    <Link
                       to={"contact"}
                       spy={true}
                       smooth={true}
                    >
                       <button
                           className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4
                                       ${styles.buttonStyle} text-[17px] text-white`}>
                           {t("HireButton")}
                       </button>
                    </Link>
                    <button
                        className='px-1 py-1 w-full sm:w-fit rounded-full
                        bg-gradient-to-br from-teal-500 via-cyan-500
                        to-blue-500 hover:bg-slate-800 mt-3'
                    >
                        <span className='block text-white text-[17px] bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>{t("CVButton")}</span>
                    </button>
                </AnimationWrapper>
            </div>
            <div className='place-self-center'>
                <AnimationWrapper
                    variants={fadeIn('left', 'tween', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true }}
                >
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        className="rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
                        width={400}
                        height={400}
                    />
                </AnimationWrapper>
            </div>
        </div>
    </section>
  );
};

export default Hero