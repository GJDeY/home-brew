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
        beerStyle: "IPA"
    }


    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        API.createBeer({ name: this.state.beerName, style: this.state.beerStyle })
            .then(result => {
                console.log(result)
            }).catch(error => {
                console.log(error)
            })
        this.setState({
            beerName: "",
            beerStyle: "IPA"
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
                        <Label for="beerStyleID">Beer Style</Label>
                        <select type="select" value={this.state.beerStyle} name="beerStyle" id="beerStyleID" onChange={this.handleInputChange}>
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
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}


export default CreateBeerForm;
