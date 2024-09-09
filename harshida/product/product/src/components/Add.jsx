import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br/><h4>Add Product</h4><br /> 
    
     <TextField type='text' label="Product Name" variant="outlined" /><br /><br /> 
    <TextField type='text' label="Image" variant="outlined" />  <br /><br />
    <TextField type='text' label="Price" variant="outlined" /><br /><br />
    <TextField type='text' label="Category" variant="outlined" /><br /><br />
      <Button  variant="contained" type='submit'>Add Product</Button>&nbsp;
    
    
    </div>
  )
} 


export default Add
