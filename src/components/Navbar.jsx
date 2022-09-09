import React, {useState} from 'react'
import { Link,  animateScroll as scroll, } from 'react-scroll'
import {GiHamburgerMenu} from "react-icons/gi"
import {TbArrowsCross} from "react-icons/tb"
 function Navbar() {
const [nav,setNav]=useState(false)
const handleClick=()=>setNav(!nav)
const handleClose=()=>setNav(!nav)
    
  return (
    <div className='w-screen h-[80px] bg-zinc-300 z-10 fixed drop-shadow-lg'>
        <div className="flex items-center justify-between w-full h-full px-2">
            <div className="flex items-center ">
                <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                <li className='font-bold'><Link   to="Home"   smooth={true}  duration={500}>Home</Link></li>
                <li className='font-bold'><Link   to="About"   smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='font-bold'><Link   to="Support"   smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='font-bold'><Link   to="Platform"   smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='font-bold'><Link   to="Pricing"   smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                  
                  
                </ul>
            </div>
            <div className="hidden pr-4 md:flex">
                <button className='mr-4 text-black bg-transparent border-none'>SIGN IN</button>
                <button className='px-8 py-3'>SIGN UP</button>
            </div>
<div className="mr-4 md:hidden" onClick={handleClick}>
    {!nav ? <GiHamburgerMenu className='text-3xl '/> :<TbArrowsCross className='text-3xl'/>}
   
</div>
        </div>


      <ul className={!nav ? "hidden" : "absolute bg-zinc-300 w-full px-8 "}>
                <li className='w-full font-bold border-b-2 border-zinc-300'><Link onClick={handleClose}  to="Home"   smooth={true}  duration={500}>Home</Link></li>
                <li className='w-full font-bold border-b-2 border-zinc-300'><Link onClick={handleClose}  to="About"   smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='w-full font-bold border-b-2 border-zinc-300'><Link onClick={handleClose}  to="Support"   smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='w-full font-bold border-b-2 border-zinc-300'><Link onClick={handleClose}  to="Platform"   smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='w-full font-bold border-b-2 border-zinc-300'><Link onClick={handleClose}  to="Pricing"   smooth={true} offset={-50} duration={500}>Pricing</Link></li>






        
      
      <div className="flex flex-col my-4">
        <button className='px-8 py-3 mb-4 text-indigo-600 bg-transparent'>SIGN IN </button>
        <button className='px-8 py-3'>SIGN OUT </button>
      </div>
      </ul>
         
    </div>
  )
}
export default Navbar