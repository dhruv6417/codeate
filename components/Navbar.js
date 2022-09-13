import React, { useEffect, useState } from "react";
import { Button } from "./button/Button";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import Logo from '../assets/images/code8.png'

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [pop, setpop] = useState(true);

  const [button1, setButton1] = useState(true);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const showButton1 = () => {
        if (window.innerWidth <= 960) {
          setButton1(false);
        } else {
          setButton1(true);
        }
      };

      window.addEventListener("resize", showButton1);
  }, []);
  
  

  // Dropdown1
  const [click1, setClick1] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick1 = () => setClick1(!click1);
  const closeMobileMenu1 = () => {
    setClick1(false);
  };

  const extendElement1 = () => {
    dropdown1 ? setDropdown1(false) : setDropdown1(true);
  };

 

  return (
    <div className="navbar-c">
      <nav className="navbar-s ">
        {/* logo */}
        <Link href="/" onClick={closeMobileMenu1}>
          <div className="navbar-s-logo">
            <img src='/images/code8.png' alt="code8-logo" className="logo-nav"></img>
          </div>
        </Link>

        {/* Home */}
        <div className="menu-icon" onClick={handleClick1}>
          <i className={click1 ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div>
          <ul className={click1 ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/" onClick={closeMobileMenu1}>
                <a className="nav-links">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/about"
                className="nav-links"
                onClick={closeMobileMenu1}
              >
                <a className="nav-links">About us</a>
              </Link>
            </li>

            {/* Library */}
            <li className="nav-item" onClick={extendElement1}>
              <Link
                href="/build"
                className="nav-links"
                onClick={closeMobileMenu1}
              >
                <a className="nav-links">Build</a>
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu1}>
              <Link href="/learn" className="nav-links">
              <a className="nav-links">Learn</a>
              </Link>
            </li>

            {/* Community */}
            <li className="nav-item" onClick={closeMobileMenu1}>
              <Link href="/community" className="nav-links">
              <a className="nav-links">Community</a>
                {/* <i className='fas fa-caret-down' /> */}
              </Link>
              {/* {dropdown4 && <Dropdown4 onCloseMobileMenu={closeMobileMenu4} />} */}
            </li>
            {/* Updates */}

          </ul>
        </div>
        {/* <LoginButton /> */}
        {/* <SignUpButton /> */}
        <div className='login-sign'>
        <div className="btn-mobile">
          {button1 && (
            <Button
              buttonStyle="btn--primary btn--mobile"
              buttonSize="btn--medium"
              onClick={handleClickOpen}
            >
              Login
            </Button>
          )}
        </div>
        <div className="btn-mobile">
          {button1 && (
            <Button
              buttonStyle="btn--primary btn--mobile"
              buttonSize="btn--medium"
              onClick={handleClickOpen2}
            >
              Sign Up
            </Button>
          )}
        </div>
        
        </div>
        {pop && (
          <div className="Popup">
            <div className="popup-head">
              <div className="close-button">
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    setpop(false);
                  }}
                ></i>
              </div>
            </div>
            <div className="popup-body">
              <p>Let opportunities land in your inbox.</p>
              <div onClick={handleClickOpen2} style={{ cursor: "pointer" }}>
                {" "}
                Sign up now for free.{" "}
              </div>
            </div>
          </div>
        )}
      </nav>
      <Dialog
        open={open2}
        onClose={handleClose2}
        fullWidth="true"
        maxWidth="sm"
      >
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleClose2}
                style={{ cursor: "pointer" }}
                alt="close"
              />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  marginRight: "18px",
                  fontSize: "16px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                }}
              >
                New to Code8 ?
              </div>
              {/* <Button
                buttonStyle="btn--primary sizee"
                buttonSize="btn--small"
                buttonStyl
              >
                Sign Up
              </Button> */}
            </span>
          </div>
          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="Password"
              fullWidth
              style={{ margin: "15px 0px 5px 0px" }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </span>
          </div>
          <Button
            buttonStyle="btn--primary sizee"
            buttonSize="btn--small"
            stylee="stylee"
          >
            Signin
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 0px 0px",
            }}
          ></div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose} fullWidth="true" maxWidth="sm">
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  marginRight: "18px",
                  fontSize: "16px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                New to Code8 ?
              </div>
              {/* <Button
                buttonStyle="btn--primary sizee btn--mobile"
                buttonSize="btn--small"
              >
                Sign Up
              </Button> */}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span
              style={{
                margin: "10px 0px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "35px",
                lineHeight: "72px",
                display: "flex",
                alignItems: "center",
                color: "#000000",
              }}
            >
              Welcome Back
            </span>
          </div>

          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="Password"
              fullWidth
              style={{ margin: "15px 0px 5px 0px" }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </span>
          </div>
          <Button
            buttonStyle="btn--primary sizee"
            buttonSize="btn--small"
            stylee="stylee"
          >
            Login
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 0px 0px",
            }}
          ></div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}