import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import PrivateRoute from "./containers/PrivateRoute";
import { logoutUser } from "./actions/authActions";

function App(props) {
  const logout = () => {
    props.logoutUser();
    toast.success("Logged out successfully");
  };

  return (
    <Router>
      <div>
        {props.auth.isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
      <ToastContainer position="bottom-right" autoClose={4000} />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(App);
