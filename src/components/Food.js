import React  from 'react';
import { useState } from 'react';
import {data} from '../data.js';

function Food(){

 const [foods, setFoods] = useState(data);

 const filterType = (category) => {
 setFoods(

    data.filter((item)=>{

        return item.category=== category;
    })
 );

}
 
        return (
            <div className='container mx-auto px-4 my-8'>
                <h1 className='text-5xl text-center text-black my-5 font-semibold'>
                    Top Rated Menu
                </h1>


                <div className=''>

                    <p>Filter Type</p>

                    <div  className='flex  flex-wrap'>
                        <button className='mr-2 rounded-full border border-yellow-600' onClick={()=>setFoods(data)}>All</button>
                        <button className='mr-2  rounded-full border border-yellow-600' onClick={()=>filterType('pizza')}>Pizza</button>
                        <button className='mr-2 rounded-full border border-yellow-600' onClick={()=>filterType('burger')}>Burgers</button>
                        <button className='mr-2  rounded-full border border-yellow-600' onClick={()=>filterType('chicken')}>Chiken</button>
                        





                    </div>




                </div>






                {/*dispaly food*/ }


                <div className='grid grid-cols-2 lg:grid-cols-4 mt-7 gap-4 '>

                    {foods.map((item , index) =>(

                        <div key={index} className="drop-shadow-xl bg-white">

                            <img src={item.image} alt={item.name} className="h-[280px] object-cover w-full " ></img>
                            <div className='flex justify-between px-3 my-5 font-semibold'>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>


                        </div>
                     

                    ))}
                        
                        
                        
                </div>

               
            </div>
        );
    }


export default Food;