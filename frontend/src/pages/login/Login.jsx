import "./Login.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className="container">
      
      {/* <img src="/asset/bg-login.jpg" alt="" /> */}
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="email-input">Email</label>
        <input type="text" id="email-input" placeholder="Enter your email" />
        <label htmlFor="password-input">Password</label>
        <input type="password" id="password-input" placeholder="Enter your password" />
        <div className="SignUp">
       
          <a href="#">Forget password?</a>
          <Link to="/signup">
          <a href="#">Create an account</a>
          </Link>
        </div>
      </div>
      <div className="login-button-container">
        <button>Submit</button>
      </div>
    </div>
    </div>
    </>
  );
}