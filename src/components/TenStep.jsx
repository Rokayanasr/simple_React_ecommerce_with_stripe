import React ,{useContext } from 'react'
import {IconButton ,TextField} from '@mui/material'
import { multiStepContext } from '../stepContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from'./ten.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function TenStep() {
    const {setStep, userData , setUserData}=useContext(multiStepContext)
  return (
<>

<Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
       <p className={style.counter}>10 <span></span>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
11</p>
<div className={style.ten}>
    <div>
    <h1 className={style.h1}>how many hours do u speed on screens </h1>
    <TextField 
    variant='standard' 
    color='secondary' 
    margin='normal' 
    className={style.screen}
    value={userData['screens']}
    onChange={(e)=>setUserData({...userData,"screens":e.target.value})}
    ></TextField>
    </div>
    <div className={style.btns}>
<IconButton onClick={()=>setStep(10)} aria-label="ArrowBackIosIcon">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={()=>setStep(12)}  aria-label="ArrowBackIosIcon">
        <ArrowForwardIosIcon />
      </IconButton>
</div>
    {/* <div>
    <Button variant='outlined' onClick={()=>setStep(10)} className='btn-second-back'>back</Button><span> </span>
    <Button variant='contained' onClick={()=>setStep(12)} className='btn-second-next'>next</Button>
    </div> */}
</div>
</>
  )
}

export default TenStep