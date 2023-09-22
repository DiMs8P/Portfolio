"use client";
import React, {useState} from 'react'
import GithubIcon from '../../src/github-icon.svg'
import LinkedInIcon from '../../src/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from "framer-motion";
import {textVariant} from "@/app/utils/motion";
import {styles} from "../[locale]/styles";

const Email = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        setEmailSubmitted(false);
        console.log(data.email, data.subject, data.message)

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }
        console.log(JSONdata);
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200){
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    }
  return (
      <div id="contact" className='pt-24'>
          <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText} `}>I&apos;m waiting for your respond</p>
              <h2 className={`${styles.sectionHeadText}`}>Contact me.</h2>
          </motion.div>
          <section className='grid md:grid-cols-2 my-12 gap-8 relative'>
              <div>
                  <h5 className='text-xl font-bold'>
                      Get in touch
                  </h5>
                  <p className='mt-3 text-secondary text-[17px] leading-[30px] mb-5 lg:mr-5 max-w-md'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid facere hic iste nihil quos, sequi. Culpa, distinctio,
                      eaque eius illum ipsam libero, minus nulla numquam perferendis
                      ratione temporibus unde voluptatum!
                  </p>
                  <div className='socials flex flex-row gap-2'>
                      <Link href='github.com'>
                          <Image src={GithubIcon} alt='GithubIcon'/>
                      </Link>
                      <Link href='linkedin.com'>
                          <Image src={LinkedInIcon} alt='LinkedInIcon'/>
                      </Link>
                  </div>
              </div>
              <div>
                  <form className='flex flex-col' onSubmit={handleSubmit}>
                      <div className='mb-6'>
                          <label
                              htmlFor='email'
                              className='text-white block mb-2 text-[17px] font-medium'
                          >
                              Your email
                          </label>
                          <input
                              name="email"
                              type='email'
                              id='email'
                              required
                              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-[17px] rounded-lg block w-full p-2.5'
                              placeholder='example@google.com'
                          />
                      </div>
                      <div className='mb-6'>
                          <label
                              htmlFor='subject'
                              className='text-white block mb-2 text-[17px] font-medium'
                          >
                              Subject
                          </label>
                          <input
                              name="subject"
                              type='text'
                              id='subject'
                              required
                              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-[17px] rounded-lg block w-full p-2.5'
                              placeholder='Just saying hi'
                          />
                      </div>
                      <div className='mb-6'>
                          <label
                              htmlFor='message'
                              className='text-white block mb-2 text-[17px] font-medium'
                          >
                              Message
                          </label>
                          <textarea
                              name='message'
                              id='message'
                              rows={5}
                              required
                              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-[17px] rounded-lg block w-full p-2.5'
                              placeholder="Let's talk about"
                          />
                      </div>
                      <button
                          type='submit'
                          className={`${styles.buttonStyle} text-white font-medium py-2.5
                    px-5 rounded-lg w-full`}
                      >
                          Send Message
                      </button>
                      {
                          emailSubmitted && (
                              <p className='text-green-500 text-[17px] mt-2'>
                                  Email sent successfully!
                              </p>
                          )
                      }
                  </form>
              </div>
          </section>
      </div>
  )
}

export default Email