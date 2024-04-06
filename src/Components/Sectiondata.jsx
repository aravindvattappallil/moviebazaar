import React, { useEffect, useState } from "react";

import './style.css'
import axios from "axios";
import Slider from "react-slick";
import Box from '@mui/system/Box';


const Sectiondata =(props)=>{

    const[movies, setMovies]=useState([])
    

    const apiURL = props.url


    useEffect(()=>{
        fetchmovie()
    },[])

    const fetchmovie = async ()=>{
        try{ 
            const res = await axios.get(apiURL)
            console.log(res)
            setMovies(res.data.results)
        }
        catch(err){
            console.log(err)
        }
    }

 

   const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,

    
  };
  return (
    <Box sx={{pt:4}}>
    <div className="slider-container">
         <h2 className='title'>{props.title}</h2>
      <Slider {...settings}>
      {movies.map((item)=>
      <div key={item.id}>
          <img onClick={console.log('hai')} className= 'poster' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="posters" />
          </div>)}

                 
      </Slider>
    </div>
    </Box>
  );
}
export default Sectiondata