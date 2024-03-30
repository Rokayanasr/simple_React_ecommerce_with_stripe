import React ,{useContext ,useState}  from 'react'
import {IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { multiStepContext } from '../stepContext';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import style from './second.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SecondStep() {
  const {setStep, userData , setUserData}=useContext(multiStepContext) 
  const [selectedValue2, setSelectedValue2] = useState('');
  const handleRadioChange2 = (event) => {
    setSelectedValue2(event.target.value)
    setUserData({...userData,"position":event.target.value});
  };
  return (
<>
<Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>2 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.second}>
<h1 className={style.h1}>I currently am a </h1>
<div>
<FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Employee"
        name="radio-buttons-group"
        value={selectedValue2} 
        onChange={handleRadioChange2}
        > 
        <div className={style.test}>
          <FormControlLabel label="Employee"  value='Employee' control={<Radio color='secondary' />}/>
          </div>
        <div className={style.test}>
        <FormControlLabel value='Student' control={<Radio color='secondary'/>} label="Student" />
        </div>
      </RadioGroup>
    </FormControl>
</div>
<div className={style.btns}>
<IconButton onClick={()=>setStep(2)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(4)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
</div>
</>
  )
}

export default SecondStep








 


