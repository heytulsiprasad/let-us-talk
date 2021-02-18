import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HashLoader from "react-spinners/HashLoader";

import { signUpUser } from "./../actions/authActions";

import {
  AuthHeading,
  SignupCard,
  SignupContainer,
  SignupForm,
  SignupWrapper,
} from "./../styles/Signup.styles";
import {
  Button,
  LoaderContainer,
  StyledLink,
  FootNote,
} from "./../styles/globalStyles";

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
    <SignupWrapper>
      <SignupContainer>
        {!props.auth.loading ? (
          <SignupCard>
            <AuthHeading>Signup</AuthHeading>
            <SignupForm onSubmit={submitForm}>
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
                Signup
              </Button>
            </SignupForm>
          </SignupCard>
        ) : (
          <LoaderContainer>
            <HashLoader loading color="#fff" size={45} />
          </LoaderContainer>
        )}
        <FootNote>
          Already have an account?{" "}
          <StyledLink to="/login" style={{ textDecoration: "underline" }}>
            Login
          </StyledLink>
        </FootNote>
      </SignupContainer>
    </SignupWrapper>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUpUser })(Signup);
