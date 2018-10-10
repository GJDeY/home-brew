import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Navigation from "../../components/Navbar/Navbar";
import Banners from "../../components/Banners/Banners";
import Login from "../Login/Login";
import Cards from "../../components/Cards/Cards";
import { Button } from 'reactstrap';

class Beers extends React.Component {
    state = {
        example: "some state!"
    };



    render() {
        return (
            <div>
                <Navigation />
                <Cards />
            </div>
        );
    }
}

export default Beers;
