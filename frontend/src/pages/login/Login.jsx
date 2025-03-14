import "./Login.css";

export default function Login() {
  return (
    <div className="container">
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="email-input">Email</label>
        <input type="text" id="email-input" placeholder="Enter your email" />
        <label htmlFor="password-input">Password</label>
        <input type="password" id="password-input" placeholder="Enter your password" />
        <div className="SignUp">
          <a href="#">Forget your password?</a>
          <a href="#">Create an account</a>
        </div>
      </div>
      <button className="login-button">Submit</button>
    </div>
    </div>
  );
}