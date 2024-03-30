import React ,{useContext ,useState} from 'react'
import {IconButton, TextField} from '@mui/material'
import { multiStepContext } from '../stepContext';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './third.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ThirdStep() {
  const {setStep, userData , setUserData ,submitedData}=useContext(multiStepContext) 
  const [selectedValue, setSelectedValue] = useState('');
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value)
    setUserData({...userData,"gender":event.target.value});
  };
  return (
    <>
        <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>3 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.third}>
  <h1 className={style.h1}>Select your gender</h1>
<div>
<FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="male"
        name="radio-buttons-group"
        value={selectedValue} 
        onChange={handleRadioChange}
        >
          <div className={style.test}>
        <FormControlLabel  value='female' control={<Radio color='secondary' />} label="Female" />
        </div>
        <div className={style.test}>
        <FormControlLabel value='male' control={<Radio color='secondary'/>} label="Male" />
        </div>
      </RadioGroup>
    </FormControl>
    </div>
    <div className={style.btns}>
<IconButton onClick={()=>setStep(3)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(5)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
{/* <Button variant='outlined' color='secondary' onClick={()=>setStep(3)} className='btn-second-back'>back</Button><span> </span>
<Button variant='contained'color='primary' onClick={()=>setStep(5)} className='btn-second-next'>next</Button> */}
</div>

    </>
  )
}

export default ThirdStep






 