import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from "../../components/Navbar/Navbar";
import SignUpForm from "../../components/SignUp/SignUp";

class SignUp extends Component {
    state = {
        example: "some state!"
    };

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <SignUpForm></SignUpForm>
            </div>
        );
    }
}

export default SignUp;