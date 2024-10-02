import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="px-[30px] flex-col "
    >
      <form>
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
              required={true}
            />
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic1"
              label="Last Name"
              name="lastName"
              variant="outlined"
              required={true}
            />

            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic2"
              label="Email"
              name="email"
              type={"email"}
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
