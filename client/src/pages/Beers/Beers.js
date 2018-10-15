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
        beers: [],
        HBCBalances: []
    };

    beersTemp = [];


    handleDeleteBeer = id => {
        API.deleteBeer(id)
            .then(res => this.getAllBeers())
            .catch(err => console.log(err));
    }

    getAllBeers = () => {
        API.getBeers()
            .then(res => {
                this.beersTemp = res.data;
                return Promise.all(this.beersTemp.map(beer => API.getHBC('0x62c7c0afb1276ef66f664ad8cedced64b4c77ff2')))
            })
            .then(hbcs => {
                let HBCBalances = hbcs.map(hbc => {
                    console.log(hbc.data.result);
                    return hbc.data.result;
                });

                this.setState({
                    beers: this.beersTemp,
                    HBCBalances
                })
            }).catch(err => {
                console.log(err);
            })
    }

    getHBCAmount = hbcAddress => {
        API.getHBC(hbcAddress)
            .then(res => this.setState({ HBCAmount: res.data.result }))
    }


    componentDidMount() {
        this.getAllBeers();
    }


    render() {
        return (
            <div>
                <Navigation />
                <Col className="col-1 mx-auto" style={{ margin: "40px 0px" }}>
                    <Button color="dark" href="/addBeer" body>Add A Beer!</Button>
                </Col>
                <Cards handleDeleteBeer={this.handleDeleteBeer} beers={this.state.beers} />
            </div>
        );
    }
}

export default Beers;