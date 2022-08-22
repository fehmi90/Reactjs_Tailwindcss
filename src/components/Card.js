import React from 'react';

function Card(props) {
    return (
        <div>

            <div className='grid md:grid-cols-3 gap-4 container mx-auto '>


                <div className=' relative'>

                        <div className=' absolute text-white rounded-lg bg-black/50 h-full w-full'>
 
                            <h2 className='text-3xl font-semibold mt-12 pl-4'>Paella with seafood</h2>
                                    <p className='pl-4 text-xl'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolore magna aliqua. </p>
        
                        </div>  

                <img  className='max-h-[200px] rounded-lg w-full object-cover' alt="paella" src="https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                </img>  
                    
                </div>


                <div className=' relative'>

                        <div className=' absolute text-white rounded-lg bg-black/50 h-full w-full'>
 
                            <h2 className='text-3xl font-semibold mt-12 pl-4'>Paella with seafood</h2>
                                    <p className='pl-4 text-xl'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolore magna aliqua. </p>
        
                        </div>  

                <img  className='max-h-[200px] rounded-lg w-full object-cover' alt="paella"
                 src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                </img>  
                    
                </div>


                <div className=' relative'>

                        <div className=' absolute text-white rounded-lg bg-black/50 h-full w-full'>
 
                            <h2 className='text-3xl font-semibold mt-12 pl-4'>Paella with seafood</h2>
                                    <p className='pl-4 text-xl'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolore magna aliqua. </p>
        
                        </div>  

                <img  className='max-h-[200px] rounded-lg w-full object-cover' alt="paella" src="https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                </img>  
                    
                </div>


            </div>





            
        </div>
    );
}

export default Card;