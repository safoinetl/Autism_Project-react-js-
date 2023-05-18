import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';

function ListActivity() {
  const [activity, setActivity] = useState([]);
  const [ref, refrech] = useState([]);
  const token = localStorage.getItem("refresh_token");
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/responsable/listActivity", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActivity(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const delacti = async (id) => {
    const token = localStorage.getItem("refresh_token");
    const res = await axios.delete(`http://localhost:8090/api/responsable/deleteActivity/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    refrech();

  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th style={{display : "none"}}>ID</th>
          <th>Description</th>
          <th>Starting Date</th>
          <th>Ending Date</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Group</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {activity.map(item => (
          <tr key={item.id}>
            <td style={{display : "none"}}>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.startingDate}</td>
            <td>{item.endingDate}</td>
            <td>{item.createdAt}</td>
            <td>{item.updatedAt}</td>
            <td>{item.group?.nameG}</td>
            <td><Button variant="danger" onClick={() => { delacti(item.id) }}>Delete</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ListActivity