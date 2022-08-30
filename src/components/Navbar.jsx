import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack 
      direction='row' 
      alignItems='center' 
      p={2} 
      sx={{ 
        positon: 'sticky', 
        backgroun: '#000',
        top: 0,
        justifyContent: 'space-between'
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant='h4' fontWeight='bold' color='#008245' >ReactTube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar