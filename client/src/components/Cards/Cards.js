import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, Button, Col, Row } from 'reactstrap';
import API from "../../utils/API";



class Cards extends React.Component {



    renderCards = () => {
        return this.props.beers.map(beer => {
            return (<div className="col-3">
                <Col>


                    <a href="/beerInfo"><CardImg width="100%" className="rounded" src={beer.imageURL} alt="beer" /></a>
                    <CardBody style={{ color: "white" }}>
                        <CardTitle>{beer.beerName}</CardTitle>
                        <CardSubtitle>{beer.style}</CardSubtitle>
                        <CardText>{beer.beerNote}</CardText>
                        <CardText>{beer.hbcAddress}</CardText>
                        <Button color="dark" body style={{ margin: "10px 10px 10px 10px" }}>Update Beer!</Button>
                        <Button onClick={() => this.props.handleDeleteBeer(beer._id)} color="dark" body style={{ margin: "10px 10px 10px 10px" }}>Delete Beer!</Button>
                    </CardBody>
                </Col>

            </div>
            )
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <Row>
                    {this.renderCards()}
                </Row>
            </div >
        )


    }
}


export default Cards;