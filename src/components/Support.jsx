import React from 'react'
import {BsTelephoneOutbound} from "react-icons/bs"
import {HiArrowSmRight} from "react-icons/hi"
import {CgSmartphoneChip} from "react-icons/cg"
import {GrSupport} from "react-icons/gr"
import Pic2 from "../components/assets/support.jpg"

function Support() {
  return (
    <div name="Support" className='w-full mt-24'>
<div className="w-full h-[700px] bg-gray-900/90 absolute">
<img src={Pic2} alt="/" className='object-cover w-full h-full mix-blend-overlay'/>
</div>
<div className="max-w-[1240px] mx-auto relative text-white">
    <div className="px-4 py-12">
        <h2 className='pt-8 text-3xl text-center uppercase text-slate-300'>Support</h2>
        <h3 className='py-6 text-5xl font-bold text-center'>Finding the right team</h3>
        <p className='py-4 text-3xl text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quos quisquam rem labore autem sunt provident harum cupiditate rerum dolorum porro quis optio illum, soluta eaque. Ab consectetur ut eveniet.</p>
    </div>
    <div className="relative grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
        <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
                <BsTelephoneOutbound className="w-16  p-8  bg-indigo-600 rounded-lg mt-[-4rem]"/>
                <h3 className='my-6 text-2xl font-bold'>Sales</h3>
                <p className='text-xl text-gary-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum totam delectus distinctio libero corrupti accusamus laboriosam fugit facere nisi.</p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
                <p className='flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='w-5 ml-2'/></p>
            </div>
        </div>
         <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
                <GrSupport className="w-16  p-8  bg-indigo-600 rounded-lg mt-[-4rem]"/>
                <h3 className='my-6 text-2xl font-bold'>Technical Support </h3>
                <p className='text-xl text-gary-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum totam delectus distinctio libero corrupti accusamus laboriosam fugit facere nisi.</p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
                <p className='flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='w-5 ml-2 '/></p>
            </div>
        </div>
        <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
                <CgSmartphoneChip className="w-16  p-8  bg-indigo-600 rounded-lg mt-[-4rem]"/>
                <h3 className='my-6 text-2xl font-bold'>Media Inquiries</h3>
                <p className='text-xl text-gary-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum totam delectus distinctio libero corrupti accusamus laboriosam fugit facere nisi.</p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
                <p className='flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='w-5 ml-2'/></p>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Support