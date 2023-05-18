import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, TextField, Typography } from "@mui/material";
import { Form, FormControl, Button } from 'react-bootstrap';

import axios from "axios";

const Addactivity = () => {


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const [inputs, setInputs] = useState({
        description: "",
        startingDate: "",
        endingDate: "",
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
                    `http://localhost:8090/api/responsable/registerActivity/${selectedGroup}`,
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
                "http://localhost:8090/api/responsable/GroupList",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setGroups(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    };



    return (
        <div style={{ width: "400px", margin: "auto" }}>
            <Form>


                <Form.Group controlId="groupSelect">
                    <Form.Label>Groups:</Form.Label>
                    <FormControl as="select" onChange={handleGroupSelect}>
                        <option value="">Select a group</option>
                        {groups.map((group) => (
                            <option key={group.id} value={group.id}>
                                {group.nameG}
                            </option>
                        ))}
                    </FormControl>
                </Form.Group>
                <br />
                <TextField
                    margin="normal"
                    type="textarea"
                    variant="outlined"
                    placeholder="Description"
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    required
                /><br />

                <TextField
                    margin="normal"
                    onChange={handleChange}
                    type="date"
                    variant="outlined"
                    // placeholder="birthDate"
                    name="startingDate"
                    value={inputs.startingDate}
                    required
                /><br />
                <TextField
                    margin="normal"
                    onChange={handleChange}
                    type="date"
                    variant="outlined"
                    // placeholder="birthDate"
                    name="endingDate"
                    value={inputs.endingDate}
                    required
                /><br />


                <Button variant="primary" onClick={handlePostRequest}>
                    Add Activity
                </Button>
            </Form>


        </div>
    );
};

export default Addactivity;