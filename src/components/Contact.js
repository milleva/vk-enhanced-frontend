import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class Contact extends React.Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Yhteystiedot: </h2>
                    <div style={{textAlign: 'left'}}>
                        <p><u>Sähköposti</u>: voittamisenkulttuuriry@outlook.com</p>
                        <p><u>Hallituksen puheenjohtaja</u>: Ilkka Lehtinen 0400 355 201</p>
                        <p><u>Varapuheenjohtaja</u>: Niilo Selin</p>
                        <p><u>Sihteeri</u>: Hannu Aro 050 3289319</p>
                        <p><u>Rahastonhoitaja</u>: Mari Lehtonen 050 5678 719</p>
                    </div>
                    <br/>

                    <h2 style={{fontFamily: 'Josefin Sans'}}>Tai suora yhteydenotto: </h2>
                    <form className="messageForm">
                        <p><input style={styleSheet.input} type="text" placeholder="nimi"/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="sähköposti"/></p>
                        <p><textarea style={styleSheet.input} type="text" placeholder="Uusi viesti" rows="8" cols="45"/></p>
                        <div><button style={styleSheet.button} type="submit">Lähetä</button></div>
                    </form>
                </Jumbotron>
            </Grid>
        )
    }
}

const styleSheet = {
    input: {
        borderRadius: '0.5em',
        padding: 5,
        borderColor: '#8A007F'
    },
    button: {
        borderRadius: '0.5em',
        borderColor: '#8A007F',
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'Josefin Sans',
        fontSize: '1.5em'
    }
}