import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineSearch,AiOutlineShoppingCart,AiOutlineClose} from 'react-icons/ai'
function NavBar(props) {

    const[navbar,SetNavbar]=useState(false)
    return (
        <div className='mx-auto container flex justify-between flex-row mt-8' >
            <div className=' flex flex-row m-2 p-2 items-center' >
            <div className='cursor-pointer' onClick={()=>SetNavbar(!navbar)}><AiOutlineMenu size={30}></AiOutlineMenu></div>
            <h1 className='text-xl ml-1'> Best Eats</h1>


            </div>

             {/*search input */}

             <div className='bg-slate-200 rounded-full flex items-center md:w-1/2'>
                <AiOutlineSearch size={30} className="ml-4"></AiOutlineSearch>
                <input type="text" placeholder='Search food' className='text-xl bg-transparent p-4 w-full focus:outline-none'/>

             </div>

             {/*cart button */}

             <button className='bg-black text-white flex flex-row rounded-full items-center px-6 py-2.5'>
                <AiOutlineShoppingCart size={30} className="px-1"></AiOutlineShoppingCart>
                cart


             </button>

              {/*Mobile Menu */}
              {/*Overlay*/ }

              {navbar ? <div className='bg-black/70 top-0 left-0	w-full h-screen fixed z-10'></div>
 : '' }

              
              {/*Menu*/ }
              <div className={ navbar ? 'bg-white top-0 h-screen left-0 sm:w-1/2 md:w-1/6 fixed z-10 duration-200' : 'bg-white top-0 h-screen left-[-100%] duration-500 w-1/6 fixed z-10' }>
                <AiOutlineClose size={30}  onClick={()=>SetNavbar(!navbar)} className='absolute mx-2 my-2 right-0 cursor-pointer'></AiOutlineClose>
                            <nav>

                                <ul className='flex flex-col p-4'>
                                    <li className=' p-3'>Orders</li>
                                    <li className=' p-3'>Best Foods</li>
                                    <li className=' p-3'>Favorites</li>
                                    <li className=' p-3'>Promotions</li>
                                    <li className=' p-3'>Helps</li>
                                </ul>




                            </nav>


              </div>






           
        </div>
    );
}

export default NavBar;