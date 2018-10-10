import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from "../../components/Navbar/Navbar";
import LoginForm from "../../components/Login/Login";

class Login extends Component {
    state = {
        example: "some state!"
    };

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <LoginForm></LoginForm>
            </div>
        );
    }
}

export default Login;