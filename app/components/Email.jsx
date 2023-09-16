"use client";
import React, {useState} from 'react'
import GithubIcon from '../../src/github-icon.svg'
import LinkedInIcon from '../../src/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

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
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
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
                        className='text-white block mb-2 text-sm font-medium'
                    >
                        Your email
                    </label>
                    <input
                        name="email"
                        type='email'
                        id='email'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='example@google.com'
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='subject'
                        className='text-white block mb-2 text-sm font-medium'
                    >
                        Subject
                    </label>
                    <input
                        name="subject"
                        type='text'
                        id='subject'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just saying hi'
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='text-white block mb-2 text-sm font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        rows={5}
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about"
                    />
                </div>
                <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5
                    px-5 rounded-lg w-full'
                >
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default Email