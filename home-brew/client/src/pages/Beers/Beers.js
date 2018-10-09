import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Navigation from "../../components/Navbar/Navbar";
import Banners from "../../components/Banners/Banners";
import Login from "../Login/Login";
import Cards from "../..components/Cards/Cards"

class Beers extends Component {
    state = {
        example: "some state!"
    };

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Banners></Banners>
                <Cards></Cards>
            </div>
        );
    }
}

export default Beers;
