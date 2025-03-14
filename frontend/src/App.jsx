import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"; // Ensure Home is imported
import "./index.css";
import Profile from "./pages/profile/profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
