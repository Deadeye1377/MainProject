import { useState } from "react";
import "./UserButton.css";
import { Link } from "react-router";

function UserButton() {
  const currentUser = false;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className="user">
      <img src="/asset/user.svg" onClick = {() => setOpen(!open)}alt="User"  />
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown">PROFILE</div>
          <div className="dropdown">LOGOUT</div>
          <div className="dropdown">ABOUT</div>
        </div>
      )}
    </div>
  ) : (
    <div className="loginContainer">
    <Link to="/login">
      <button>Login</button>
    </Link>
  </div>
  );
}

export default UserButton;
