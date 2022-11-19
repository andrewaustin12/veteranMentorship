import React from "react";
import "./form.css";

const RegisterForm = () => {
  return (
    <>
      <h1>Register</h1>
      <div className="form-container">
        <form>
          <div className="form-control px-5">
            <div className="form-group my-3">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                className="form-control my-2"
                id="firstName"
                placeholder="Enter your first name"
                // value={registerFormData.firstName}
                // onChange={onFormFieldChange}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control my-2"
                id="lastName"
                placeholder="Enter your last name"
                // value={registerFormData.lastName}
                // onChange={onFormFieldChange}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control my-2"
                id="email"
                aria-describedby="emailHelp"
                autoComplete="email"
                placeholder="Enter a valid email"
                // value={registerFormData.email}
                // onChange={onFormFieldChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group my-3">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="form-control my-2"
                id="password"
                placeholder="Create a password"
                autoComplete="new-password"
                // value={registerFormData.password}
                // onChange={onFormFieldChange}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="password">Confirm Password</label>
              <input
                name="passwordConfirm"
                type="password"
                className="form-control my-2"
                id="passwordConfirm"
                placeholder="Confirm password"
                autoComplete="new-password"
                // value={registerFormData.passwordConfirm}
                // onChange={onFormFieldChange}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="avatarUrl">Avatar URL</label>
              <input
                name="avatarUrl"
                type="text"
                className="form-control my-2"
                id="avatarUrl"
                placeholder="Enter your profile URL"
                // value={registerFormData.avatarUrl}
                // onChange={onFormFieldChange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                // onClick={onRegisterClicked}
                type="submit"
                className="btn btn-primary my-2"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
