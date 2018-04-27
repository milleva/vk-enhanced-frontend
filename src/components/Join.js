import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import logo from '../images/vk_logo.png'
import Modal from './RulesModal'

export default class Join extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <Row>
                        <Col xs={2} md={2}>
                            <Image src={logo} responsive />
                        </Col>
                    </Row>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>JÄSENHAKEMUS</h2>
                    <p>pakolliset kentät merkitty *</p>
                    <br/>
                    <form className="messageForm">
                        <p><input type="checkbox" required/> Olen lukenut ja hyv&auml;ksyn seuran <Modal text="säännöt"/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="nimi *" required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="sukunimi *" required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Osoite"/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Syntymäaika *" required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Sähköposti *" required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Puhelin *" required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Vanhemman puh."/></p>
                        <p><textarea style={styleSheet.input} type="text" placeholder="Muuta" rows="8" cols="45"/></p>
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
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'Josefin Sans',
        fontSize: '1.5em'
    }
}