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
        beers: []
    };

    componentDidMount() {
        API.getBeers()
            .then(res => this.setState({ beers: res.data }))
    }


    render() {
        return (
            <div>
                <Navigation />
                <Col>
                    <Button md="12" className="mx-auto" color="dark" href="/addBeer" body>Add A Beer!</Button>
                </Col>
                <Cards beers={this.state.beers} />
            </div>
        );
    }
}

export default Beers;