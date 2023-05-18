import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Authenticate } from "../API/Handler/AuthHandler";
import { useNavigate } from 'react-router-dom';



function SignInScreen() {

  const navigate = useNavigate();



  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    Authenticate(formValue,navigate)

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={"15%"}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography
            variant="h2"
            padding={3}
            textAlign="center
        "
          >
            SignIn
          </Typography>

          <TextField
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            required
          />
          <TextField
            margin="normal"
            onChange={handleChange}
            type="password"
            variant="outlined"
            placeholder="password"
            name="password"
            value={formValue.password}
            required
          />
          <Button
            endIcon={<ExitToAppIcon />}
            type="submit"
            variant="contained"
            color="success"
            sx={{ marginTop: 3, borderRadius: 4 }}
          >
            SignIn
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default SignInScreen;
