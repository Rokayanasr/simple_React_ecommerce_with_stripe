import React ,{useContext ,useState} from 'react'
import {IconButton ,TextField} from '@mui/material'
import { multiStepContext } from '../stepContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './nine.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NineStep() {
    const {setStep, userData , setUserData }=useContext(multiStepContext) 
  return (
    <>
         <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>9 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
    <div className={style.nine}>
        <div>
<h1 className={style.h1}>
    how many glasses of water do you drink?
</h1>
<TextField 
    variant='standard' 
    color='secondary' 
    margin='normal' 
    className={style.water}
    value={userData['water']}
    onChange={(e)=>setUserData({...userData,"water":e.target.value})}
    ></TextField>
        </div>
        <div className={style.btns}>
<IconButton onClick={()=>setStep(9)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(11)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
{/* <div>
<Button variant='outlined' onClick={()=>setStep(9)} className='btn-second-back'>back</Button><span> </span>
<Button variant='contained'onClick={()=>setStep(11)} className='btn-second-next'>next</Button>
</div> */}
    </div>
    </>
  )
}

export default NineStep