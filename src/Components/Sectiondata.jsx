import React, { useEffect, useState } from "react";

import './style.css'
import axios from "axios";
import Slider from "react-slick";
import Box from '@mui/system/Box';
import ActionAreaCard from "./DetailScreen";



const Sectiondata =(props)=>{

    const[movies, setMovies]=useState([])
    const [detail,setDetail]=useState("")
    const [visible,setVisible]= useState(false)
    

    const apiURL = props.url


    useEffect(()=>{
        fetchmovie()
       
    },)

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

const handleonclick=(id)=>{
    console.log('Clicked movie '+id)
    setDetail(id)
    setVisible(!visible)

    
}


  return (
    <Box sx={{pt:4}}>
    <div className="slider-container">
         <h2 className='title'>{props.title}</h2>
      <Slider {...settings}>
      {movies.map((item)=>
      <div key={item.id}>
          <img onClick={()=>{handleonclick(item.id)}} className= 'poster' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="posters" />
          </div>)}

                 
      </Slider>
    </div>
    {visible&&<ActionAreaCard movies ={movies} id={detail} />}
    </Box>
  );
}
export default Sectiondata