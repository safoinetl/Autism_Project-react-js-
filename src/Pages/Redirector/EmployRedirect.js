import React from "react";

import LoadingToRedirect from "./LoadingToRedirect";
import jwtDecode from "jwt-decode";

const PRAdmin = ({ children }) => {
  const token = localStorage.getItem("refresh_token");
  const decodedToken = jwtDecode(token);
  const user = decodedToken.role[0].authority;

  return user == "USER" ? children : <LoadingToRedirect />;
};

export default PRAdmin;
