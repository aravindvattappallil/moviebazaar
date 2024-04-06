import React from "react";
import Sectiondata from "./Sectiondata";

const Sections=()=>{

     const API_KEY='1d6db5e20e837d54c1b4dbd434997333'
 const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
// const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`
 const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
 const horror =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
 const romance =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
 const documentaries =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
    return(
        <div>
<Sectiondata title="Action" url={action}/>
<Sectiondata title="Comedy" url={comedy}/>
<Sectiondata title="Horror" url={horror}/>
<Sectiondata title="Romance" url={romance}/>
<Sectiondata title="Documentaries" url={documentaries}/>
        </div>
    )}
    export default Sections