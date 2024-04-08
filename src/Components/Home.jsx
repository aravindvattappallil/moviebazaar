import SimpleSlider from "./SimpleSlider";
import Box from "@mui/system/Box";
import Sections from "./Sections";
import SearchAppBar from "./Newnav";
import { useState } from "react";

const Home = () => {
    const [display,setDisplay]= useState(true)
    const displayfunc=(state)=>{
        setDisplay(state)
    }
  return (
    <div>
      <Box sx={{ px: 20, pb: 10 }} className="home">
        <SearchAppBar func ={displayfunc}/>
       { display && <SimpleSlider />}
       {display && <Sections />}
      </Box>
    </div>
  );
};
export default Home;
