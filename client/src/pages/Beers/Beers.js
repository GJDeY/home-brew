import React, { Component } from "react";
import API from "../../utils/API";
import Navigation from "../../components/Navbar/Navbar";
import Banners from "../../components/Banners/Banners";
import Login from "../Login/Login";
import Cards from "../../components/Cards/Cards";
import { Button, Col, Row } from 'reactstrap';
import { resolve } from "url";

class Beers extends React.Component {
    state = {
        example: "some state!"
    };

    componentDidMount() {
        API.getBeers()
            .then(res => console.log('checking database connect to the backend ---->', res))
    }


    render() {
        return (
            <div>
                <Navigation />

                <Col className="col-1 mx-auto" style={{ margin: "40px 0px" }}>
                    <Button color="dark" href="/addBeer" body>Add A Beer!</Button>
                </Col>
                <Col>
                    <Cards />
                </Col>

            </div>
        );
    }
}

export default Beers;