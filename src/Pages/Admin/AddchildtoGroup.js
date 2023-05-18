import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';

import axios from "axios";

const AddChildToGroup = () => {

  const handleChildSelect = (event) => {
    setSelectedChild(event.target.value);
  };

  const handleGroupSelect = (event) => {
    setSelectedGroup(event.target.value);
  };


  const [child, setchild] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const token = localStorage.getItem("refresh_token");

  useEffect(() => {
    fetchchild();
    fetchGroups();
  }, []);

  const handlePostRequest = async () => {
    if (selectedChild && selectedGroup) {
      try {
        const response = await axios.post(
          `http://localhost:8090/api/responsable/group/user/${selectedGroup}/child/${selectedChild}`,
          /* In this code, `null` is used as the initial state value for `selectedChild` and
          `selectedGroup` variables. This means that when the component first renders, these
          variables will have a value of `null`. Later, when the user selects a child and a group
          from the dropdown menus, the `handleChildSelect` and `handleGroupSelect` functions will
          update the state of `selectedChild` and `selectedGroup` respectively, with the selected
          values. */
          null,
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

  const fetchchild = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8090/api/responsable/listChild",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setchild(response.data);
    } catch (error) {
      console.error("Error fetching child:", error);
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
    <div style={{width:"500px",margin:"auto"}}>
      <Form>
        <Form.Group controlId="childSelect">
          <Form.Label>Child:</Form.Label>
          <FormControl as="select" onChange={handleChildSelect}>
            <option value="">Select a child</option>
            {child.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name}
              </option>
            ))}
          </FormControl>
        </Form.Group>

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

        <Button variant="primary" onClick={handlePostRequest}>
          Add to Group
        </Button>
      </Form>

     
    </div>
  );
};

export default AddChildToGroup;