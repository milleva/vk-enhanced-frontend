import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import am from '../images/AM_logo.jpg'
import flow from '../images/Flow_logo.jpg'
import bob from '../images/Bob_logo.jpg'
import victor from '../images/Victor_logo.jpg'
import miller from '../images/miller_solutions_logo.png'

export default class Sponsors extends React.Component {
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Mukana voittamassa:</h2>
                    <div>
                        <h3>AM Digipaino</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                <Image src={am} thumbnail />
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>FlowDrinks</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                <a target="_blank" href="https://flowdrinks.com/"><Image src={flow} thumbnail /></a>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>LKV Marko Välimäki</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                Kiinteistövälittäjä Marko Välimäki
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>massageBob</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                <Image src={bob} thumbnail />
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>Tmi Hannu Aro</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                Mailanjännityspalvelu
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>Victor Finland</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                <Image src={victor} thumbnail />
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h3>Miller Solutions</h3>
                        <Row>
                            <Col xsoffset={2} xs={6} mdOffset={4} md={4}>
                                <Image src={miller} thumbnail />
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </Grid>
        )
    }
}