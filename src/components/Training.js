import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import tenavaPhoto from '../images/tenava_valmennus.png'
import pingisPhoto from '../images/ping_pong_valmennus.png'


export default class Training extends React.Component {

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
                        <form onSubmit={this.alertLaziness()}>
                            <p><input style={styleSheet.input} type="text" placeholder="nimi"/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="numero"/></p>
                            <p><input style={styleSheet.input} type="text" placeholder="sähköposti"/></p>
                            <p>
                                Ma&nbsp;
                                <label><input type="radio" value="option1"/>07-08</label>&nbsp;
                                <label><input type="radio" value="option1"/>08-09</label>&nbsp;
                                <label><input type="radio" value="option1"/>09-10</label>&nbsp;
                                Tekniikka
                            </p>
                            <p>
                                Ke&nbsp;
                                <label><input type="radio" value="option1"/>07-08</label>&nbsp;
                                <label><input type="radio" value="option1"/>08-09</label>&nbsp;
                                <label><input type="radio" value="option1"/>09-10</label>&nbsp;
                                Fysiikka
                            </p>
                            <p>
                                Pe&nbsp;
                                <label><input type="radio" value="option1"/>07-08</label>&nbsp;
                                <label><input type="radio" value="option1"/>08-09</label>&nbsp;
                                <label><input type="radio" value="option1"/>09-10</label>&nbsp;
                                Vaihteleva teema
                            </p>

                            <div><button style={styleSheet.button} type="submit">Ilmoittaudu</button></div>

                        </form>

                    </div>


                    <div>
                        <Col mdOffset={1} >
                            <Image src={pingisPhoto} responsive rounded/>
                        </Col>
                    </div>

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