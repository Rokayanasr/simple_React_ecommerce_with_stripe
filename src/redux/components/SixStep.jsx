import React ,{useContext ,useState}  from 'react'
import Box from '@mui/material/Box';
import { multiStepContext } from '../stepContext';
import {IconButton} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './six.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SixStep() {
    const {setStep, userData , setUserData}=useContext(multiStepContext)
    const [food, setDeit] =useState('');
    const handleChange2 = (event) => {
        setDeit(event.target.value);
        setUserData({...userData,"food":event.target.value});
      };
  return (
<>
<Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>6 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.six}>
  <h1 className={style.h1}>Your typical diet</h1>
    <div>
    <Box sx={{ minWidth: 120 }} >
      <FormControl className={style.FormControl} variant="standard">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={food}
          color='secondary'
          className={style.select}
          label="current level of physical activity"
          onChange={handleChange2}
        >
          <MenuItem value='Vegetarian'>Vegetarian</MenuItem>
          <MenuItem value='Vegan'>Vegan</MenuItem>
          <MenuItem value='non-Vegetarian'>non Vegetarian</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    <div className={style.btns}>
<IconButton onClick={()=>setStep(6)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(8)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
</div>

</>
  )
}

export default SixStep