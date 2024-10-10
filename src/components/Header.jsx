import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/logo2.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/store/slices/auth";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  console.log("user", user);

  const fetchUser = async () => {
    let result = await dispatch(getUser());

    if (result) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
              <div className=" gap-3 flex">
                <Box
                  sx={{
                    display: Object.keys(user).length === 0 ? "flex" : "none",
                    alignItems: "center",
                  }}
                >
                  <Link to="/sign-up">Login</Link>
                </Box>
                <Box
                  sx={{
                    display: Object.keys(user).length === 0 ? "none" : "flex",
                    alignItems: "center",
                  }}
                >
                  <Link to={"/profile"}>Welcome ! {user?.firstName}</Link>
                </Box>
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
