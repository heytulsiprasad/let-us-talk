import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Rooms from "./containers/Rooms";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import PrivateRoute from "./containers/PrivateRoute";
import { clearToasts } from "./actions/toastActions";
import { AppContainer } from "./styles/App.styles";
import Conversation from "./containers/Conversation";

function App(props) {
  // Catch and show all toasts here
  useEffect(() => {
    if (props.toasts.status) {
      toast[props.toasts.status](props.toasts.message, {
        onClose: props.clearToasts,
      });
    }
  }, [props.toasts, props.clearToasts]);

  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Rooms} />
          <PrivateRoute
            exact
            path="/conversation/:id"
            component={Conversation}
          />
          <Route path="*" component={Login} />
        </Switch>
        <ToastContainer position="bottom-right" autoClose={4000} />
      </Router>
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  toasts: state.toasts,
});

const mapDispatchToProps = (dispatch) => ({
  clearToasts: () => dispatch(clearToasts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
