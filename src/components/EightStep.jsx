import React ,{useContext } from 'react'
import {IconButton ,TextField} from '@mui/material'
import { multiStepContext } from '../stepContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from'./eight.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EightStep() {
    const {setStep, userData , setUserData}=useContext(multiStepContext) 
  return (
<>
<Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>8 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.eight}>
    <div>
    {/* <h4>How would you rate your stress level</h4> */}
    <h1 className={style.h1}> Rate your stress level
   <br />from 1 to 10</h1>
    <TextField 
    className={style.stress}
    variant='standard' 
    color='secondary' 
    margin='normal' 
    value={userData['streetslevel']}
    onChange={(e)=>setUserData({...userData,"streetslevel":e.target.value})}
    ></TextField>
    </div>
    <div className={style.btns}>
<IconButton onClick={()=>setStep(8)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(10)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
</div>
</>
  )
}

export default EightStep