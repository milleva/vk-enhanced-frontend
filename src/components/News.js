import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class News extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Uutiset</h2>
                </Jumbotron>
            </Grid>
        )
    }
}