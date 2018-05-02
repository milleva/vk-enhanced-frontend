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
                            Valmennushinnasto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Sulkapallovalmennus:</h2>
                        <p><b>1 kerta</b> viikossa syyskausi (elo-, syys-, loka-, marras-, joulukuut [4 täyttä kuukautta]) 250€</p>
                        <p><b>2 kertaa</b> viikossa syyskausi 400€</p>
                        <p><b>3 kertaa</b> viikossa syyskausi 520€</p>
                        <br/>
                        <h2>Pingisvalmennus:</h2>
                        <p>Lapset kerta viikossa 150€</p>
                        <p>Lapset 2 kertaa viikossa 270€</p>
                        <p>Aikuiset kerta viikossa 200€ (sis. aamupalan!)</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>sulje</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}
