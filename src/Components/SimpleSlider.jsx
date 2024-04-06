import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import './style.css'
import axios from "axios";
export default function SimpleSlider() {

  const [top,setTop]=useState([])
  const apiURL = `https://api.themoviedb.org/3/trending/all/week?api_key=1d6db5e20e837d54c1b4dbd434997333&language=en-US`

useEffect(()=>{
  fetchmovie()
},[])


  const fetchmovie = async ()=>{
    try{ 
        const res = await axios.get(apiURL)
        console.log(res)
        setTop(res.data.results)
    }
    catch(err){
        console.log(err)
    }
}

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <Slider  {...settings}>
      {top.map((item)=>(<div className="sliderMain" key={item.id}>
        <img className="topSlideImage" src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}/>
        <h1 className="title">{item.original_title?item.original_title:item.original_name}</h1>

      </div>))}
     
    </Slider>
  );
}