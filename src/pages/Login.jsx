import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
      className="px-[50px] pt-6 flex-col mt-10"
    >
      <form>
        <Box
          className="Main_box"
          sx={{ width: { lg: "460px", md: "460px", sm: "460px", xs: "100%" } }}
        >
          <Box className="Headline">
            <Typography variant="h5">
              Enter your email to join us or sign in.
            </Typography>
          </Box>

          <Box className="country" sx={{ margin: "16px 0" }}>
            India <a href="">Change</a>
          </Box>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic01"
              name="username"
              label="Email"
              variant="outlined"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.username}
              required={true}
            />
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic02"
              name="password"
              label="Password"
              type={"password"}
              //   variant="outlined"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.password}
              required={true}
            />
          </div>

          <Box className="terms_condition" sx={{ margin: "40px 0" }}>
            By continuing, I agree to TeleDoX’s <a href=""> Privacy Policy </a>{" "}
            and
            <a href=""> Terms of Use.</a>
          </Box>
          <Box className="terms_condition" sx={{ margin: "16px 0" }}>
            New member ? <Link to="/signup">Sign up</Link>
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
              Log In
            </button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default LogIn;
