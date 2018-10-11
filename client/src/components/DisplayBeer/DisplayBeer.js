import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, Button, Col, Row } from 'reactstrap';


class DisplayBeer extends React.Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div style={{ margin: "40px 0px" }}>
                <Row>
                    <Col md="6" className="mx-auto" body>
                        <div style={{ margin: '30px' }}>
                            <a href="/beerInfo"><CardImg width="100%" className="rounded" src="https://www.gannett-cdn.com/-mm-/89934f7b13e7717eb560f3babda84f20895abcd0/c=83-0-724-482/local/-/media/2018/07/17/DetroitFreeP/DetroitFreePress/636674313628993565-GettyImages-684133728.jpg?width=534&height=401&fit=crop" alt="beer" /></a>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="mx-auto">

                        <Button color="dark" href="UPDATE ROUTE" body>Update Beer!</Button>
                        <Button color="dark" href="DELETE ROUTE" body>Delete Beer!</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DisplayBeer;