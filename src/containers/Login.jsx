import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HashLoader from "react-spinners/HashLoader";

import { loginUser } from "./../actions/authActions";
import {
  AuthHeading,
  LoginWrapper,
  LoginContainer,
  LoginCard,
  LoginForm,
} from "./../styles/Login.styles";
import {
  Button,
  LoaderContainer,
  FootNote,
  StyledLink,
} from "./../styles/globalStyles";

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

  const submitForm = (e) => {
    e.preventDefault();

    const userData = { ...values };
    props.login(userData, props.history);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        {!props.auth.loading ? (
          <LoginCard>
            <AuthHeading>Login</AuthHeading>
            <LoginForm onSubmit={submitForm}>
              <div className="fields">
                <label>
                  <h2>Email</h2>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  <h2>Password</h2>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <Button type="submit" onClick={submitForm}>
                Login
              </Button>
            </LoginForm>
          </LoginCard>
        ) : (
          <LoaderContainer>
            <HashLoader loading color="#fff" size={45} />
          </LoaderContainer>
        )}
        <FootNote>
          Don't have an account yet?{" "}
          <StyledLink to="/signup" style={{ textDecoration: "underline" }}>
            Signup
          </StyledLink>
        </FootNote>
      </LoginContainer>
    </LoginWrapper>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }),
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData, history) => dispatch(loginUser(userData, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
