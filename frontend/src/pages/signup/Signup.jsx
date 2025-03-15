import "./Signup.css";
import Navbar from "../../components/navbar/Navbar";

export default function Signup() {
  return (
    <div className="super">
      <Navbar />
      <div className="container">
        {/* <img src="/asset/bg-login.jpg" alt="Background" className="background-image" /> */}

        <img
          src="/asset/bg-login.jpg"
          alt="Background"
          className="background-image"
        />

        <div className="signup-container">
          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="email-input">Email</label>

            <input
              className="login-input"
              type="email"
              id="email-input"
              placeholder="Enter your email"
            />

            <label htmlFor="password-input">Password</label>
            <input
              className="login-input"
              type="password"
              id="password-input"
              placeholder="Enter your password"
            />
          </div>
          <div className="action-area">
            <button className="submit-button">Create Account</button>
            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
