import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import signupAPI from '../services/signup_API'
import EmailValidator from 'email-validator'
import Modal from './modals/PriceModal'
import tenavaPhoto from '../images/tenava_valmennus.png'
import pingisPhoto from '../images/ping_pong_valmennus.png'


export default class Training extends React.Component {
    constructor(){
        super()
        this.state = {
            valmennus: {
                name: '',
                number: '',
                email: '',
                details: {
                    Ma: '',
                    Ke: '',
                    Pe: ''
                }
            },
            pingis: {
                name: '',
                parent: '',
                number: '',
                email: '',
                times: []
            }
        }
    }

    handleTrainingFieldChange = (field) => (event) => {
        let valmennus = this.state.valmennus
        valmennus[field] = event.target.value

        this.setState({valmennus})
    }

    handleTrainingOptionChange = (day) => (changeEvent) => {
        let valmennus = this.state.valmennus
        let details = valmennus.details
        details[day] = changeEvent.target.value

        this.setState({valmennus});
    }

    sendTrainingApplication = () => async (event) => {
        event.preventDefault()
        if(EmailValidator.validate(this.state.valmennus.email)){
            const res = await signupAPI.sendTrainingApplication(this.state.valmennus)
            if(res){
                alert(`Kiitos ilmottautumisestasi ${this.state.valmennus.name}, olemme vastaanottaneet sen. Käsittelemme viestit kerran viikossa.`)
            }
            return
        }
        alert('Antamasi email osoite on kelvoton')
    }

    handlePongFieldChange = (field) => (event) => {
        let pingis = this.state.pingis
        pingis[field] = event.target.value

        this.setState({pingis})
    }

    handlePongOptionChange = () => (event) => {
        let pingis = this.state.pingis
        let times = pingis.times
        if(times.includes(event.target.value)){
            times = times.filter(t => t !== event.target.value)
        } else {
            times = times.concat(event.target.value)
        }
        pingis.times = times

        this.setState({pingis});
    }

    sendPongApplication = () => async (event) => {
        event.preventDefault()
        if(EmailValidator.validate(this.state.pingis.email)){
            const res = await signupAPI.sendPongApplication(this.state.pingis)
            if(res){
                alert(`Kiitos ilmottautumisestasi ${this.state.pingis.name}, olemme vastaanottaneet sen. Käsittelemme viestit kerran viikossa.`)
            }
            return
        }
        alert('Antamasi email osoite on kelvoton')
    }



    alertLaziness = () => (event) => {
        event.preventDefault()
        alert("Not supported yet. Please use direct contact or email at vk@vkry.info for signup.")
    }

    render() {
        return(
            <Grid>
                <Jumbotron style={{backgroundColor: 'white'}}>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Valmennus</h2>

                    <div>
                        <Image src={tenavaPhoto} responsive/>
                        <h3>Voittamisen Kulttuuri tarjoaa tehokkaan aamuvalmennuksen sulkapallon parissa,</h3>
                        <h1 style={styleSheet.purpleHeading}>ILMOITTAUDU MUKAAN</h1>
                        <form onSubmit={this.sendTrainingApplication()}>
                            <p><input style={styleSheet.input} type="text" placeholder="nimi" onChange={this.handleTrainingFieldChange('name')} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="numero" onChange={this.handleTrainingFieldChange('number')} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="sähköposti" onChange={this.handleTrainingFieldChange('email')} required/></p>
                            <p>
                                Ma&nbsp;
                                <label>
                                    <input type="radio" value="07-08" checked={this.state.valmennus.details.Ma === '07-08'} onChange={this.handleTrainingOptionChange('Ma')}/>
                                    07-08:80
                                </label>&nbsp;
                                <label>
                                    <input type="radio" value="09-10" checked={this.state.valmennus.details.Ma === '09-10'} onChange={this.handleTrainingOptionChange('Ma')}/>
                                    8:30-10
                                </label>&nbsp;
                                Tekniikka
                            </p>
                            <p>
                                Ke&nbsp;
                                <label>
                                    <input type="radio" value="07-08" checked={this.state.valmennus.details.Ke === '07-08'} onChange={this.handleTrainingOptionChange('Ke')}/>
                                    07-8:30</label>&nbsp;
                                
                                <label>
                                    <input type="radio" value="09-10" checked={this.state.valmennus.details.Ke === '09-10'} onChange={this.handleTrainingOptionChange('Ke')}/>
                                    8:30-10</label>&nbsp;
                                Fysiikka
                            </p>
                            <p>
                                Pe&nbsp;
                                <label>
                                    <input type="radio" value="07-08" checked={this.state.valmennus.details.Pe === '07-08'} onChange={this.handleTrainingOptionChange('Pe')}/>
                                    07-8:30</label>&nbsp;
                                
                                <label>
                                    <input type="radio" value="09-10" checked={this.state.valmennus.details.Pe === '09-10'} onChange={this.handleTrainingOptionChange('Pe')}/>
                                    8:30-10</label>&nbsp;
                                Vaihteleva teema
                            </p>

                            <div><button style={styleSheet.button} type="submit">Ilmoittaudu</button></div>
                        </form>

                    </div>




                    <div>
                        <Col mdOffset={1} >
                            <Image src={pingisPhoto} responsive rounded/>
                        </Col>
                        <h2 style={styleSheet.redHeading}>Ilmoittaudu Pingiskouluun</h2>
                        <form onSubmit={this.sendPongApplication()}>
                            <p><input style={styleSheet.input} type="text" placeholder="nimi" onChange={this.handlePongFieldChange('name')} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="huoltaja" onChange={this.handlePongFieldChange('parent')}/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="numero" onChange={this.handlePongFieldChange('number')} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="sähköposti" onChange={this.handlePongFieldChange('email')} required/></p>
                            <h3 style={styleSheet.redHeading}>Ryhmät</h3>
                            <p>
                                <label>Ti 07-09 (Aikuisille) <input type="checkbox" value="Ti_07-09" onChange={this.handlePongOptionChange()}/></label>&nbsp;
                            </p>
                            <p>
                                <label>Ti 14-16 (Lapset 7-17v) <input type="checkbox" value="Ti_14-16" onChange={this.handlePongOptionChange()}/></label>&nbsp;
                            </p>
                            <p>
                                <label>To 14-16 (Lapset 7-17v) <input type="checkbox" value="To_14-16" onChange={this.handlePongOptionChange()}/></label>&nbsp;
                            </p>

                            <div><button style={styleSheet.button} type="submit">Ilmoittaudu</button></div>

                        </form>
                    </div>

                    <Modal text="hinnat"/>
                </Jumbotron>
            </Grid>
        )
    }
}

const styleSheet = {
    purpleHeading: {
        color:  '#8A007F',
        fontFamily: 'Josefin Sans'
    },
    redHeading: {
        color:  'red',
        fontFamily: 'Josefin Sans'
    },
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
    }
}
const sulkaRyhmat = [
    {
        day: 'Ma',
        times: ['07-08', '08-09', '09-10'],
        details: 'Tekniikka'
    },
    {
        day: 'Ke',
        times: ['07-08', '08-09', '09-10'],
        details: 'Fysiikka'
    },
    {
        day: 'Pe',
        times: ['07-08', '08-09', '09-10'],
        details: 'Vaihtelee viikottain'
    }
]
