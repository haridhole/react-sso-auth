import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import NotFound from "./componenets/notFound";
import NavBar from "./componenets/navBar";
import LoginForm from "./componenets/loginForm";
import RegisterForm from "./componenets/registerForm";
import Logout from "./componenets/logout";
import auth from "./services/authService";
import AdminPage from './componenets/AdminPage';
import UserPage from './componenets/UserPage';
import HomePage from './componenets/HomePage';
import AdminProtectedRoute from "./componenets/common/adminProtectedRoute";
import UserProtectedRoute from "./componenets/common/userProtectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <BrowserRouter>
        <ToastContainer />
        <NavBar user={user} />
        <main>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <AdminProtectedRoute path="/admin" component={AdminPage} />
            <UserProtectedRoute path="/user" component={UserPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
