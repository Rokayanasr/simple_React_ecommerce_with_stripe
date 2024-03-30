import React ,{useContext }  from 'react'
import { IconButton, TextField} from '@mui/material'
import { multiStepContext } from '../stepContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './four.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FourStep() {
    const {setStep, userData , setUserData}=useContext(multiStepContext) 
  return (
  <>
       <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>4 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.four}>
  <h1 className={style.h1}>How many hours do you study/work ?</h1>
<div>
<TextField 
variant='standard' 
color='secondary' 
margin='normal' 
label=''
className={style.textField}
value={userData['work']}
onChange={(e)=>setUserData({...userData,"work":e.target.value})}
></TextField>
</div>
<div>
<div className={style.btns}>
<IconButton onClick={()=>setStep(4)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(6)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
</div>
</div>

  </>
  )
}

export default FourStep