import React ,{useContext} from 'react'
import {Button} from '@mui/material'
import {multiStepContext} from '../stepContext'
import style from './Beginnin.module.css'
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Begining() {
    const {setStep}=useContext(multiStepContext) 
  return (
   <>
     <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
   <div className={style.cont}>
  
   <div>
    <h2 className={style.myh2}>Are You Ready 
    <br />To Have A Healthy Routine?</h2>
   </div>
   <div>
   <Button variant='outlined' className={style.btn} onClick={()=>setStep(2)}>yes</Button>
   </div>
   </div>
   </>
  )
}

export default Begining