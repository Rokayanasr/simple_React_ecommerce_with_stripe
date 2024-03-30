import React ,{useContext ,useState}  from 'react'
import {IconButton } from '@mui/material'
import { multiStepContext } from '../stepContext';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './eleven.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ElevenStep() {
  
    const {setStep, userData , setUserData}=useContext(multiStepContext) 
    const [selectedValue3, setSelectedValue3] = useState('');
    const handleRadioChange3 = (event) => {
        setSelectedValue3(event.target.value)
      setUserData({...userData,"smoke":event.target.value});
    };
    
    return (
    <>
         <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>11 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.eleven}>
<h1 className={style.h1}>Are you a smoker ?</h1>
<div>
<FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="No"
        name="radio-buttons-group"
        value={selectedValue3} 
        onChange={handleRadioChange3}
        > 
          <div className={style.test}>
        <FormControlLabel  value='dont' control={<Radio color='secondary' />} label="No" />
        </div>
        <div className={style.test}>
        <FormControlLabel value='do' control={<Radio color='secondary'/>} label="Yes" />
        </div>
      </RadioGroup>
    </FormControl>
</div>
<div className={style.btns}>
<IconButton onClick={()=>setStep(11)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(13)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
{/* <Button variant='outlined'  onClick={()=>setStep(11)} className='btn-second-back'>back</Button><span> </span>
<Button variant='contained' onClick={()=>setStep(13)} className='btn-second-next'>next</Button> */}
</div>
</>
  )
}

export default ElevenStep