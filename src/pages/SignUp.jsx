import { Box, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/store/slices/auth";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log("Values are :", values);
      const { firstName, lastName, email, password } = values;

      const data = { firstName, lastName, email, password };

      console.log("user data :", data);

      let result = await dispatch(register(data));

      if (result) {
        toast.success("Registration Successful!");
        navigate("/login");
      } else {
        toast.error("Registration Failed!");
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="px-[30px] flex-col "
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          className="Main_box"
          sx={{ width: { lg: "460px", md: "460px", sm: "460px", xs: "100%" } }}
        >
          <Box className="Headline">
            <Typography variant="h5">
              Create yout account. It's free and only takes a minutes.
            </Typography>
          </Box>

          <Box className="country" sx={{ margin: "16px 0" }}>
            India <a href="">Change</a>
          </Box>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic1"
              label="First Name"
              name="firstName"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              required={true}
            />
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic1"
              label="Last Name"
              name="lastName"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              required={true}
            />

            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic2"
              label="Email"
              name="email"
              type={"email"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              variant="outlined"
            />

            <TextField
              id="outlined-basic3"
              label="Password"
              name="password"
              type={"password"}
              required
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              style={{ marginTop: "40px" }}
            />
          </div>

          <Box className="terms_condition" sx={{ margin: "40px 0" }}>
            By continuing, I agree to TeleDoX’s <a href=""> Privacy Policy </a>{" "}
            and
            <a href=""> Terms of Use.</a>
          </Box>

          <Box className="terms_condition" sx={{ margin: "40px 0" }}>
            Already signup? <Link to="/login">Log in</Link>
          </Box>

          <Box
            className="continue"
            sx={{
              margin: "40px 0",
              display: "flex",
              flexDirection: {
                lg: "row-reverse",
                md: "row-reverse",
                sm: "row-reverse",
                xs: "column",
              },
            }}
          >
            <button
              type="submit"
              style={{
                color: "#ffff",
                padding: "15px",
                backgroundColor: "black",
                borderRadius: "30px",
                width: "12rem",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
