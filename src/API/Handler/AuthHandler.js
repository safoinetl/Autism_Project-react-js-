import * as api from "../API";
import jwtDecode from "jwt-decode";

export const Authenticate =  async(formValue,navigate) => {
    console.log(formValue)
    try {
        const response = await api.signUp(formValue);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        const decodedToken = jwtDecode(response.data.refresh_token);
        const user = decodedToken.role[0].authority
        if (user =="ADMIN") {
            navigate("/admin/manageUser")
        } else{
            navigate("/profile")
        }
        
        
        console.log(response.data)
        return response.data;

    } catch (error) {
        return console.log(error)
    }
}