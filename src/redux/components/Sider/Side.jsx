import React , { useState } from "react";
import style from "./Side.module.css";
import img from "../../assets/download.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"; 

function Side() {
  const user = useSelector((state) => state.auth);
  const nav = useNavigate()
  const dispatch = useDispatch()
  return (
    // <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.head}>
          <div className={style.userImg}>
            <img src={img} alt="" />
          </div>
          <div className={style.userDetails}>
            {/* <p className={style.title}>web developer</p> */}
            <p className={style.name}>{user.name}</p>
          </div>
        </div>
        <div className={style.nav}>
          <div className={style.menu}>
            <p className={style.title}>Main</p>
            <ul>
              {/* <li>
                <NavLink to="/dash">
                  <i className="icon ph-bold ph-house-simple" />
                  <span className={style.text}>Dashboard</span>
                </NavLink>
              </li> */}
           
           
              <li>
                <NavLink to="schedules">
                  <i className="icon ph-bold ph-calendar-blank" />
                  <span className={style.text}>Schedules</span>
                </NavLink>
                {/* <ul class="sub-menu">
                  <li>
                    <a href="#">
                      <span class="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Subscribers</span>
                    </a>
                  </li>
                </ul> */}
              </li>
              
              <li>
                <NavLink to="coach">
                  <i className="icon ph-bold ph-house-simple" />
                  <span className={style.text}>Your Coach</span>
                </NavLink>
              </li>
             
            </ul>
          </div>
          <div className={style.menu}>
            <p className={style.title}>Settings</p>
            <ul>
              <li>
                <NavLink to="settings">
                  <i className="icon ph-bold ph-gear" />
                  <span className={style.text}>Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.menu}>
          <p className={style.title}>Account</p>
          <ul>
            <li>
              {/* <a href="#">
                <i className="icon ph-bold ph-info" />
                <span className={style.text}>Help</span>
              </a> */}


              <NavLink to="/">
              <i class="fa-solid fa-house"></i>
                  <span className={style.text}>Home</span>
                </NavLink>
            </li>
            <li    onClick={() => {
                                        dispatch(logoutUser());
                                        nav('/')
                                        // toast.warning("you've logged out")
                                    }}>  
              <a href="#">
                <i className="icon ph-bold ph-sign-out" />
                <span className={style.text}>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      // {/* <div className={style.credits}>
      //   <h1>
      //     Fully Responsive <br />
      //     Sidebar by OSC
      //   </h1>
      // </div> */}
    // {/* </div> */}
  );
}

export default Side;
