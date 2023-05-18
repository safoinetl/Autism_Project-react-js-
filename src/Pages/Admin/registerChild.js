import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
function RegisterChild() {
  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    age: "",
    birthDate: "",
  });
  const token = localStorage.getItem("refresh_token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const res = await axios.post(
        "http://localhost:8090/api/responsable/registerChild",
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
            Adding Child
          </Typography>

          <TextField
            margin="normal"
            type="textarea"
            variant="outlined"
            placeholder="name"
            name="name"
            value={inputs.name}
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
            type="number"
            variant="outlined"
            placeholder="age"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            required
          /><br/>
          <TextField
            margin="normal"
            onChange={handleChange}
            type="date"
            variant="outlined"
            // placeholder="birthDate"
            name="birthDate"
            value={inputs.birthDate}
            required
          /><br/>
          <Button
            endIcon={<ExitToAppIcon />}
            type="submit"
            variant="contained"
            color="success"
            sx={{ marginTop: 3, borderRadius: 4 }}
          >
            add
          </Button>
       
      </form>
    </div>
  );
}

export default RegisterChild;
