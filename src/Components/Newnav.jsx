import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import axios from 'axios';
import BasicStack from './Searchpage';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.info.dark, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.info.dark, 0.25),
  },
  marginLeft: 0,
  marginRight:20,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({func} ) {

  const [searchActive, setSearchActive]= useState(false)
  const [movies, setmovies]= useState(false)
const apiURL="https://api.themoviedb.org/3/search/movie?api_key=1d6db5e20e837d54c1b4dbd434997333&query="











  const searchMovie= async(e)=>{
   
    if (e.target.value.length>0){
      try{
      const response= await axios.get(apiURL+e.target.value)
      console.log(response.data.results)
     setSearchActive(true)
     func(false)
     setmovies(response.data.results)
     
     
    }
    catch(err){
      console.log(err)
  }


  }
  else{
    setSearchActive(false)
    func(true)
  }
}



  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor:"black"}} position="static">
        <Toolbar>
        <Button size="small">Subscribe</Button>
          <Typography
           align="center"
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movie Bazaar
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             onChange={searchMovie}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
     {searchActive && <BasicStack movies={movies}/>}
    </Box>
  );
}
