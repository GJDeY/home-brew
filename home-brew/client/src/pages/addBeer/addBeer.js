import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Navigation from "../../components/Navbar/Navbar";
import Banners from "../../components/Banners/Banners";
import Login from "../Login/Login";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class addBeers extends Component {
    state = {
        example: "some state!"
    };

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Form>
                    <FormGroup>
                        <Label for="beerNameID">Beer Name: </Label>
                        <Input type="text" name="beerName" id="beerNameID" placeholder="Bud Light" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="beerStyleID">Beer Style</Label>
                        <Input type="select" name="select" id="beerStyleID">
                            <option>Ale</option>
                            <option>Lager</option>
                            <option>Stouts and Porters</option>
                            <option>Malts</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default addBeers;
