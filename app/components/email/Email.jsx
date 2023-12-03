"use client";
import React, {useState} from 'react'
import {sizes, styles} from "../../[locale]/styles";
import {useTranslations} from "next-intl";
import SectionHeader from "../../../app/components/SectionHeader";
import {fadeIn} from "../../../app/utils/motion";
import {socials} from "./constants";
import Social from "./Social";
import AnimationWrapper from "../AnimationWrapper";
import TextSplitter from "../../../app/utils/TextSplitter";


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
                      <h5 className={`${sizes.emailSectionSize} font-bold`}>
                          {t("GetInTouch")}
                      </h5>
                  </AnimationWrapper>
                  <AnimationWrapper
                      variants={fadeIn('right', 'tween', 0.4)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: true }}
                  >
                      <div className='mb-5'>
                          <TextSplitter
                              text={t("EmailText")}
                              className={`${styles.sectionIntroText} mt-3 mb-5 lg:mr-5 max-w-md`}
                          />
                      </div>
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
                              className={`${sizes.baseTextSize} text-white block mb-2 font-medium`}
                          >
                              {t("Form.Email.Title")}
                          </label>
                          <input
                              name="email"
                              type='email'
                              id='email'
                              required
                              className={`${sizes.baseTextSize} bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 rounded-lg block w-full p-2.5`}
                              placeholder="example@google.com"
                          />
                      </div>
                      <div className='mb-6'>
                          <label
                              htmlFor='subject'
                              className={`${sizes.baseTextSize} text-white block mb-2 font-medium`}
                          >
                              {t("Form.Subject.Title")}
                          </label>
                          <input
                              name="subject"
                              type='text'
                              id='subject'
                              required
                              className={`${sizes.baseTextSize} bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 rounded-lg block w-full p-2.5`}
                              placeholder={t("Form.Subject.Example")}
                          />
                      </div>
                      <div className='mb-6'>
                          <label
                              htmlFor='message'
                              className={`${sizes.baseTextSize} text-white block mb-2 font-medium`}
                          >
                              {t("Form.Message.Title")}
                          </label>
                          <textarea
                              name='message'
                              id='message'
                              rows={5}
                              required
                              className={`${sizes.baseTextSize} bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 rounded-lg block w-full p-2.5`}
                              placeholder={t("Form.Message.Example")}
                          />
                      </div>
                      <button
                          type='submit'
                          className={`${styles.buttonStyle} text-white text-[17px] font-medium py-2.5
                    px-5 rounded-lg w-full`}
                      >
                          {t("Form.SendButton")}
                      </button>
                      {
                          EmailStatus === EmailStatuses.SUCCESS && (
                              <p className={`${sizes.baseTextSize} text-green-500 mt-2`}>
                                  {t("Form.SuccessSend")}
                              </p>
                          )
                      }
                      {
                          EmailStatus === EmailStatuses.FAILED && (
                              <p className={`${sizes.baseTextSize} text-red-500 mt-2`}>
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