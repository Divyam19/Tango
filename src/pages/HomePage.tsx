import React from 'react'
import "./HomePage.css"
const HomePage = () => {
  return (
    <div>
        <section className='-z-50 banner relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 tet-center'>
                <p className='text-2xl lg:text-7xl font-bold z-10 py-5 text-center'>
                    Tango
                </p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl text-center'>Taste the convenience: food delivery at a moments notice</p>
            </div>
            <div className='cover top-0 left-0 right-0'></div>
            <div className='fadeout'>1212</div>
        </section>
    </div>
  )
}

export default HomePage