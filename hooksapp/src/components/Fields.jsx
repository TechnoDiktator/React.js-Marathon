import React from 'react'
import { TextField  , Button , Stack} from '@mui/material';
import { AccessAlarm, ThreeDRotation , Add , Delete } from '@mui/icons-material';
function Fields({name , email  , key , index}) {
  return (

    
    <div className='data_val'>
        <h4>{name}</h4>  
        <h4>{email}</h4>  
        <Stack>
        <Button variant = "contained" color= "error"><Delete></Delete></Button>  
        </Stack>
    </div>
    
  )
}

export default Fields