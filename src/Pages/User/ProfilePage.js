import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("refresh_token");
     axios.get("http://localhost:8090/api/responsable/CurrentAuthent", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <UserNavbar/>
      <br/>
      <br/>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>User Information</h3>
            </div>
            <div className="card-body">
              
              <p>
                <strong>First Name:</strong>{" "}
                {user.firstName ? user.firstName : "-"}
              </p>
              <p>
                <strong>Last Name:</strong>{" "}
                {user.lastName ? user.lastName : "-"}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
