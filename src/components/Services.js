import React from 'react'
import seo from './../images/Orange_seo-removebg-preview.png'
import app from './../images/Orange_app-removebg-preview.png'
import web from './../images/Orange_web-removebg-preview.png'

// const data = [{img:{web}, text:"WEB DEVELOPMENT"},{img:{seo}, text:'SEO'}, {img:{app}, text:"APP DEVELOPMENT"}, ]
const Services = ({FadeInSection}) => {
    return (
        <div class=" container flex-wrap flex mt-24 flex-col justify-between items-center ">

            <h1 className='text-[text_landing] font-gugi text-3xl font-bold tracking-wider underline underline-offset-4 delay4 delay'>Services I Offer</h1>


            <div class="flex  mt-20 md:mt-24   space-y-16  flex-wrap  justify-between items-center  m-3 " >

                <div className="flex flex-wrap space-y-16 md:space-y-0 justify-between">

                    
                    <div className='md:w-[45%]'>
                    <FadeInSection>

                        <img src={web} alt="" srcset="" />
                        <h2 className={`text-paragraph text-xl  md:text-3xl text-center  mt-4 font-bold md:font-normal`}>Website Development</h2>
                </FadeInSection>
                    </div>
                    <div className='md:w-[45%]'>
                    <FadeInSection>
                        <img src={seo} alt="" srcset="" />
                        <h2 className={`text-paragraph text-xl  md:text-3xl text-center   mt-4 font-bold md:font-normal`}>SEO</h2>
                </FadeInSection>
                    </div>
                </div>
<FadeInSection>
                <div className='md:w-[45%] mx-auto'>
                    <img src={app} alt="" srcset="" />
                    <h2 className={`text-paragraph text-xl  md:text-3xl  text-center  mt-4 font-bold md:font-normal`}>Mobile App Development</h2>
                </div>
                </FadeInSection>



            </div>
        </div>

    )
}

export default Services