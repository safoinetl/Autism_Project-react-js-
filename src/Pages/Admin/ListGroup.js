import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildCard from "./ChildCard";
import { Navbar, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NavBar from "./AdminNavbar";

const ListGroup = () => {
  const [group, setgroup] = useState([]);
  const [ref, refrech] = useState([]);
  const token = localStorage.getItem("refresh_token");
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/responsable/GroupList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setgroup(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Group Name</th>
          <th>CreatedAt</th>
          <th>User ID</th>
          <th>User First Name</th>
          <th>User Last Name</th>
          <th>User Email</th>
        </tr>
      </thead>
      <tbody>
        {group.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nameG}</td>
            <td>{item.createdAt ? item.createdAt : "-"}</td>
            <td>{item.userG.id}</td>
            <td>{item.userG.firstName}</td>
            <td>{item.userG.lastName}</td>
            <td>{item.userG.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListGroup;
