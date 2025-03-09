import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
