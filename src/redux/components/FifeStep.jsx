import React ,{useContext ,useState}  from 'react'
import {Button , IconButton, TextField} from '@mui/material'
import Box from '@mui/material/Box';
import { multiStepContext } from '../stepContext';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './fife.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function FifeStep() {
    const {setStep, userData , setUserData}=useContext(multiStepContext) 
    const [physical, setAge] =useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
      setUserData({...userData,"physical":event.target.value});
  
    };
  return (
  <>
       <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>5 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
  <div className={style.fife}>
    <h1 className={style.h1}>your current level of physical activity </h1>
    <div>
    <Box sx={{ minWidth: 120 }} >
      <FormControl className={style.FormControl} variant="standard">
        <Select
        className={style.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color='secondary'
          value={physical}
          label=""
          onChange={handleChange}
        >
          <MenuItem value='Sedentary'>Sedentary</MenuItem>
          <MenuItem value='Light'>Light</MenuItem>
          <MenuItem value='Modrate'>Modrate</MenuItem>
          <MenuItem value='Vigorous'>Vigorous</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    <div className={style.btns}>
<IconButton onClick={()=>setStep(5)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(7)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
    {/* <div>
    <Button variant='outlined'  onClick={()=>setStep(5)} className='btn-second-back'>back</Button><span> </span>
    <Button variant='contained' onClick={()=>setStep(7)} className='btn-second-next'>next</Button>
    </div> */}
  </div>
  </>
  )
}

export default FifeStep