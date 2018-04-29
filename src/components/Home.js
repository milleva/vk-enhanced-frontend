import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import mapImage from '../images/vk_yhteys.JPG';
import logoOne from '../images/vk_logo_1.jpg'
import logoTwo from '../images/vk_logo.jpg'
import logoThree from '../images/vk_logo_purple.jpg'

export default class Home extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Sulkapalloseura Voittamisen Kulttuuri ry</h2>

                    <p>Seuran kotihalli sijaitsee osoitteessa Kulosaarentie 2, 00570 Helsinki.
                        Kulosaaren metroasemalta on n. 600 m. kävelymatka hallille.
                        Hallin edustalla on runsaasti pysäköintipaikkoja autolle.
                        Itäväylän bussipysäkin vieressä sijaitsevaan halliin pääsee monella eri bussilla, jotka kulkevat
                        Itäväylää keskustaan ja pohjoiseen. </p>
                    <Image src={mapImage} responsive rounded/>
                    <br/>
                    <Row>
                        <Col xs={4} md={4}>
                            <Image src={logoOne} responsive thumbnail />
                        </Col>
                        <Col xs={4} md={4}>
                            <Image src={logoTwo} responsive thumbnail/>
                        </Col>
                        <Col xs={4} md={4}>
                            <Image src={logoThree} responsive thumbnail />
                        </Col>
                    </Row>
                </Jumbotron>
            </Grid>
        )
    }
}

const styleSheet = {
    tag: {
        float: 'right'
    }
}