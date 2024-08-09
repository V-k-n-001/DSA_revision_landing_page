import React from 'react';
import { GiCheckMark } from "react-icons/gi";

const Body = () => {
  return (
    <div className=' md:flex flex-col'>
        <div className='md:flex flex-col md:px-8 lg:grid lg:grid-cols-[60%_40%] divide-x'>
        <div className='flex flex-col items-center px-8 py-20 font-bold text-7xl md:text-8xl md:font-bold lg:text-8xl lg:flex lg:flex-col lg:items-start'>
            <h1 className='text-lime-500'><span className='text-black'>ATTEND LIVE </span> 
             CLASSES EVERY WEEK</h1>
            <p className='font-medium text-gray-500 text-2xl px-4 py-4 '>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
            <button className=' bg-lime-600 text-base text-white px-7 py-4 font-bold rounded-full hover:bg-lime-700'>Join 24/7 WhatsApp+discord for $5/month</button>
        </div>
        <div>
            <img src="./src/assets/image.png" alt="Image" className=' lg:float-right'/>
        </div>

        {/* 2nd Section */}
        </div>
        <div className='flex flex-wrap items-center justify-center text-xl mt-12 gap-6
         '>
            <img src="./src/assets/icon-guides.svg" alt="guides_image" />
            <p>5+Guides for free.</p>

            <img src="./src/assets/icon-courses.svg" alt="Courses_image" />
            <p>Exclusive Courses & Projects.</p>

            <img src="./src/assets/icon-whatsapp.svg" alt="whatsApp_image" />
            <p>24/7 WhatsApp Support Group.</p>

            <img src="./src/assets/icon-sessions.svg" alt="Session_image" />
            <p>1:1 Free Session.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-20 py-20 lg:grid lg:grid-cols-3 gap-10'>
            <div className='flex flex-col justify-center items-center'>
            <img src="./src/assets/avatar-aryan.webp" alt="review image"  className='rounded-full h-20 w-20'/>
            <p className='text-wrap'>"This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level."
            </p>
            <p className=' font-bold'>Aryan Singh</p>
            <p>SWE at Google</p>
            <img src="./src/assets/icon-star.svg" alt="Rating stars" className='h-6' />
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img src="./src/assets/avatar-kevin.webp" alt="review image"  className='rounded-full h-20 w-20 '/>
            <p className='text-wrap'>"The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community."
            </p>
            <p className=' font-bold'>Kevin Smith</p>
            <p>SWE at Tesla</p>
            <img src="./src/assets/icon-star.svg" alt="Rating stars" className='h-6'/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img src="./src/assets/avatar-Umang.webp" alt="review image"  className='rounded-full h-20 w-20'/>
            <p className='text-wrap'>"Joining this community was one of the best decisions I've made for my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly recommend this community"
            </p>
            <p className=' font-bold'>Umang Chaudhary</p>
            <p>SWE at Tiktok</p>
            <img src="./src/assets/icon-star.svg" alt="Rating stars" className='h-6'/>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold lg:text-6xl'>SIMPLE NO-TRICKS PRICING</h1>
            <p className='mt-4 px-4 lg:text-2xl'>Everything you need to grow 10x for less than a coffee.</p>
        </div>
        {/* 3rd Section */}
        <div className='border-2 mt-10 m-14 rounded-2xl md:mx-24 lg:w-2/3 lg:ml-60 lg:grid lg:grid-cols-2  divide-x'>
            <div className='px-10'>
            <h1 className='font-bold text-2xl  pt-8 pb-3'>Premimum Elite Subscription</h1>
            <p>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
            <p className='pt-3 text-green-700 font-bold'>What's included  ------------------------------------------- </p>
            
            <ul className="flex flex-wrap  items-center mt-6 gap-4 leading-8">
            <GiCheckMark  className='text-green-600'/> 
            <li className='flex gap-x-3'>Expert Mentors</li>
            <GiCheckMark  className='text-green-600'/> 
            <li> Exclusive Courses</li>
            
            <GiCheckMark  className='text-green-600'/>
            <li> Networking & Collaboration</li>
            <GiCheckMark  className='text-green-600'/>
            <li>  Career Guidance</li>
            </ul>
            </div>
            <div className=' bg-gray-50 border-2 m-2 px-4 py-4 rounded-2xl flex  flex-col items-center gap-5'>
                <p className='font-bold'>Less than a cup of coffee</p>
                <p className='black text-xl font-bold'>$5 <span className='line-through'>$1000</span></p>
                <button className='rounded-full font-bold px-4 py-3 bg-green-600'>Join Community</button>
                <div className='flex'>
                    <img src="./src/assets/avatar-aryan.webp" alt="img" className='rounded-full h-16 ' /><img src="./src/assets/avatar-kevin.webp" alt="img1" className='rounded-full h-16  
                    '/><img src="./src/assets/avatar-umang.webp" alt="img2" className='rounded-full h-16'/><img src="./src/assets/avatar-1.png" alt="img3" className='rounded-full h-16' /><img src="./src/assets/avatar-2.png" alt="img4" className='rounded-full h-16'/>
                </div>
                <p>100+ Active Members</p>
            </div>
        </div>

        {/* 4th section */}
        <div className='flex flex-col  mt-10 lg:items-center lg:px-56 gap-8'>
            <h1 className='font-bold text-3xl px-32 lg:text-6xl '>EVERYTHING  YOU NEED IN ONE COMMUNITY</h1>
            <p className=' text-gray-500 text-lg px-32 lg:text-2xl'>Unleashing your digital potential for lasting success</p>
        </div>

        <div className='lg:grid lg:grid-cols-3 lg:items-center '>
            <div className='flex flex-col items-center'>
           <img src="./src/assets/illustration-mentors.svg" alt="mentor" className='h-60 mt-16'/>
           <h1 className='text-2xl font-bold'>EXPERT MENTORS</h1>
           <p className=' text-gray-500 p text-lg px-40 lg:px-28'>Get personalized guidance from expert mentors to take your coding skills to the next level.</p>
           </div>
           <div className='flex flex-col items-center'>
          <img src="./src/assets/illustration-networking.svg" alt="" className='h-60 mt-16'/> 
          <h1 className='text-2xl font-bold'>NETWORKING</h1>
          <p className=' text-gray-500  text-lg px-40 lg:px-28'>Connect with like-minded coders from around the world and collaborate on exciting projects.</p>
          </div>
          <div className='flex flex-col items-center'>
          <img src="./src/assets/illustration-courses.svg" alt=""  className='h-60 mt-16'/>
          <h1  className='text-2xl font-bold'>COURSES</h1>
          <p className=' text-gray-500  text-lg px-40 lg:px-28'>Exclusive courses in Full Stack,Al,Blockchain, and more to help you stay ahead of the curve.</p>
          </div>
        </div>

        <div className=' px-8 flex flex-wrap mt-20 lg:px-40 lg:mt-32 '>
            <img src="./src/assets/adobe.svg" alt="" />
            
            <img src="./src/assets/airbnb.svg" alt="" />

            <img src="./src/assets/figma.svg" alt="" />

            <img src="./src/assets/framer.svg" alt="" />
            
            <img src="./src/assets/google.svg" alt="" />

            <img src="./src/assets/dropbox.svg" alt="" />
        </div>

        <div className=' lg:grid grid-cols-[60%_40%]'>
        <div className='mt-20 flex flex-col flex-wrap lg: gap-4 lg:pl-16'>
            <h1  className='font-bold text-3xl px-32 lg:px-28 lg:text-5xl'>GAIN A COMPETITIVE EDGE IN JOB MARKET</h1>
            <p className=' text-gray-500 text-lg px-32'>Join founder, freelancers, desigers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee. </p>

            <h2 className='text-green-600 text-xl font-bold px-32 mt-5 '>WHAT YOU'LL GET</h2>
            <div className=' gap-4 items-center px-36 flex mt-4'>
                <img src="./src/assets/icon-guides-2.svg" alt=""className='h-8'/>
                <p className='text-xl'>Comprehensive guides, projects, & courses</p>
                </div>
                <div className=' gap-4 items-center px-36 flex mt-3'>
                <img src="./src/assets/icon-job.svg" alt="" className='h-8' />
                <p className='text-xl'>Exclusive job+ internship postings</p>
                </div>
                <div className=' gap-4 items-center px-36 flex mt-3'>
                <img src="./src/assets/icon-tips.svg" alt="" className='h-8'/>
                <p className='text-xl'>1:1 Career guidance & mentorship</p>
                </div>
            
            </div>
            <div className='flex flex-row justify-center'>
                <img src="./src/assets/illustration-job.svg" alt="" className='h-60 mt-16 lg:h-3/4 lg:pr-52'/>
            </div>
            </div>
        </div>
  )
}

export default Body;
