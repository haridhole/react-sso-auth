import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        {user && (<NavLink className="nav-item nav-link" to="/home">
            HomePage
          </NavLink>)}
          &nbsp;
        {user && user.isAdmin && (<NavLink className="nav-item nav-link" to="/admin">
            AdminPage
          </NavLink>)}
          &nbsp;
        {user && !user.isAdmin && (<NavLink className="nav-item nav-link" to="/user">
            UserPage
          </NavLink>)}
          &nbsp;
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              &nbsp;
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              &nbsp;
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
