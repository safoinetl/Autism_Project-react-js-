import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";

function RegisterActivity() {
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
            <Typography variant="h2" padding={3} textAlign="center">
              Add
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
            />
            <TextField
              margin="Last name"
              type="textarea"
              variant="outlined"
              placeholder="Last name"
              name="lastname"
              value={inputs.lastname}
              onChange={handleChange}
              required
            />
  
            <TextField
              margin="normal"
              type="email"
              variant="outlined"
              placeholder="Email"
              name="email"
              value={inputs.email}
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
              value={inputs.password}
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

export default RegisterActivity