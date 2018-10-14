import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, Button, Col, Row } from 'reactstrap';


class Cards extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>

                            <a href="/beerInfo"><CardImg width="100%" className="rounded" src={beer.imageURL} alt="beer" /></a>
                            <CardBody>
                                <CardTitle>{beer.beerName}</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>{beer.beerNote}</CardText>

                            </CardBody>
                        </div>
                    </Col>

                </Row>
            </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderCards()}
            </div >
        )


    }
}


export default Cards;