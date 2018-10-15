import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, Button, Col, Row } from 'reactstrap';


class Cards extends React.Component {

    renderCards = () => {
        return this.props.beers.map(beer => {
            return (

                <div className="col-3">
                    <Col>
                        <a href="/beerInfo"><CardImg width="100%" className="rounded" src={beer.imageURL} alt="beer" /></a>
                        <CardBody style={{ color: "white" }}>
                            <CardTitle>{beer.beerName} by {beer.brewer}</CardTitle>
                            <CardSubtitle>{beer.style}</CardSubtitle>
                            <CardText>{beer.beerNote}</CardText>
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