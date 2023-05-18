import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
function Register() {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const res = await axios.post(
        "http://localhost:8090/api/auth/register",
        inputs
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>

          <Typography variant="h2" padding={4} textAlign="center">
            Register admin
          </Typography>

          <TextField
            margin="normal"
            type="textarea"
            variant="outlined"
            placeholder="firstName"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
            required
          /><br/>
          <TextField
            margin="normal"
            type="textarea"
            variant="outlined"
            placeholder="Last name"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
            required
          /><br/>

          <TextField
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          /><br/>
          <TextField
            margin="normal"
            onChange={handleChange}
            type="password"
            variant="outlined"
            placeholder="password"
            name="password"
            value={inputs.password}
            required
          />
          <br/>
          <Button
            endIcon={<ExitToAppIcon />}
            type="submit"
            variant="contained"
            color="success"
            sx={{ marginTop: 3, borderRadius: 4 }}
          >
            SignIn
          </Button>

      </form>
    </div>
  );
}

export default Register;
