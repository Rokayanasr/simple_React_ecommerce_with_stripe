import React from "react";
import style from "./Details.module.css";
import { NavLink, useParams, useLocation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import TaskCheckbox from "../details/Check";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Details() {
  const loc = useLocation();
  const data = loc.state;
  console.log(data);
  const param = useParams();
  const det = data.details;
  console.log(det);

  return (
    <>
      <div className={style.cont}>
        <main className={style.table} id={style.customersTable}>
          <section className={style.tableHeader}>
            <h5>Your Tasks</h5>
          </section>
          <section className={style.tableBody}>
            <table>
              <thead>
                <tr>
                  <th> Hour </th>
                  <th> Activity </th>
                  <th> Done </th>
                </tr>
              </thead>
              <tbody>
                {det.map((item) => {
                  return (
                    <tr>
                      <td>{item.hour}</td>
                      <td>
                        <p>{item.activity}</p>
                      </td>
                      <td>
                        <TaskCheckbox
                          hour={item.hour}
                          scheduleId={data._id}
                          done={item.done}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}

export default Details;
{
  /* <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}

{
  /* <td> 6:30 pm</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque?Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Eaque?
                    </p>
                  </td>
                  <td>
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr>
                <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}
{
  /* 
                  <td> 6:30 pm</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque?
                    </p>
                  </td> */
}
{
  /* <td> */
}
{
  /* <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr> */
}
{
  /* <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}

{
  /* <td> 6:30 pm</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque?
                    </p>
                  </td>
                  <td> */
}
{
  /* <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr>
                <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}
{
  /* 
                  <td> 6:30 pm</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque? */
}
{
  /* </p>
                  </td>
                  <td>
                  <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr>
                <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}

{
  /* Eaque?
                    </p>
                  </td>
                  <td>
                  <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr>
                <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}

{
  /* <td> 6:30 pm</td> */
}
{
  /* <td>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque?
                    </p>
                  </td>
                  <td>
                  <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr>
                <tr> */
}
{
  /* <td> <input type="checkbox"/></td> */
}

{
  /* <td> 6:30 pm</td>
                  <td>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque?
                    </p>
                  </td>
                  <td>
                  <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  </td>
                </tr> */
}
