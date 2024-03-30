import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from '@mui/material/colors';
import { instanceAxios } from "../../Axios/instance";

const TaskCheckbox = (props) => {
  // console.log(props);
  const [flag, setFlag] = useState(false);

  const color ={
    maColor:"#735BF3"
  }
  const handleCheckboxChange = async (hour, id) => {
    instanceAxios
      .patch(`http://localhost:3000/schedule/checked/${id}/${hour}`)
      .then((response) => {
        console.log(response);
      });
    setFlag(true);
    console.log(hour, id);
  };

  return (
    <Checkbox
      checked={flag || props.done ? true : false}
      onChange={() => handleCheckboxChange(props.hour, props.scheduleId)}
      inputProps={{ "aria-label": "task-done" }}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } , '&.Mui-checked':{color: color.maColor }}}
    />
  );
};

export default TaskCheckbox;
