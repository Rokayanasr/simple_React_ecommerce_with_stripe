import React from "react";
import style from "./Schedules.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { instanceAxios } from "../../Axios/instance";
import { useSelector } from "react-redux";

function Day({ data }) {
  const nav = useNavigate();
  const user = useSelector((state) => state.auth);
  // console.log(user._id);
  function remove(){
    instanceAxios
    .delete(`http://localhost:3000/schedule/delete/${user._id}/${data._id}`)
    .then((response) => {
      console.log(response);
    });
  }
  // console.log(data.details);
  const did = data.details
  const condition = did.every((item) => item.done ==true );
  // console.log(condition)
  function go() {
    nav(`/userDashboard/schedules/details/${data._id}`, { state: data });
  }
  return (
    <>
      <td>
        {" "}
        <p className={style.anker} onClick={go}>
          {data.dayName}
        </p>{" "}
      </td>
      <td>
        {condition ? <p className={style.completed}>Completed</p> : <p className={style.pending}>Pending</p>}
      </td>
      <td>
        {" "}
        <strong>
          <i className="fa-solid fa-trash-can" style={{ color: "#db0000" , fontSize:"30px"}} onClick={remove}/>
        </strong>{" "}
      </td>
    </>
  );
}
export default Day;

{/* <p className={style.progress}>Progress</p>
<p className={style.completed}>Completed</p> 
<p className={style.pending}>Pending</p>*/}