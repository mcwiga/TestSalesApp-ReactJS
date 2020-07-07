import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./stores/userStore";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 40) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    return <div className="registerForm">Register Form</div>;
  }

  async doRegister() {
    console.log("doRegister");
    if (!this.state.username) {
      console.log("Username Required");
      return;
    }
    if (!this.state.password) {
      console.log("Password Required");
      return;
    }
    if (!this.state.email) {
      console.log("Email Required");
      return;
    }
   /* this.setState({
      buttonDisabled: true,
    });*/
    console.log("Fetching data username " + this.state.username);
    try {
      let res = await fetch("/register", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
        }),
      });
      let result = await res.json();
      console.log(result,result.success);
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
        this.props.handleClose();
        console.log("UserStore Username", result.username);
      } else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    } catch (e) {
      this.resetForm();
    }
  }

  render() {
    return (
      <div className="loginForm">
        Log Input
        <InputField
          type="text"
          placeholder="Username"
          value={this.state.username ? this.state.username : ""}
          onChange={(val) => this.setInputValue("username", val)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={this.state.password ? this.state.password : ""}
          onChange={(val) => this.setInputValue("password", val)}
        />
        <InputField
          type="email"
          placeholder="Email Address"
          value={this.state.email ? this.state.email : ""}
          onChange={(val) => this.setInputValue("email", val)}
        />
        <SubmitButton
          text="Register"
          disabled={this.state.buttonDisabled}
          onClick={() => this.doRegister()}
        />
      </div>
    );
  }
}

export default RegisterForm;
