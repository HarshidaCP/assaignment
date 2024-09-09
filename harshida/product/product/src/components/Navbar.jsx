import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h5' component="div" align='center' sx={{flexGrow:1}}>
                PRODUCT MANAGEMENT APP
            </Typography>
            <Link to='/'>
            <Button variant="contained" color="secondary">HOME</Button>
            </Link>&nbsp;
            <Link to='/a'>
            <Button variant="contained" color="secondary">ADD</Button>
            </Link>&nbsp;
            

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
