import './App.css';
import AppBar from '@mui/material/AppBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from './components/HomePage/HomePage';
import Task from './components/Task/Task';
import User from './components/User/User';
import Userst from './components/User/Userst';
import Changepwd from './components/User/Changepwd';
import Login from './components/Auth/Login';
// import Signin from './components/User/Signin';
function App() {
  return (
     <Router>
  <Header/>
  <Routes>
  <Route path="/HomePage" element={<HomePage/>}>  </Route>
  <Route path="/Task" element={<Task/>}>  </Route>
  <Route path="/User" element={<User/>}>  </Route>
  <Route path="/Userst" element={<Userst/>}>  </Route>
  <Route path="/Login" element={<Login/>}>  </Route>
  <Route path="/Logout" element={<Login/>}>  </Route>
  <Route path="/Changepwd/:email" element={<Changepwd/>}>  </Route>
  </Routes>
    </Router>
  );
}

export default App;
