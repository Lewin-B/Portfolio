import React from 'react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
    return (
        <div className='Contact bg-slate-200'>
            <div className='w-full h-screen p-4'>
                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8 text-center'>
                        <Reveal>
                            <p className='text-4xl font-bold inline border-b-4 border-gray-500 underline'>Contact</p>
                        </Reveal>
                        <Reveal>
                            <p className='py-6'>Submit the form below to get in touch with me</p>
                        </Reveal>
                    </div>
                    <div className='flex justify-center items-center'>
                        <form action="https://getform.io/f/f83a4b33-129b-4f5e-8f23-1d0e8992bc94" method='POST' className='flex flex-col w-full md:w-1/2'>
                            <Reveal>
                                <input type="text" name="name" placeholder='Enter your name'
                                className='p-2 bg-transparent border-2 rounded-md focus:outline-none w-full border-gray-800'/>
                            </Reveal>
                            <Reveal>
                                <input type="text" name="email" placeholder='Enter your email'
                                className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none w-full border-gray-800'/>
                            </Reveal>
                            <Reveal>
                                <textarea name="message" placeholder='Enter your Message'rows={10} className='p-2 bg-transparent border-2  rounded-md
                                focus:outline-none w-full border-gray-800'></textarea>
                            </Reveal>
                            <Reveal>
                                <button className='px-6 py-3 mx-auto flex items-center rounded-md
                                hover:scale-110 duration-300 font-bold text-xl border bg-gray-800 text-white border-gray-800'>Let's talk</button>
                            </Reveal>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;