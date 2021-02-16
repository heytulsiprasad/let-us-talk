import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { loginUser } from "./../actions/authActions";
import { clearErrors } from "./../actions/errorActions";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [values, setValues] = useState(initialValues);

  // If authenticated, redirect to home
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [props.auth.isAuthenticated, props.history]);

  // If errors, show a toast
  useEffect(() => {
    toast.error(props.errors.error.message, {
      onClose: props.clearErrors,
    });
  }, [props.errors, props.clearErrors]);

  const submitForm = (e) => {
    e.preventDefault();

    const userData = { ...values };
    props.loginUser(userData, props.history);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser, clearErrors })(Login);
