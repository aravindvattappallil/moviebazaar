
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function ActionAreaCard(props) {

  return (<div>
{props.movies.map((item)=>{

    if(item.id===props.id){
        
    return(
        <Card key={item.id} sx={{ maxWidth: "100" ,mt:5}} style={{backgroundColor: "#1A2027"}}>
        <CardActionArea >
          <CardMedia
         
            component="img"
            loading='true'
            height="600"
            image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt={item.title}
          />
          
          <CardContent >
          <Typography component="div">
     
     <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h5.fontSize' ,ml:3,mb:0}}>{item.title}</Box>
     <Box sx={{ typography: 'subtitle2' ,ml:3}}>{item.release_date}</Box>
     <Box sx={{ fontSize: '500', m: 1 ,mx:3}}>{item.overview}</Box>
   </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
    }
})}

  </div>
   
  );
}
