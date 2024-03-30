import React ,{useContext,useState} from 'react'
import {Button , IconButton, TextField} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { multiStepContext } from '../stepContext';
import style from './first.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function FirstStep() {
  const {setStep, userData , setUserData}=useContext(multiStepContext) 
  return (
<>
<Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
<p className={style.counter}>1 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.first}>
<div >
  <h1 className={style.h1}>How old are you?!</h1>
<TextField 
className={style.textField}
variant='standard' 
color='secondary' margin='normal' 
value={userData['age']}
onChange={(e)=>setUserData({...userData,"age":e.target.value})}
></TextField>
</div>
<div className={style.btns}>
<IconButton onClick={()=>setStep(1)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(3)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
</div>
</>
  )
}

export default FirstStep