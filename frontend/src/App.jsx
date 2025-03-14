import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home"; // Ensure Home is imported
import "./index.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
