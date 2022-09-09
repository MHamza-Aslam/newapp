import React from 'react'
import {FaFacebook,FaGithub,FaInstagram,FaTwitter,FaTwitch} from "react-icons/fa"
function Footer() {
  return (
    <div className='w-full px-2 py-8 mt-24 text-gray-300 bg-slate-900'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='pt-2 font-bold uppercase'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='pt-2 font-bold uppercase'>Support</h6>
          <ul>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>guide</li>
            <li className='py-1'>Data</li>
          </ul>
        </div>
        <div>
          <h6 className='pt-2 font-bold uppercase'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Job</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Partner</li>
          </ul>
        </div>
        <div>
          <h6 className='pt-2 font-bold uppercase'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className='py-4'>The latest news ,articles and resources, send to your inbox weekly.</p>
          <form className='flex flex-col sm:flex-row'>
            <input type="Email" className='w-full p-2 mb-4 mr-4 rounded-md'placeholder='Enter Email...'/>
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex-col flex max-w-[1240px] mx-auto   justify-between sm:flex-row px-2 py-4 text-center text-gray-500'>
        <p className='py-4'>2020 Workflow,LLC.All right reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-4xl'>
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
          <FaTwitch/>
          <FaGithub/>
        </div>
      </div>
    </div>
  )
}

export default Footer