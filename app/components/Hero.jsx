"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../src/github-icon.svg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
        <div className='grid md:grid-cols-2'>
            <div className='place-self-center md:text-left sm:text-center'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r
                    from-cyan-400 to-blue-600'>Hello, I&apos;m {" "}
                    </span>
                    <br/>
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
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                </p>
                <div>
                    <button
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4
                        bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500
                        hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600
                        hover:bg-slate-100 text-white'
                    >
                        Hire Me
                    </button>
                    <button
                        className='px-1 py-1 w-full sm:w-fit rounded-full
                        bg-gradient-to-br from-teal-500 via-cyan-500
                        to-blue-500 hover:bg-slate-800 mt-3'
                    >
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero