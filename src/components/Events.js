import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class Events extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Kilpailut ja tapahtumat</h2>
                </Jumbotron>
                <Row style={StyleSheet.main} className="show-grid text-center">
                    <Col xs={12} md={12}>
                        LöScaba #27 coming soon...
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