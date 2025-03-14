import { useState } from "react";
import "./UserButton.css";
import { Link } from "react-router";

function UserButton() {
  const currentUser = true;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className="user">
      <img src="/asset/user.svg" onClick={() => setOpen(!open)} alt="User" />
      {open && (
        <div className="dropdown-menu">
          <Link to="/profile">
            <div className="dropdown">PROFILE</div>
          </Link>
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
