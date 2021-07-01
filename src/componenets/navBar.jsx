import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav>
      <div id="navbarNavAltMarkup">
        <div>
        {user && (<NavLink to="/home">
            HomePage
          </NavLink>)}
          &nbsp;
        {user && user.isAdmin && (<NavLink to="/admin">
            AdminPage
          </NavLink>)}
          &nbsp;
        {user && !user.isAdmin && (<NavLink to="/user">
            UserPage
          </NavLink>)}
          &nbsp;
          {!user && (
            <React.Fragment>
              <NavLink to="/login">
                Login
              </NavLink>
              &nbsp;
              <NavLink to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink to="/profile">
                {user.name}
              </NavLink>
              &nbsp;
              <NavLink to="/logout">
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
