import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import logo from '../images/vk_logo.png'
import Modal from './modals/RulesModal'
import signupAPI from '../services/signup_API'
import EmailValidator from 'email-validator'

export default class Join extends React.Component {
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            address: "",
            birthday: "",
            phone: "",
            email: "",
            parentphone: "",
            details: ""
        }
    }

    modifyFirstname = () => (event) => {
        this.setState({firstname: event.target.value})
        console.log(this.state.firstname)
    }

    modifyLastname = () => (event) => {
        this.setState({lastname: event.target.value})
    }

    modifyAddress = () => (event) => {
        this.setState({address: event.target.value})
    }

    modifyBirthday = () => (event) => {
        this.setState({birthday: event.target.value})
    }

    modifyPhone = () => (event) => {
        this.setState({phone: event.target.value})
    }

    modifyEmail = () => (event) => {
        this.setState({email: event.target.value})
    }

    modifyParentphone = () => (event) => {
        this.setState({parentphone: event.target.value})
    }

    modifyDetails = () => (event) => {
        this.setState({details: event.target.value})
    }

    sendApplication = () => async (event) => {
        event.preventDefault()
        console.log('send')
        if(EmailValidator.validate(this.state.email)){
            console.log('send2')
            const res = await signupAPI
                .sendMembershiApplication(this.state)
            if(res){
                alert('Kiitos jäsenhakemuksestasi ' + this.state.firstname + ', olemme vastaanottaneet sen. Käsittelemme viestit kerran viikossa.')
            }
            return
        }
        alert('Antamasi email osoite on kelvoton')
    }

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
                    <form className="messageForm" onSubmit={this.sendApplication()}>
                        <p><input type="checkbox" required/> Olen lukenut ja hyv&auml;ksyn seuran <Modal text="säännöt"/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="nimi *" onChange={this.modifyFirstname()} required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="sukunimi *" onChange={this.modifyLastname()} required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Osoite" onChange={this.modifyAddress()}/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Syntymäaika *" onChange={this.modifyBirthday()} required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Sähköposti *" onChange={this.modifyEmail()} required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Puhelin *" onChange={this.modifyPhone()} required/></p>
                        <p><input style={styleSheet.input} type="text" placeholder="Vanhemman puh." onChange={this.modifyParentphone()}/></p>
                        <p><textarea style={styleSheet.input} type="text" placeholder="Muuta" rows="8" cols="45" onChange={this.modifyDetails()}/></p>
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