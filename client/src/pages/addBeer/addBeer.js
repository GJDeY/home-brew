import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Navigation from "../../components/Navbar/Navbar";
import Banners from "../../components/Banners/Banners";
import Login from "../Login/Login";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateBeerForm extends Component {
    state = {
        beerName: "",
        brewer: "",
        beerNote: "",
        style: "IPA",
        imageURL: "",
        hbcAddress: ""
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        API.createBeer({
            beerName: this.state.beerName, brewer: this.state.brewer, beerNote: this.state.brewer, style: this.state.style, imageURL: this.state.imageURL, hbcAddress: this.state.hbcAddress
        })
            .then(result => {
                console.log(result);
                this.props.history.push('/beers');
            }).catch(error => {
                console.log(error)
            })
        this.setState({
            beerName: "",
            brewer: "",
            beerNote: "",
            style: "IPA",
            imageURL: "",
            hbcAddress: ""

        })

    }

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Form className="col-4 mx-auto">
                    <FormGroup>
                        <Label for="beerNameID">Beer Name</Label>
                        {/* type="text" name="beerName" id="beerNameID"  */}
                        <Input type="text" name="beerName" value={this.state.beerName} id="beerNameID" onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="brewerID">Brewer Name</Label>
                        <Input type="text" name="brewer" value={this.state.brewer} id="brewerID" onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="beerNoteID">Beer Note</Label>
                        <Input type="text" name="beerNote" value={this.state.beerNote} id="beerNoteID" onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="styleID">Beer Style</Label>
                        <select type="select" value={this.state.style} name="style" id="styleID" onChange={this.handleInputChange}>
                            <option value="IPA">IPA</option>
                            <option value="Pilsner">Pilsner</option>
                            <option value="Stout">Stout</option>
                            <option value="Saison">Saison</option>
                            <option value="Lager">Lager</option>
                            <option value="Ale">Ale</option>
                            <option value="Belgian">Belgian</option>
                            <option value="Hefeweizen">Hefeweizen</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageURLID">Add a picture of your beer</Label>
                        <Input type="text" name="imageURL" value={this.state.imageURL} id="imageURLID" onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hbcAddressID">Add your ETH Address</Label>
                        <Input type="text" name="hbcAddress" value={this.state.hbcAddress} id="hbcAddressID" onChange={this.handleInputChange} />
                    </FormGroup>
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}


export default CreateBeerForm;
