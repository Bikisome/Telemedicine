import { Menu } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { logout } from "../redux/store/slices/auth";
import toast from "react-hot-toast";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { RiVipCrownLine } from "react-icons/ri";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = async () => {
    console.log("logout");
    let result = await dispatch(logout());
    console.log(result);
    if (result) {
      localStorage.removeItem("accessToken", "");

      navigate("/");
      toast.success("Logout successful");
      return true;
    }
  };

  return (
    <div className="hidden lg:w-full lg:flex ">
      <div className="ml-4 ">
        <div
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className=" p-0"
        >
          <AccountCircleIcon className="text-2xl" />
        </div>
        <Menu
          PaperProps={{
            style: {
              width: "14%",
              height: "42%",
              marginTop: "20px",
            },
          }}
          className="list"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="flex justify-evenly pt-8 cursor-default">
            <div onClick={handleClose}>
              <div className="relative">
                <h3 className="cursor-pointer text-2xl text-center">
                  My Profile
                </h3>
                <div className="flex justify-evenly flex-col pt-8 gap-5">
                  <Link className="flex gap-2 items-center">
                    {" "}
                    <MdOutlineManageAccounts /> <p>My Account</p>
                  </Link>

                  <Link className="flex gap-2 items-center" to={"/joinmeeting"}>
                    {" "}
                    <FaHandsHelping />
                    <p> Appointments</p>
                  </Link>

                  <Link className="flex gap-2 items-center">
                    {" "}
                    <FaUserDoctor />
                    <p>View Consults</p>
                  </Link>
                  <Link className="flex gap-2 items-center">
                    <RiVipCrownLine className="text-red-500" /> VIP Plans
                  </Link>
                  <Link className="flex gap-2 items-center">
                    <IoMdHelpCircleOutline />
                    Help
                  </Link>
                </div>
              </div>
              <div className="mt-10 text-center">
                <button onClick={handleLogOut} className="text-red-600 text-xl">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default UserProfile;
