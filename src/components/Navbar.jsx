import React from 'react'
import{NavbarMenu} from '../data/data'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IconMenu } from '../data/icon'
import { MdLogin } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className=" ">
        <div className="container flex justify-between">
            
           <div
  className="py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 
             font-bold text-lg sm:text-xl md:text-2xl 
             flex items-center gap-2 sm:gap-3 " >
  <p>MY</p>
  <p className="text-orange-500">FoRmS</p>
</div>
            <div className='hidden md:block container py-9 px-20'>
                <ul className='flex items-center gap-6 sm:text-base md:text-lg w-full max-w-md'>
                    {
                        NavbarMenu.map((item)=>{
                            return(
                                <li key={item.id}>
                                     <a className="!text-gray-600  inline-block py-1 px-3 hover:!text-orange-500 transition-color duration-500" href={item.link}>{item.title}</a>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>                                      
            <div className=' hidden md:block container px-4 py-7 '>
                <ul className='flex items-center gap-4 sm:text-base md:text-lg'>
                    {
                        IconMenu.map((items)=>{
                            return(
                                <li key={items.id}>
                                    <button className="!text-gray-600 inline-block py-1 px-3 hover:!bg-orange-500 hover:!text-white  !transition-color duration-600 " href="#">
                                        <items.icon className='text-xl'/> 
                                        
                                    </button>

                                    
                                </li>
                            )
                        })
                        

                    
                    }
                    <li>
                        <button className='!text-gray-600 inline-block py-1 px-3 hover:!bg-orange-500 hover:!text-white  !transition-color duration-600'
                         
                        >
                        <span>Login</span>
                 </button>
                    </li>
                </ul>  
                
                 
                            
            </div>
            
        </div> 
        <div className="border-b border-gray-500 my-4 container mx-auto px-2 w-full "></div>
        
    </nav>
    
  )
}
export default Navbar
