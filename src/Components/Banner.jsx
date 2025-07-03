import React from 'react'
import book from "../assets/book.jpg"

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1' >
        <div className='space-y-9'>
        <h1 className='text-4xl font-bold'>Hello! Welcome to learn something <span className='text-pink-500'>new Everyday</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ea, at ipsam enim tempore aperiam. Sed cumque, ab quia quo asperiores iste hic dicta tempore dolorum quos. Veritatis, totam.</p>

        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    </g>
  </svg>
  <input type="text" className="grow" placeholder="index.php" />
</label>

        </div>
        <button className="btn btn-secondary mt-5">Secondary</button>
        
        
        </div>
       
        <div className='w-full md:w-1/2 order-1 md:order-2 '>
        <img className='h-90 w-90 m-1 md:m-30 ' src={book} alt="" />
        
        </div>
    </div>
    
    </>
  )
}

export default Banner