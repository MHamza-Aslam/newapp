import React from 'react'

 const About = () => {
  return (
    <div name="About" className='w-full my-32'>
        <div className="max-w-[1240px] mx-auto ">
            <div className="text-center">
                <h2 className='text-5xl font-bold '>Trusted by developers across the world</h2>
                <p className='py-6 text-3xl text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta itaque consequuntur assumenda, perspiciatis veritatis</p>
            </div>
            <div className="grid gap-1 px-2 text-center md:grid-cols-3">
                <div className="py-8 border shadow-xl rounded-xl">
                    <p className='text-6xl text-indigo-600'>100%</p>
                    <p className='mt-2 text-gary-400'>completion</p>
                </div>
                <div className="py-8 border shadow-xl rounded-xl">
                    <p className='text-6xl text-indigo-600'>24/7</p>
                    <p className='mt-2 text-gary-400'>Delivery</p>
                </div>
                <div className="py-8 border shadow-xl rounded-xl">
                    <p className='text-6xl text-indigo-600'>100k</p>
                    <p className='mt-2 text-gary-400'>Transaction</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About