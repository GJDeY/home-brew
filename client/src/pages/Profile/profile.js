import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from "../../components/Navbar/Navbar";
import LoginForm from "../../components/Login/Login";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Navbar
} from 'reactstrap';


class Profile extends Component {
    state = {
        example: "some state!"
    };

    render() {
        return (
            <div>
                <Navigation />
                <h1>User Information</h1>
            </div>
        );
    }
}

export default Profile;