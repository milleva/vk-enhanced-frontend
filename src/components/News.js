import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class News extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Uutiset</h2>
                </Jumbotron>

                <Row style={StyleSheet.main} className="show-grid text-center">
                    <Col xs={12} md={3}>
                       <p><Button style={{color: 'black', fontFamily: 'Josefin Sans'}} bsStyle="default" >
                           Löscaba spring #26
                       </Button> - pp/kk/vvvv</p>
                    </Col>
                    <Col xs={12} md={9}>

                    </Col>

                </Row>
            </Grid>
        )
    }
}

const StyleSheet = {
    main: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2em'
    }
}