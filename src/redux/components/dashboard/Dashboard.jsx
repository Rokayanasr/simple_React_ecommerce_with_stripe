import React from "react";
import Side from "../Sider/Side";
import Content from "../content/Content";
import style from './Dashboard.module.css';
function Dashboard() {
  return (
    <React.Fragment>
      <div className={style.dashboard}>
        <Side className={style.side} />
        <Content className={style.content} />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
