import React from 'react'

function Cards({items}) {
    console.log(items)
  return (
   <>
   <div className='flex md:flex-col flex-row mt-8'>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
  <figure>
    <img
      src={items.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary ">{items.category}</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${items.price}</div>
      <div className="badge badge-outline hover:text-pink-400 cursor-pointer">Buy now</div>
    </div>
  </div>
</div>

   </div>
   
   </>
  )
}

export default Cards