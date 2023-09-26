"use client";
import React, {useState} from 'react'
import {styles} from "../../[locale]/styles";
import {useTranslations} from "next-intl";
import SectionHeader from "../../../app/components/SectionHeader";
import {motion} from "framer-motion";
import {fadeIn} from "../../../app/utils/motion";
import {socials} from "./constants";
import Social from "./Social";
import AnimationWrapper from "@/app/components/AnimationWrapper";


let EmailStatuses = { SUCCESS: 'success', FAILED: 'failed', WAITING: 'waiting' }

const Email = () => {
    const t = useTranslations("EmailSection");
    const [EmailStatus, setEmailStatus] = useState(EmailStatuses.WAITING);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        setEmailStatus(EmailStatuses.WAITING);

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }
        const response = await fetch(endpoint, options);

        if (response.status === 200){
            setEmailStatus(EmailStatuses.SUCCESS);
        }
        else{
            setEmailStatus(EmailStatuses.FAILED);
        }
    }

  return (
      <div id="contact" className='pt-24'>
          <SectionHeader t={t}/>
          <section className='grid md:grid-cols-2 my-12 gap-8 relative'>
              <div>
                  <AnimationWrapper
                      variants={fadeIn('right', 'tween', 0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                  >
                      <h5 className='text-xl font-bold'>
                          {t("GetInTouch")}
                      </h5>
                  </AnimationWrapper>
                  <AnimationWrapper
                      variants={fadeIn('right', 'tween', 0.4)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                  >
                      <p className='mt-3 text-secondary text-[17px] leading-[30px] mb-5 lg:mr-5 max-w-md'>
                          {t("EmailText")}
                      </p>
                  </AnimationWrapper>
                  <div className='socials flex flex-row gap-4'>
                      {
                          socials.map((social, index) => (
                              <Social key={`social-${index}`} social={social} index={index}/>
                          ))
                      }
                  </div>
              </div>
              <AnimationWrapper
                  variants={fadeIn('left', 'tween', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: true }}
              >
                  <form className='flex flex-col' onSubmit={handleSubmit}>
                      <div className='mb-6'>
                          <label
                              htmlFor='email'
                              className='text-white block mb-2 text-[17px] font-medium'
                          >
                              {t("Form.Email.Title")}
                          </label>
                          <input
                              name="email"
                              type='email'
                              id='email'
                              required
                              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-[17px] rounded-lg block w-full p-2.5'
                              placeholder="example@google.com"
                          />
                      </div>
                      <div className='mb-6'>
                          <label
                              htmlFor='subject'
                              className='text-white block mb-2 text-[17px] font-medium'
                          >
                              {t("Form.Subject.Title")}
                          </label>
                          <input
                              name="subject"
                              type='text'
                              id='subject'
                              required
                              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-[17px] rounded-lg block w-full p-2.5'
                              placeholder={t("Form.Subject.Example")}
                          />
                      </div>
                      <div className='mb-6'>
                          <label
                              htmlFor='message'
                              className='text-white block mb-2 text-[17px] font-medium'
                          >
                              {t("Form.Message.Title")}
                          </label>
                          <textarea
                              name='message'
                              id='message'
                              rows={5}
                              required
                              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-[17px] rounded-lg block w-full p-2.5'
                              placeholder={t("Form.Message.Example")}
                          />
                      </div>
                      <button
                          type='submit'
                          className={`${styles.buttonStyle} text-white font-medium py-2.5
                    px-5 rounded-lg w-full`}
                      >
                          {t("Form.SendButton")}
                      </button>
                      {
                          EmailStatus === EmailStatuses.SUCCESS && (
                              <p className='text-green-500 text-[17px] mt-2'>
                                  {t("Form.SuccessSend")}
                              </p>
                          )
                      }
                      {
                          EmailStatus === EmailStatuses.FAILED && (
                              <p className='text-red-500 text-[17px] mt-2'>
                                  {t("Form.FailedSend")}
                              </p>
                          )
                      }
                  </form>
              </AnimationWrapper>
          </section>
      </div>
  )
}

export default Email