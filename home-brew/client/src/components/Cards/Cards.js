import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, Button, Col, Row } from 'reactstrap';


class Cards extends React.Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div className="container-fluid" style={{ margin: "40px 0px" }}>
                <Row>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <a href="http://www.google.com"><CardImg width="100%" className="rounded" src="https://www.gannett-cdn.com/-mm-/89934f7b13e7717eb560f3babda84f20895abcd0/c=83-0-724-482/local/-/media/2018/07/17/DetroitFreeP/DetroitFreePress/636674313628993565-GettyImages-684133728.jpg?width=534&height=401&fit=crop" alt="beer" /></a>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg width="100%" className="rounded" src="https://www.maxim.com/.image/t_share/MTQ2ODUxNjY1ODIyMDk4OTgw/two-pints-beer-main.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg top width="100%" className="rounded" src="http://mediad.publicbroadcasting.net/p/wamc/files/201603/beer.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg top width="100%" className="rounded" src="https://www.mrbeer.com/blog/wp-content/uploads/2017/04/what-is-session-beer.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg top width="100%" className="rounded" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg top width="100%" className="rounded" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg top width="100%" className="rounded" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            </CardBody>
                        </div>
                    </Col>
                    <Col md="4" className="flex-wrap" body>
                        <div style={{ margin: '30px' }}>
                            <CardImg top width="100%" className="rounded" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            </CardBody>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Cards;