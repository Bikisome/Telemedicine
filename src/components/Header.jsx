import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/logo2.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

function Header() {
  return (
    <Headroom>
      <AppBar position="static" className="h-full w-full p-0 m-0">
        <Toolbar>
          <Typography variant="h6" className="w-full m-0 p-0 ">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to={"/"} className="flex items-center ">
                <img className="h-[70px] w-[70px]" src={Logo} alt="logo" />
              </Link>
              <div className="hidden  lg:gap-6 md:items-center md:flex flex-wrap">
                <Link to={"/showalldoctors"}>Talk to Doctor</Link>
                <Link>Medicine</Link>
                <Link to={"/specialties"}>Book Dr. Appointment</Link>
                <Link>More</Link>
              </div>
              {/* User */}
              <div className="">
                <Link to={"/login"}>
                <AccountCircleIcon />
              </Link>
              </div>
              
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Headroom>
  );
}

export default Header;
