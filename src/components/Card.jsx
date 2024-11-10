import React from 'react'
import image from '../assets/images/2.jpg'


const Card = () => {
  return (
    <>
        <div className=" flex items-center bg-black h-screen justify-center">
            <div className='bg-[#1e1f1e]  rounded-lg text-white p-6 h-fit w-96'>
                <div className='flex justify-center'>
                    <img className='w-24 rounded-full flex justify-center' src={image} alt="image" />
                </div>
                    <div className='text-center font-bold text-3xl'>Sat Narayan Sah</div>
                    <div className='font-bold text-yellow-600 text-center mt-3 mb-8'>Janakpur,Dhanusha,Nepal</div>
                    <div className='grid gap-4'>

                    <button className='bg-[#323232] w-full rounded-lg py-5 font-bold hover:bg-yellow-600'>GitHub</button>
                    <button className='bg-[#323232] w-full rounded-lg py-5 font-bold hover:bg-yellow-600'>FrontendMentor</button>
                    <button className='bg-[#323232] w-full rounded-lg py-5 font-bold hover:bg-yellow-600'>LinkedIn</button>
                    <button className='bg-[#323232] w-full rounded-lg py-5 font-bold hover:bg-yellow-600'>Twitter</button>
                    <button className='bg-[#323232] w-full rounded-lg py-5 font-bold hover:bg-yellow-600'>Instagram</button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Card