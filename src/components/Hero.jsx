import React from 'react'
import {BsCloudUpload} from "react-icons/bs"
import {FaDatabase} from "react-icons/fa"
import {HiOutlinePaperAirplane} from "react-icons/hi"
import {BiServer} from "react-icons/bi"
import Pic1 from "../components/assets/cyber.png"
 const Hero = () => {
  return (
    <div name="Home" className='flex flex-col justify-between sm:w-full sm:h-screen bg-slate-900'>
<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
    <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
        <p className='text-2xl text-white'>Unique Sequencing & Production</p>
        <h1 className='py-3 text-5xl font-bold text-white md:text-7xl'>Cloud Management</h1>
        <p className='text-2xl text-white'>This is our tech brand.</p>
        <button className='px-6 py-3 sm:w-[60%] my-4 '>Get Started</button>
    </div>
    <div className="">
        <img src={Pic1} alt="/" className='w-full' />
    </div>
    <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
    border border-slate-300 rounded-xl text-center shadow-xl">
        <p>Data services</p>
    <div className="flex flex-wrap justify-between px-4">
        <p className='flex px-4 py-2 text-slate-500'><BsCloudUpload className='h-6 text-indigo-600'/> App Security</p>
        <p className='flex px-4 py-2 text-slate-500'><FaDatabase className='h-6 text-indigo-600'/> Dashboard Design</p>
        <p className='flex px-4 py-2 text-slate-500'><HiOutlinePaperAirplane className='h-6 text-indigo-600'/> Cloud Data</p>
        <p className='flex px-4 py-2 text-slate-500'><BiServer className='h-6 text-indigo-600'/> API</p>
    </div>

    </div>
</div>

    </div>
  )
}
export default Hero