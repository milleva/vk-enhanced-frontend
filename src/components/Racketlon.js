import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class Racketlon extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Racketlon - Mailapelien moniottelu</h2>
                    <div style={{textAlign: 'left'}}>
                    <p>Racketlon yhdistää kaikki maailman neljä suosituinta mailapeliä, pingiksen, sulkapallon,
                        squashin ja tenniksen. Ottelun kulku tapahtuu kevyimmästä mailasta raskaimpaa, eli edellä
                        mainitussa järjestyksessä. Jokainen laji pelataan 21 pisteeseen, mikäli erotus squashin
                        jälkeen ei ole liian suuri, jolloin tennis jää kokonaan pelaamatta tai pelataan johtavan
                        pelaajan riittävään pistemäärään asti.</p>
                    <p>Racketlon lajina on kovassa kasvussa niin Suomen mittapuulla, kuin myös maailmalla.
                        Tämän vuoksi myös VK lähti tämän vauhdikkaan junan matkaan. Lisää tietoa lajista ja
                        turnauksista löytyy racketlonliiton sivuilta <a target="_blank" href="http://www.racketlon.fi">www.racketlon.fi</a> ja kansainvälisen kattojärjestön
                        FIR:n sivuilta <a target="_blank" href="http://www.racketlon.net">www.racketlon.net</a></p>
                    <p>Voittamisen Kulttuuri on myös liiton alainen seura. Tapahtumia on tulossa myös VK:n järjestämänä
                        ja ensimmäinen turnaus järjestettiinkin jo tammikuussa 2018.</p>
                    </div>
                </Jumbotron>
            </Grid>
        )
    }
}