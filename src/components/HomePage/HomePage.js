


import React,{useState} from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./HomePage.scss";

export default function HomePage() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value );
  };

  return (
    <>
   
    <Box className="hContainer" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div className='showdropdowndata'>
       {
        age==10?<p>She is studying in 5th standard</p>:age==20?<p>She is doingin Graduation</p>:age==30?<p>She is House Wife</p>:<p>She is old women</p>
       }
    </div>
    </>
  );
}