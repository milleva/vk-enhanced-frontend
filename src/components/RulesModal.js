import React from 'react'
import {Popover, Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap'

export default class RulesModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
            <React.Fragment>

                <Button style={{margin: 0, padding: 0}} bsStyle="link" bsSize="large" onClick={this.handleShow}>
                    {this.props.text}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Sulkapalloseura Voittamisen Kulttuuri ry Säännökset
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <p>
                            <p>Nimi: Voittamisen Kulttuuri ry</p>
                            <p>Kotipaikka: Helsinki</p>
                            <p>Osoite: Kulosaarentie 2</p>
                            <p>00570 Helsinki</p>
                            <p>Rekisterinumero: 214.226</p>
                            <p>Merkitty rekisteriin: 26.01.2015</p>
                            <p>Jäljennys annettu: 26.01.2015</p>
                            
                            
                            
                            
                            
                            


                            1. Yhdistyksen nimi ja kotipaikka <br/>
                            Yhdistyksen nimi on Voittamisen Kulttuuri ry ja sen kotipaikka on Helsinki.<br/><br/>

                            2. Tarkoitus ja toiminnan laatu
                            Yhdistyksen tarkoituksena on edistää urheilullista kehitystä ja kilpailutoimintaa.
                            Tarkoituksena toteuttamiseksi yhdistys järjestää valmennusta ja kansallisia kilpailuja.
                            Toimintansa tukemiseksi yhdistys perii vuotuista jäsenmaksua ja liittymismaksua sekä järjestää
                            arpajaisia, myyjäisiä ja harjoittaa kahvilatoimintaa järjestämiensä kilpailujen yhteydessä.<br/><br/>

                            3. Jäsenet
                            Yhdistykseen jäseneksi voi liittyä jokainen, joka hyväksyy yhdistyksen tarkoituksen ja säännöt.
                            Jäsenet hyväksyy hakemuksesta yhdistyksen hallitus.<br/><br/>

                            4. Jäsenen eroaminen ja erottaminen
                            Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai sen
                            puheenjohtajalle, taikka ilmoittamalla erosta
                            yhdistyksen kokouksessa merkittäväksi pöytäkirjaan. Hallitus voi erottaa jäsenen yhdistyksestä, jos
                            jäsen on jättänyt erääntyneen jäsenmaksunsa
                            maksamatta tai muuten jättänyt täyttämättä ne velvoitukset, joihin hän on yhdistykseen liittymällä
                            sitoutunut tai on menettelyllään yhdistyksessä
                            tai sen ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää täytä laissa taikka yhdistyksen
                            säännöissä mainittuja jäsenyyden ehtoja.<br/><br/>

                            5. Liittymis- ja jäsenmaksu
                            Jäseniltä perittävän liittymismaksun ja vuotuisien jäsenmaksun suuruudesta päättää vuosikokous.<br/><br/>

                            6. Hallitus
                            Yhdistyksen asioita hoitaa hallitus, johon kuuluu vuosikokouksessa valitut puheenjohtaja ja 2 muuta
                            varsinaista jäsentä sekä 2 varajäsentä.
                            Hallituksen toimikausi on vuosikokousten välinen aika. Hallitus valitsee keskuudestaan
                            varapuheenjohtajan sekä ottaa keskuudestaan tai
                            ulkopuoleltaan sihteerin, rahastonhoitajan ja muut tarvittavat toimihenkilöt. Hallitus kokoontuu
                            puheenjohtajan tai hänen estyneenä ollessaan
                            varapuheenjohtajan kutsusta, kun he katsovat siihen olevan aihetta tai kun vähintään puolet hallituksen
                            jäsenistä sitä vaatii.
                            Hallitus on päätösvaltainen, kun vähintään puolet sen jäsenistä, puheenjohtaja tai varapuheenjohtaja
                            mukaanluettuna on läsnä. äänestykset ratkaistaan
                            ehdottomalla ääntenenemmistöllä. äänten mennessä tasan ratkaisee puheenjohtajan ääni, vaaleissa
                            kuitenkin arpa.<br/><br/>

                            7. Yhdistyksen nimen kirjoittaminen
                            Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja, varapuheenjohtaja, sihteeri tai rahastonhoitaja,
                            kaksi yhdessä.<br/><br/>

                            8. Tilikausi ja toiminnantarkastus / tilintarkastus
                            Yhdistyksen tilikausi on kalenterivuosi. Tilinpäätös tarvittavine asiakirjoineen ja hallituksen
                            vuosikertomus on annettava toiminnantarkastajalle/
                            tilintarkastajalle viimeistään kuukautta ennen vuosikokousta. Toiminnantarkastajien/tilintarkastajien
                            tulee antaa kirjallinen lausuntonsa
                            viimeistään kaksi viikkoa ennen vuosikokousta hallitukselle.<br/><br/>

                            9. Yhdistyksen kokoukset
                            Yhdistyksen vuosikokous pidetään vuosittain hallituksen määräämänä päivänä tammi-toukokuussa.
                            Ylimääräinen kokous pidetään, kun yhdistyksen
                            kokous niin päättää tai kun hallitus katsoo siihen olevan aihetta tai kun vähintään kymmenesosa (1/10)
                            yhdistyksen äänioikeutetuista jäsenistä
                            sitä hallitukselta erityisesti ilmoitettua asiaa varten kirjallisesti vaatii. Kokous on pidettävä
                            kolmenkymmenen vuorokauden kuluessa siitä,
                            kun vaatimus sen pitämisestä on esitetty hallitukselle. Yhdistyksen kokouksissa on jokaisella jäsenellä
                            yksi ääni. Yhdistyksen kokouksen
                            päätökseksi tulee, ellei säännöissä ole toisin määrätty, se mielipide, jota on kannattanut yli puolet
                            annetuista äänistä. äänten mennessä
                            tasan ratkaisee kokouksen puheenjohtajan ääni, vaaleissa kuitenkin arpa.<br/><br/>

                            10. Yhdistyksen kokousten koollekutsuminen
                            Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään seitsämän vuorokautta ennen jäsenille
                            postitetuilla kirjeillä, yhdistyksen
                            kotipaikkakunnalla ilmestyvässä sanomalehdessä tai sähköpostitse.<br/><br/>

                            11. Vuosikokous<br/>
                            Yhdistyksen vuosikokouksessa käsitellään seuraavat asiat.:<br/>
                            1. Kokouksen avaus.<br/>
                            2. Valitaan kokouksen puheenjohtaja, sihteeri, kaksi pöytäkirjantarkastajaa ja tarvittaessa kaksi
                            ääntenlaskijaa.<br/>
                            3. Todetaan kokouksen laillisuus ja päätösvaltaisuus.<br/>
                            4. Hyväksytään kokouksen työjärjestys.<br/>
                            5. Esitetään tilinpäätös, vuosikertomus ja toiminnantarkastajien/tilintarkastajien lausunto<br/>
                            6. Päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille
                            vastuuvelvollisille.<br/>
                            7. Vahvistetaan toimintasuunnitelma, tulo- ja menoarvio, sekä liittymis- ja jäsenmaksun suuruus.<br/>
                            8. Valitaan hallituksen puheenjohtaja ja muut jäsenet<br/>
                            9. Valitaan yksi tai kaksi toiminnantarkastajaa ja varatoiminnantarkastajaa taikka yksi tai kaksi
                            tilintarkastajaa ja varatilintarkastajaa.<br/>
                            10. Käsitellään muut kokouskutsussa mainitut asiat.
                            Mikäli yhdistyksen jäsen haluaa saada jonkin asian vuosikokouksen käsiteltäväksi, on
                            hänen ilmoitettava siitä kirjallisesti hallitukselle niin hyvissä ajoin, että asia voidaan sisällyttää
                            kokouskutsuun.<br/>
                            11. Sääntöjen muuttaminen ja yhdistyksen purkaminen
                            Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa vähintään
                            kolmen neljäsosan (3/4) enemmistöllä
                            annetuista äänistä. Kokouskutsussa on mainittava sääntöjen muuttamisesta tai yhdistyksen purkamisesta.
                            Yhdistyksen purkautuessa käytetään
                            yhdistyksen varat yhdistyksen tarkoituksen edistämiseen purkamisesta päättävän kokouksen määräämällä
                            tavalla. Yhdistyksen tullessa lakkautetuksi
                            käytetään sen varat samaan tarkoitukseen. </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>sulje</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}
