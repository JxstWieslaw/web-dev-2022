import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { axiosInstance } from "../config";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      logdata: "",
    };
  }

  submithandler = async (e) => {
    e.preventDefault();
    this.senddata = {
      email: this.state.email,
      password: this.state.password,
    };
    await axiosInstance
      .post("/login", this.senddata)
      .then((Response) => {
        if (Response.data.user) {
          localStorage.setItem("token", Response.data.user);
          alert("Login Successful");
          // await axiosInstance.get("/home",)
          window.location.href = "/home";
        }
        // if (Response.data.valid) {
        //   alert(Response.data.status);
        //   this.setState({ email: "", password: "" });
        //   this.setState({ logdata: "authenticated" });
        // } else alert(Response.data);
      })
      .catch((Error) => alert(Error));
  };

  inputhandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // if (this.state.logdata === "authenticated") {
    //   return <Navigate to="/home" replace={true} />;
    // }
    return (
      <div>
        <div className="container" onSubmit={this.submithandler}>
          <form className="form" id="login">
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Email"
              />
              <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Password"
              />
              <div className="form__input-error-message"></div>
            </div>
            <button type="submit" className="form__button">Continue</button>
            <p className="form__text">
              <Link to="/forgotPassword" className="form__link">
                Forgot your password
              </Link>
            </p>
            <p className="form__text">
              <Link id="linkCreateAccount" to="/signup" className="form__link">
                Don't have an account? Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps =(dispatch)=>{
//   return({
//     Login
//   })
// }

export default Login;
