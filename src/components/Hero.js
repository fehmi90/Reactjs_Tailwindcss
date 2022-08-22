import React from 'react';

function Hero(props) {
    return (
        <div className=' container mx-auto '>

            <div className='  relative my-10'>
                <div className='w-full h-full  flex flex-col justify-center absolute max-h-[600px]'>    
                    <h1 className='lg:text-7xl sm:text-4xl text-center text-white font-semibold  '>The Best Food</h1>
                </div>
                <img alt="hero" className=' object-cover w-full max-h-[600px]' src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>

        </div>
    );
}

export default Hero;