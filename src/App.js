import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ManageUser from "./Pages/Admin/ManageUser";
import Children from "./Pages/Admin/children";
import Home from "./Pages/Home";
import Register from "./Pages/Admin/Register";
import ProfilePage from "./Pages/User/ProfilePage";
import ChildListPage from "./Pages/Admin/ChildListPage";
import RegisterChild from "./Pages/Admin/registerChild";
import ListActivity from "./Pages/Admin/ListActivity";
import AdminRedirect from "./Pages/Redirector/AdminRedirect";
import RegisterUser from "./Pages/Admin/registerUser";
import Managment from "./Pages/Admin/Managment";
import Group from "./Pages/Admin/Group";
import AddChildToGroup from "./Pages/Admin/AddchildtoGroup";
import Activity from "./Pages/Admin/Activity";
import AddGroup from "./Pages/Admin/CreateGroup";
import EmpGroup from "./Pages/User/empGroup";
import EmpActivity from "./Pages/User/empActivity";
import Empchild from "./Pages/User/empChild";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/manageUser" element={<Managment />} />
          <Route path="/admin/managechildren" element={<Children />} />
          <Route path="/admin/manageGroup" element={<Group />} />
          <Route path="/admin/manageActivity" element={<Activity />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/groups" element={<EmpGroup />} />
          <Route path="/activity" element={<EmpActivity />} />
          <Route path="/child" element={<Empchild />} />

          {
            //remove this
          }
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registeruser" element={<RegisterUser />} />
         
          <Route path="/children" element={<ChildListPage />} />
          <Route path="/registerchildren" element={<RegisterChild />} />
          <Route path="/listactivity" element={<ListActivity />} />
          <Route path="/CtG" element={<AddChildToGroup />} />
          <Route path="/CG" element={<AddGroup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
