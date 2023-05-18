
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavBar from './AdminNavbar';

function ManageUser() {
  const [usersList, setUsersList] = useState([]);
  const [ref, refrech] = useState([]);
  const effect = async (e) => {


    try {
      const token = localStorage.getItem("refresh_token");
      const res = await axios.get('http://localhost:8090/api/responsable/listUser',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log(res.data);
      setUsersList(res.data);

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {

    effect()

  }, []);

  const deluser = async (id) => {
    const token = localStorage.getItem("refresh_token");
    const res = await axios.delete(`http://localhost:8090/api/responsable/deleteUser/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    refrech();

  }







  return (
    <div>

      

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th style={{display : "none"}} >ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((row) => (
            <tr key={row.id}>
              <td style={{display : "none"}}>{row.id}</td>
              <td>{row.firstName || "-"}</td>
              <td>{row.lastName || "-"}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <td><Button variant="danger" onClick={() => { deluser(row.id) }}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

}

export default ManageUser