import React from 'react'
import list from "../assets/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
//slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    //filter the data
    const filterdata=list.filter((data)=>{ return data.category==="free"})
    console.log(filterdata)
  return (
    <>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pb-2'>
<h1 className='text-xl font-bold'>Free offered courses</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis ea, at ipsam enim tempore aperiam. Sed cumque, ab quia quo</p>

</div>
<div>
<Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div> */}
        {filterdata.map((items)=>{
         return <Cards  items={items} key={items.id}/>
        })}
      </Slider>

</div>
    </>
    
  )
}

export default Freebook