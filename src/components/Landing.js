import React, {useState} from 'react'

import profile from './../images/profile.png'
import landing_vector from './../images/vecteezy_online-learning-from-home-studying-through-video-conference_5607817-removebg.png'


import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';




const Landing = () => {

   

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
console.log(isHovered);

    return (
        <div class="container flex mt-6 lg:flex-row flex-col justify-between">



            <div class="flex flex-col  md:space-y-5  space-y-6 flex-wrap mt-10 md:mt-0" >
                <div class="flex flex-row gap-4 items-center delay"  > 
                    <div>
                        <img class="w-11 rounded-full" src={profile} alt="" srcset="" />
                    </div>
                    <div>
                        <span class="opacity-70 nd:text-[20px] text-[21px] font-extralight items-center">Sagar Kashyap</span>
                    </div>
                </div>
                <h1 class="font-[gugi] text-6xl lg:text-[67px] font-semibold text-landing_title delay  delay1" >Freelance Developer</h1>
                <h2 class='text-paragraph  text-xl neg-margin delay delay2 '>Helping people turn their ideas into <br /> sites &amp; apps that work. <br />Professional and Cost-Effective. <br /> Always.</h2>
                <div class="flex flex-row justify-between gap-x-10 gap-y-4 delay delay3">
                    <div class="flex flex-col gap-3 w-full justify-between gap-y-4">
                        <button class="flex landing-btn-con items-center rounded-lg p-4   hover:bg-[#f18f8d] ease-in duration-100  hover:scale-[102%]"><span class=" items-center landing-btn-typo ">HIRE ME!</span></button>
                        <button  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}class="flex n items-center rounded-lg p-4 border-solid border-2 border-btn hover:scale-[102%] ease-in duration-100 "><span class="items-center landing-btn-typo text-btn ">
      {/* <BsArrowBarRight  className={`transition duration-150  ${isHovered?'delay inline':'hidden'}`}/> */}
      MY PROJECTS</span></button>
                    </div>
                    <div class="flex flex-col  justify-between pr-3">
                        <BsTwitter size={23} className='text-[#b6c2b9]  hover:text-[#ecfced] hover:scale-110 ease-in duration-100 ' />
                        <BsGithub size={23} className='text-[#b6c2b9]  hover:text-[#ecfced] hover:scale-110 ease-in duration-100 ' />
                        <BsLinkedin size={23} className='text-[#b6c2b9]  hover:text-[#ecfced] hover:scale-110 ease-in duration-100 ' />
                    </div>
                </div>
            </div>
            <div class="md:flex hidden justify-end img-div items-center delay delay2">
                <img class="max-w-[122%] max-h-[90%] -mr-16" src={landing_vector} alt="" srcset="" />
            </div>

        </div>
    )
}

export default Landing