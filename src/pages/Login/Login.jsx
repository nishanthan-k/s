import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Login = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({
    userError: false,
    passwordError: false,
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevValues) => {
      return { ...prevValues, [name]: value };
    });
    setError((prevValues) => { return { userError: false, passwordError: false } })
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    const { userName, password } = userDetails;

    if (userName === "") {
      setError((prevValues) => { return { userError: true,  } })
    }

    let user = empData.employees.filter((emp, i) => emp.userName === userName);
    console.log(user)

    if (user.length) {
      if (user[0].password === password) {
        console.log("same pass")
        navigate("/dashboard");
      } else {
        console.log("no same pass")
        // console.log(password, user.password)
        setError((prevValues) => { return { ...prevValues, passwordError: true } })
      }
    } else {
      console.log("no user")
      setError((prevValues) => { return { ...prevValues, userError: true } })
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">

        <Form
          className="login-form"
          onSubmit={ (e) => {
            submitHandler(e);
          } }
        >
          <div className="form-field">
            <Form.Input
              className="form-input required"
              label="Username"
              name="userName"
              placeholder="Username"
              value={ userDetails.userName }
              onChange={ changeHandler }
              error={ error.userError }
            />
          </div>

          { error.userError && <Message error content="User Does Not Exists" /> }
          <div className="form-field">
            <Form.Input
              label="Password"
              name="password"
              placeholder="Password"
              value={ userDetails.password }
              onChange={ changeHandler }
              error={ error.passwordError }
            />
          </div>
          { error.passwordError && <Message error content="Invalid Password" /> }
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
