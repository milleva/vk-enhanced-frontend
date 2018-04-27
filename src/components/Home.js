import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class Home extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2>Sulkapalloseura Voittamisen Kulttuuri ry</h2>
                    <p>VK:n kotisivut</p>
                </Jumbotron>
            </Grid>
        )
    }
}