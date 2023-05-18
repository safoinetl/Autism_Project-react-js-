import React from 'react';

import LoadingToRedirect from './LoadingToRedirect';
import jwtDecode from "jwt-decode";



const AdminRedirect = ({children}) => {
    const token = localStorage.getItem("refresh_token");
    const decodedToken = jwtDecode(token);
    const user = decodedToken.role[0].authority
    

  return user == "ADMIN" ? children : <LoadingToRedirect />

}

export default AdminRedirect