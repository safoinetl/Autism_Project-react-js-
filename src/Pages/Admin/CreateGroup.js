import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, Button } from "@mui/material";
import { Form } from 'react-bootstrap';
import axios from "axios";

const AddGroup = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [inputs, setInputs] = useState({
    nameG: "",
    desc: ""
  });

  const handleGroupSelect = (event) => {
    setSelectedGroup(event.target.value);
  };

  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const token = localStorage.getItem("refresh_token");

  useEffect(() => {
    fetchGroups();
  }, []);

  const handlePostRequest = async () => {
    if (selectedGroup) {
      try {
        const response = await axios.post(
          `http://localhost:8090/api/responsable/groups/${selectedGroup}`,
          inputs,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error making the request:", error);
      }
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8090/api/responsable/listUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGroups(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <Form>
        <Form.Group controlId="groupSelect">
          <Form.Control as="select" onChange={handleGroupSelect}>
            <option value="">Select a responsible of the group</option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.firstName} {group.lastName}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <br />
        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          label="Group Name"
          name="nameG"
          value={inputs.nameG}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          label="Group Description"
          name="desc"
          value={inputs.desc}
          onChange={handleChange}
          required
        />
        <br />
        <Button variant="contained" onClick={handlePostRequest}>
          Add Group
        </Button>
      </Form>
    </div>
  );
};

export default AddGroup;
