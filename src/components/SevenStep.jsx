import React ,{useContext } from 'react'
import {IconButton , TextField} from '@mui/material'
import { multiStepContext } from '../stepContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from'./seven.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SevenStep() {
    const {setStep, userData , setUserData ,submitedData}=useContext(multiStepContext)
  return (
  <>
       <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>7 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
  <div className={style.seven}>
  <h1 className={style.h1}>How many hours do you usually sleep ?</h1>
    <div>
      <TextField 
      className={style.sleephours}
    variant='standard' 
    color='secondary' 
    margin='normal' 
    label=''
    value={userData['sleep']}
    onChange={(e)=>setUserData({...userData,"sleep":e.target.value})}
    ></TextField>
    </div>
    <div className={style.btns}>
<IconButton onClick={()=>setStep(7)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(9)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
 </div>
   
  </>
  )
}

export default SevenStep