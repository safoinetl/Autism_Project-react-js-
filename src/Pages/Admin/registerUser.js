import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";

function RegisterUser() {
    const [inputs, setInputs] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputs);
      try {
        const token = localStorage.getItem("refresh_token");
        const res = await axios.post(
          "http://localhost:8090/api/responsable/registerUser",
          inputs,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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

            <Typography variant="h2" padding={3} textAlign="center">
              Register Manger
            </Typography>
  
            <TextField
              margin="normal"
              type="textarea"
              variant="outlined"
              placeholder="firstName"
              name="firstName"
              value={inputs.firstName}
              onChange={handleChange}
              required
            /><br/>
            <TextField
              margin="normal"
              type="textarea"
              variant="outlined"
              placeholder="Last name"
              name="lastName"
              value={inputs.lastName}
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
            /><br/>
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

export default RegisterUser