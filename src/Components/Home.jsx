import React, { useEffect, useState } from "react";
import SimpleSlider from "./SimpleSlider";
import Box from '@mui/system/Box';
import Header from "./Navbar";
import Sections from "./Sections";



const Home =()=>{

    return(
        <Box sx={{px:20,pb:10}} className="home">
           <Header/>

            <SimpleSlider/>
            <Sections/>
        </Box>
    )
}
export default Home