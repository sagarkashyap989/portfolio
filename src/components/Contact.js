import React from 'react'
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
    return (
        <div class=" flex-wrap flex mt-24 flex-col justify-between items-center ">

            <h1 className='text-[text_landing] font-gugi text-3xl font-bold tracking-wider underline underline-offset-4 delay4 delay'>Contact Me</h1>


            <div class="flex flex-col mt-20 md:mt-24   w-full space-y-2  flex-wrap  justify-center items-center  m-3 " >
            
                <form action="#" class="  w-9/12 md:w-[50%]">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" class="text-white w-full landing-btn-con items-center rounded-lg p-4   hover:bg-[#f18f8d] ease-in duration-100  hover:scale-[102%]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none  block"><span class=" items-center landing-btn-typo ">Send message</span></button>
                </form>
                <span class=" items-center landing-btn-typo ">OR</span>
            <a href='https://wa.me/919307495847' className='text-white  w-9/12 md:w-[50%] bg-[#1fde4e]  items-center  p-4   hover:bg-[#72dc8d] ease-in duration-100  hover:scale-[102%]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 block'>  
           <span class=" text-center landing-btn-typo block">Contact me on   <BsWhatsapp size={23} className='inline ml-2'/></span> </a> 

            </div>



        </div>

    )
}

export default Contact