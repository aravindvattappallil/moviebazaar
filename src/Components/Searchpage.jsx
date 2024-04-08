import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode = '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      {props.movies.map(item => (
      <Item key={item.id}><div className='searchPageMain'>
        <Box 
        component='img'
        loading='true'
        sx={{height:300}}
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
{/* <img className="searchpageimg" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/> */}
<div className='searchpageright'>
<Typography component="div">
     
      <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h6.fontSize' ,ml:3,mb:0}}>{item.title}</Box>
      <Box sx={{ typography: 'subtitle2' ,}}>{item.release_date}</Box>
      <Box sx={{ fontSize: 'default', m: 1 ,mx:3}}>{item.overview}</Box>
    </Typography>
</div>
      </div>
        
      </Item>
    ))}
      </Stack>
    </Box>
  );
}