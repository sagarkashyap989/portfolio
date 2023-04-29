import React from 'react';

import proj_1 from './../images/project_1.png'
import proj_2 from './../images/project_2.png'
import proj_3 from './../images/project_3.png'
import proj_4 from './../images/project_4.png'

const data = [{ text: 'Online Sneakes shop', img: proj_3 },
{ text: 'Online Burger Store', img: proj_2 },
{ text: 'Cafe Landing Page', img: proj_1 },
{ text: 'Social Media WebApp', img: proj_4 },]

const Projects = ({FadeInSection}) => {









    return (
        <div class="container flex-wrap flex mt-24 flex-col justify-between items-center ">

            <h1 className='text-[text_landing] font-gugi text-3xl font-bold tracking-wider underline underline-offset-4 delay4 delay'>Projects</h1>


            <div class="flex flex-col mt-20 md:mt-24   space-y-20  flex-wrap  justify-center items-center  m-3 " >








                {data.map((item, index) => {
                 return (  <FadeInSection key={index}>
                        <div className="box">
                            <div className="flex flex-col md:flex-row gap-4 justify-between box">
                                <div className={`proj_desc flex items-center justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                    <h2 className={`text-paragraph text-xl  md:text-3xl  ${index % 2 === 0 ? 'md:rotate-90' : 'md:rotate-[-90deg]'}`}>{item.text}</h2>

                                </div>
                                <div className={`proj_gif md:w-3/5 shadow ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} 
`}>
                                    <img src={item.img} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </FadeInSection>)

                })}







            </div>

        </div>
    )
}

export default Projects