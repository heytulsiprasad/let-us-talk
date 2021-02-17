import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { signUpUser } from "./../actions/authActions";

const initialValues = {
  email: "",
  password: "",
};

const Signup = (props) => {
  const [values, setValues] = useState(initialValues);

  // If authenticated, redirect to home
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [props.auth.isAuthenticated, props.history]);

  const submitForm = (e) => {
    e.preventDefault();

    const userData = { ...values };
    props.signUpUser(userData, props.history);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Signup</h1>
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
          Signup
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUpUser })(Signup);
