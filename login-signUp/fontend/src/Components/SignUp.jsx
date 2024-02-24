import React, { useState } from "react";
import emailIcon from "./../assets/email.png";
import passwordIcon from "./../assets/password.png";
import personIcon from "./../assets/person.png";
import { validation } from "./../../Validation/signupValidation";

function SignUp() {
  const [errors, setErrors] = useState({});
  const [member, setMember] = useState({
    Name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setMember((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(member);
    const validationError = validation(member);
    setErrors(validationError);
    if (
      !validationError.full_name &&
      !validationError.email &&
      !validationError.password
    ) {
      console.log(member);
      //send to the server
      setMember({
        Name: "",
        email: "",
        password: "",
      });
    } else {
      //console.log(errors);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={personIcon} alt="" />
          <input
            type="text"
            placeholder="Full Name"
            required
            name="Name"
            onChange={handleChange}
            value={member.Name}
          />
        </div>
        {errors.full_name && <span>{errors.full_name}</span>}
        <div className="input">
          <img src={emailIcon} alt="" />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
            value={member.email}
          />
        </div>
        {errors.email && <span>{errors.email}</span>}
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handleChange}
            value={member.password}
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div className="login">
        <button onClick={handleClick} className="login-btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default SignUp;
