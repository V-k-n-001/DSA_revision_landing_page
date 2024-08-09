import React from 'react';

const Header = () => {
  return (
    
    <div className='px-4 py-4 flex justify-between item-center  bg-white sticky top-0 scroll-smooth'>
        <div>
        <img src="./src/assets/logo.svg" alt="logo"/>
        </div>
         <div>
        <ul className='hidden md:flex justify-between items-center text-gray-400  rounded-full bg-gray-100 px-2 py-2  font-semibold '>
            <li><a href="#" className='hover:bg-white rounded-full
             px-3 py-2'>Intro</a></li>
            <li><a href="#" className='hover:bg-white rounded-full
             px-3 py-2'>Pricing</a></li>
            <li><a href="#" className='hover:bg-white rounded-full
             px-3 py-2'>Features</a></li>
            <li><a href="#" className='hover:bg-white rounded-full
             px-3 py-2'>Testimonials</a></li>
        </ul>
        </div>
        <div>
        <button className='flex justify-between items-center bg-black text-white px-2 py-2 font-bold rounded-3xl hover:bg-lime-600'>Join Community</button>
        </div>
    </div>
  );
}

export default Header;
