import React from "react";
import { Route, Routes ,Navigate  } from "react-router-dom";
import Setting from "../Settings/Setting";
import Schedules from "../schedules/Schedules";
import Details from "./../details/Details";
import Coach from './../coach/Coach';
import style from "./Content.module.css"

function Content() {
  return (
    <>
    <div className={style.whole}>
   {/* <Header className={style.head}/> */}
    <Routes>
    <Route path="/" element={<Navigate to="/userDashboard" />} />
      <Route path="/schedules" element={<Schedules />} />
      <Route path="schedules/details/:id" element={<Details />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/coach" element={<Coach/>} />
    </Routes>
    </div>
    </>
  );
}

export default Content;
