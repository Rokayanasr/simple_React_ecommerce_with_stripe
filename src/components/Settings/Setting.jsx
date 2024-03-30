import React, { useState } from "react";
import style from "./Setting.module.css";
import img from "../../assets/download.png";
import { instanceAxios } from "../../Axios/instance";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function Setting() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isAdmin, setIsAdmin] = useState('');
  const user = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instanceAxios.patch(
        `http://localhost:3000/user/edit/${user._id}`,
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
      // Handle success or display a success message
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error or display an error message
    }
  };

  const deleteUser = async () => {
    try {
      const respond = await instanceAxios.delete(
        `http://localhost:3000/user/delete/${user._id}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  const stylee = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid white",
    borderRadius: "17px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={style.container}>
        {/* <div className={style.heading}>
          <h4>Account Settings</h4>
        </div> */}

        <div className={style.mainContainer}>
          {/* <div className={style.ourTeam}>
            <div className={style.picture}>
              <img src={img} />
            </div>
            <div>
              <h5 className={style.name}>John Deo</h5>
              <h4 className={style.title}></h4>
              <button>Edit Profile picture</button>
            </div>
          </div> */}

          <div className={style.settings}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="form-control"
              />

              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="form-control"
              />

              <label htmlFor="password">New Password</label>
              <br />
              <input
                type="password"
                id="new"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="form-control"
              />

              <button type="submit" className={style.save}>Save Changes</button>
            </form>

            <div className={style.deleteAcc}>
              <div className={style.text}>
                <h5>Delete Account</h5>
                <p>Once you delete your account, there is no going back.</p>
              </div>
              <button className={style.db} onClick={handleOpen}>Delete Account</button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={stylee}>
            <span
              aria-label="close"
              onClick={handleClose} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <i className="fa-solid fa-xmark" style={{ color: "black" , marginBottom:"8px" ,position:"relative" , left:"330px" , cursor:"pointer"  }}></i>
            </span>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure you want to delete your account
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <button className={style.deleteAccbtn} onClick={deleteUser}>Delete</button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Setting;
