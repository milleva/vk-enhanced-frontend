import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import insta from '../images/insta_icon.png'
import email from '../images/email_icon.png'
import EmailValidator from 'email-validator'
import contactAPI from '../services/contact_API'

export default class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            details: ""
        }
        console.log(this.state)
    }

    modifyName = () => (event) => {
        this.setState({name: event.target.value})
    }

    modifyEmail = () => (event) => {
        this.setState({email: event.target.value})
    }

    modifyDetails = () => (event) => {
        this.setState({details: event.target.value})
    }

    sendMessage = () => async (event) => {
        event.preventDefault()
        if(EmailValidator.validate(this.state.email)){
            const res = await contactAPI.sendMessage(this.state.name, this.state.email, this.state.details)
            if(res){
                alert('Kiitos viestistäsi, olemme vastaanottaneet sen. Käsittelemme viestit kerran viikossa.')
            }
            return
        }
        alert('Antamasi email osoite on kelvoton')
    }

    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Yhteystiedot: </h2>
                </Jumbotron>

                <Row>
                    <Col sm={12} md={12}>
                        <div style={styleSheet.main}>
                            <p><u>Sähköposti</u>: vk@vkry.info</p>
                            <p><u>Hallituksen puheenjohtaja</u>: Ilkka Lehtinen 0400 355 201</p>
                            <p><u>Varapuheenjohtaja</u>: Niilo Selin</p>
                            <p><u>Sihteeri</u>: Hannu Aro 050 3289319</p>
                            <p><u>Rahastonhoitaja</u>: Mari Lehtonen 050 5678 719</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3} md={1}>
                        <a title="Instagramissa" target="_blank" href="https://www.instagram.com/voittamisenkulttuuriry/"><Image src={insta} responsive /></a>
                    </Col>
                    <Col xs={3} md={1}>
                        <a title="Sähköposti" target="_blank" href="mailto:vk@vkry.info"><Image src={email} responsive /></a>
                    </Col>
                </Row>
                <br/>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Tai suora yhteydenotto: </h2>
                </Jumbotron>
                <Row>
                    <Col sm={12} md={12}>
                        <form className="messageForm" onSubmit={this.sendMessage()}>
                            <p><input style={styleSheet.input} type="text" placeholder="nimi" onChange={this.modifyName()} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="sähköposti" onChange={this.modifyEmail()} required/></p>
                            <p><textarea style={styleSheet.input} type="text" placeholder="Uusi viesti" rows="8" cols="45" onChange={this.modifyDetails()} required/></p>
                            <div><button style={styleSheet.button} type="submit">Lähetä</button></div>
                        </form>
                    </Col>
                </Row>

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
        fontSize: '1.5em',
        marginBottom: '1em'
    },
    main: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2em',
        textAlign: 'left'
    }
}