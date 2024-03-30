import React, { useContext, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { multiStepContext } from '../stepContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SendIcon from '@mui/icons-material/Send';
import style from'./last.module.css';
import { instanceAxios } from '../Axios/instance';
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from "react-redux";

function Last() {
  const user = useSelector((state) => state.auth);
  console.log(user._id);

  const { setStep, userData, setUserData, submitedData } = useContext(multiStepContext);
  const [day, setDay] = useState('');

  const handleChange = (event) => {
    setDay(event.target.value);
    setUserData({ ...userData, day: event.target.value });
  };
  //  console.log(userData);
   const length=Object.keys(userData).length
  //  console.log(length);
  useEffect(() => {
    if (length==12) {
      console.log(userData);
      let answers = localStorage.setItem('asnwers',JSON.stringify(userData))
      instanceAxios.post(`http://localhost:3000/schedule/addSchedule/${user._id}`,userData).then((response) => {
        console.log(response.data);
      });
    }

  }, [userData]);

  return (
    <>
      <Link to='/' className={style.home}>
      <ArrowBackIcon></ArrowBackIcon>
       Home</Link>
      <div className={style.last}>
        <h1 className={style.h1}>select a day for your schedule?</h1>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl className={style.FormControl} variant="standard">
              <InputLabel id="demo-simple-select-label" color="secondary">
                Days
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                color="secondary"
                className={style.day}
                onChange={handleChange}
              >
                <MenuItem value="Saturday">Saturday</MenuItem>
                <MenuItem value="Sunday">Sunday</MenuItem>
                <MenuItem value="Monday">Monday</MenuItem>
                <MenuItem value="Tuesday">Tuesday</MenuItem>
                <MenuItem value="Wednesday">Wednesday</MenuItem>
                <MenuItem value="Thursday">Thursday</MenuItem>
                <MenuItem value="Friday">Friday</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className={style.btns}>
          <IconButton onClick={() => setStep(12)} aria-label="ArrowBackIosIcon">
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={() => { submitedData(); }} aria-label="SendIcon">
           <Link to='/userDashboard'>
           <SendIcon />
           </Link>
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Last;
