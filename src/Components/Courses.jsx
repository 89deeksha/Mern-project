import React from 'react'
import list from '../assets/list.json'
import Cards from './Cards'
function Courses() {
  return (
   <>
   <div className='max-w-screen-3xl container mx-auto md:px-20 px-4 mt-20 text-center'>
    <div>
    <h1 className=' text-2xl items-center text-center justify-center'>We are delighted to have you <span className='text-pink-500'>here :)</span> </h1>
    <p className='justify-center text-center mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis sed architecto, doloribus nesciunt necessitatibus quo mollitia incidunt dolorem obcaecati dolorum enim quibusdam repellat voluptatum aperiam, unde ad minus placeat repudiandae?</p>
    <button className='mt-6 px-3 py-2 bg-pink-500 border-pink-500 rounded-md hover:bg-pink-600 '>Back</button>
    </div>
    <div>
        {
            list.map((items)=>{
                <Cards key={items.id} items={items}/>
            })
        }
    </div>
   </div>
   
   </>
  )
}

export default Courses