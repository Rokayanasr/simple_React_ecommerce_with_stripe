import React,{useContext , useEffect} from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import {Stepper} from '@mui/material'
import {multiStepContext} from '../stepContext'
import Begining from './Begining'
import FourStep from './FourStep'
import style from './stepper.module.css'
import FifeStep from './FifeStep'
import SixStep from './SixStep'
import SevenStep from './SevenStep'
import EightStep from './EightStep'
import NineStep from './NineStep'
import TenStep from './TenStep'
import ElevenStep from './ElevenStep'
import Last from './Last'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function SStepper() {
    const user = useSelector((state) => state.auth);
    const nav = useNavigate()
    useEffect(() => {
      if (!user._id) {
        nav('/login');
      }
    }, [user._id, nav]);
    const { currentStep , finalData}=useContext(multiStepContext)
    function showStep(step){
        switch (step){
             case 1 :
             return <Begining/>
             case 2 :
             return <FirstStep />
             case 3 : 
             return <SecondStep />
             case 4 : 
             return <ThirdStep/>
             case 5 :
             return <FourStep/>
             case 6 :
             return <FifeStep />
             case 7 : 
             return <SixStep/>
             case 8 :
             return <SevenStep/>
             case 9 : 
             return < EightStep />
             case 10 :
             return <NineStep/>
             case 11: 
             return <TenStep/>
             case 12:
             return < ElevenStep/>
             case 13 :
               return < Last/>
        }
       }
  return (
    <>
    {
      user._id ? (<div className={style.body}>
        <div className={style.centerStepper}>
          <Stepper style={{width:'50%'}}  orientation="horizontal">
    {/*      
          <Step style={{ cursor: 'pointer'}}>
              <StepLabel></StepLabel>
            </Step>
            <Step style={{ cursor: 'pointer' }}>
              <StepLabel></StepLabel>
            </Step>
            <Step style={{ cursor: 'pointer' }}>
              <StepLabel></StepLabel>
            </Step>
            <Step style={{ cursor: 'pointer' }}>
              <StepLabel></StepLabel>
            </Step>
            <Step style={{ cursor: 'pointer' }}>
              <StepLabel></StepLabel>
            </Step>
            <Step style={{ cursor: 'pointer' }}>
              <StepLabel></StepLabel>
            </Step> */}
          </Stepper>
          { showStep(currentStep)}
        </div>
        </div>) : null
    }
    </>
  )
}

export default SStepper
