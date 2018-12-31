import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import signupAPI from '../services/signup_API'

export default class Events extends React.Component {
    constructor(){
        super()
        this.state = {
            nimi: "",
            sposti: "",
            numero: "",
            osoite: "",
            sarja: "",
            nelinpeli: false,
            nelinpelipari: "",
            muuta: "",
            consent: false
        }
    }
    
    sendSignup = () => async e => {
        e.preventDefault()
        if(!this.state.sarja) {
            alert("Valitse vielä sarja")
        } else {
            const res = signupAPI.sendLoscabaSignup(this.state)
            if (res) {
                alert(`Kiitos ilmottautumisestasi ${this.state.nimi}!`)
            }
        }
        console.log(this.state)
    }
    
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Kilpailut ja tapahtumat</h2>
    
                    {false && <div><h3 style={{fontFamily: 'Josefin Sans'}}>Löscaba #27 ilmoittautuminen:</h3>
                        <h4>Aika: 17.11.2018 klo 9:00-22:00</h4>
                        <h4>Paikka: <a href="http://www.puhoscenter.fi/" target="_blank">Puhos Center Kulosaari</a></h4>
                        <form className="messageForm" onSubmit={this.sendSignup()}>
                            <p><input style={styleSheet.input} type="text" placeholder="nimi *" onChange={e => this.setState({nimi: e.target.value})} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="sähköposti *" onChange={e => this.setState({sposti: e.target.value})} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="numero *" onChange={e => this.setState({numero: e.target.value})} required/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="osoite" onChange={e => this.setState({osoite: e.target.value})}/></p>
                            <p><b>Sarja:</b></p>
                            <p>
                                <label>
                                    <input type="radio" name="sarja" value="Kilpa" onChange={e => this.setState({sarja: e.target.value})}/>
                                    &nbsp;Kilpa</label>&nbsp;
            
                                <label>
                                    <input type="radio" name="sarja" value="Harraste" onChange={e => this.setState({sarja: e.target.value})}/>
                                    &nbsp;Harraste</label>&nbsp;
                                <label>
                                    <input type="radio" name="sarja" value="Hupi" onChange={e => this.setState({sarja: e.target.value})}/>
                                    &nbsp;Hupi</label>&nbsp;
                                <label>
                                    <input type="radio" name="sarja" value="Naiset" onChange={e => this.setState({sarja: e.target.value})}/>
                                    &nbsp;Naiset</label>&nbsp;
                            </p>
                            <p><input type="checkbox" onChange={e => this.setState({nelinpeli: e.target.checked})}/>&nbsp;Nelinpeli&nbsp;<input style={styleSheet.input} type="text" placeholder="pari (ei pakol.)" onChange={e => this.setState({nelinpelipari: e.target.value})}/></p>
        
                            <p><textarea style={styleSheet.input} type="text" placeholder="Muuta" rows="8" cols="45" onChange={e => this.setState({muuta: e.target.value})}/></p>
        
                            <p><input type="checkbox" onChange={e => this.setState({consent: e.target.checked})}/>&nbsp;Hyväksyn että VK saa käyttää tietojani sivuillaan kilpailuun liittyen (nimi, valokuvat, tulos…)</p>
                            <p style={{fontSize: "0.8em"}}>Huom! VK:lla on oikeus rajoittaa osallistujamäärää vapaasti.</p>
                            <div><button style={styleSheet.button} type="submit">Lähetä</button></div>
                        </form></div>}
                    
                    
                </Jumbotron>
            </Grid>
        )
    }
}

const styleSheet = {
    main: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
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
