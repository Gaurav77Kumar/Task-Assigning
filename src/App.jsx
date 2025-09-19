import Login from "./components/Auth/Auth/Login";
import { useState, useEffect, useContext } from "react";
import Employedashboard from "./components/Auth/Dashboard/Employedashboard";
import Header from "./components/Auth/others/Header";
import TaskList from "./components/Auth/others/TaskListNumber";
import AdminDashBoard from "./components/Auth/Dashboard/AdminDashBoard";
import { getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext);



  useEffect(() => {

  if(authData) {
    const loggedInUser = localStorage.getItem("loggedInUser"); // Retrieve logged-in user info from localStorage 

     if (loggedInUser) { // if user info exist in LocalStorage 
      const parsedUser = JSON.parse(loggedInUser); // Parse the JSON string back to an object
      setUser(parsedUser.role); // set role (admin or employee)
      setloggedInUserData(parsedUser.data || null); // Assuming 'data' holds the employee object
     }
    }
    
  }, [authData]); // Run this effect whenever authData changes 

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));
    } else if (authData && authData.employees) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if(employee) {
        setUser("employee");
        setloggedInUserData(employee); // Set the actual employee object
        localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee}));
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashBoard  changeUser={setUser}/>}
      {user === "employee" && <Employedashboard  changeUser={setUser} data={loggedInUserData}/>}
    </>
  );
}

export default App;
