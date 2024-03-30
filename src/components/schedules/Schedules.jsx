import React, { useEffect, useState } from "react";
import style from "./Schedules.module.css";
// import { NavLink, useNavigate } from "react-router-dom";
import Day from "./Day";
import { instanceAxios } from "../../Axios/instance";
import { useSelector } from "react-redux";


function Schedules() {
  const user = useSelector((state) => state.auth);
  // console.log(user._id);
  const [days, setdays] = useState([]);
  // const nav = useNavigate();

  
function click(){
  console.log('kjkugfsgdf');
useEffect(()=>{
    instanceAxios.post(`http://localhost:3000/schedule/addSchedule/${user._id}`,localStorage.getItem('answers')).then((response) => {
      console.log(response.data);
    });
  }

)
}

  useEffect(() => {
    instanceAxios
      .post(
        `http://localhost:3000/schedule/getalldays/${user._id}`
      )
      .then((response) => {
        // for (let day of data.data){
        //   console.log(day.dayName);
        // }
        setdays([...response.data]);
        // setdays([...data.data]);
      });
  }, []);

  return (
    <>
      <div className={style.cont}>
        <main className={style.table} id={style.customersTable}>
          <section className={style.tableHeader}>
            <h5>Daily Routines</h5>
            <button className={style.button} onClick={click}>Generate New Day</button>
          </section>
          <section className={style.tableBody}>
            <table>
              <thead>
                <tr>
                  {/* <th> Check</th> */}
                  <th> Dayname </th>
                  <th> Status </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {days.length > 0 &&
                  days.map((day) => {
                    return (
                      <tr key={day._id}>
                        <Day data={day} />
                      </tr>
                    );
                  })}{" "}
                {/* {days.length > 0 &&
                  days.map((day) => (
                    <tr key={day._id}>
                      <td> */}
                {/* <NavLink to="/details" className={style.link}>
                                  {day.dayName}
                                  </NavLink> */}
                {/* <p
                          className={style.anker}
                          href=""
                          onClick={() => {
                            go(day._id);
                          }}
                        >
                          {" "}
                          {day.dayName}
                        </p>
                      </td>
                      <td>
                        <p className={style.completed}>Completed</p>
                      </td>
                      <td> */}
                {/* <strong>
                          <i
                            className="fa-solid fa-trash-can"
                            style={{ color: "#db0000" }}
                          />
                        </strong>
                      </td>
                    </tr>
                  ))} */}
                {/* {days.length > 0 &&
                  days.map((day) => {
                    // <div key={item.id}><Day data={item}/></div>
                    <tr>
                      <td>
                        {" "}
                        <NavLink to="/details" className={style.link}>
                          {day.dayName}
                        </NavLink>{" "}
                      </td>
                      <td>
                        <p className={style.completed}>Completed</p>
                      </td>
                      <td>
                        {" "}
                        <strong>
                          {" "}
                          <i
                            className="fa-solid fa-trash-can"
                            style={{ color: "#db0000" }}
                          />{" "}
                        </strong>
                      </td>
                    </tr>;
                  })} */}
                {/* <tr>
          
                  <td>
                    {" "}
                    <NavLink to="/details" className={style.link}>
                      Sunday
                    </NavLink>{" "}
                  </td>
                  <td>
                    <p className={style.pending}>Pending</p>
                  </td>
                  <td>
                    {" "}
                    <strong>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "#db0000" }}
                      />
                    </strong>{" "}
                  </td>
                </tr>
                <tr>
                  
                  <td>
                    {" "}
                    <NavLink to="/details" className={style.link}>
                      Sunday
                    </NavLink>{" "}
                  </td>
                  <td>
                    <p className={style.progress}>Progress</p>
                  </td>
                  <td>
                    {" "}
                    <strong>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "#db0000" }}
                      />
                    </strong>{" "}
                  </td>
                </tr>
                <tr>
                  
                  <td>
                    {" "}
                    <NavLink to="/details" className={style.link}>
                      Sunday
                    </NavLink>{" "}
                  </td>
                  <td>
                    <p className={style.pending}>Pending</p>
                  </td>
                  <td>
                    {" "}
                    <strong>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "#db0000" }}
                      />
                    </strong>{" "}
                  </td>
                </tr>
                <tr>
                 
                  <td>
                    {" "}
                    <NavLink to="/details" className={style.link}>
                      Sunday
                    </NavLink>{" "}
                  </td>
                  <td>
                    <p className={style.progress}>Progress</p>
                  </td>
                  <td>
                    {" "}
                    <strong>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "#db0000" }}
                      />
                    </strong>{" "}
                  </td>
                </tr> */}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}

export default Schedules;
