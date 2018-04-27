import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CustomNavBar extends React.Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">VK</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Etusivu
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/news" to="/news">
                            Uutiset
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">
                            Yhteydenotto
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/events" to="/events">
                            Kilpailut/Tapahtumat
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/collaborating" to="/collaborating">
                            Yhteistyökumppanit
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} href="/racketlon" to="/racketlon">
                            Racketlon
                        </NavItem>
                        <NavItem eventKey={7} componentClass={Link} href="/becomeamember" to="/becomeamember">
                            Liity Jäseneksi
                        </NavItem>
                        <NavItem eventKey={8} componentClass={Link} href="/training" to="/training">
                            Valmennus
                        </NavItem>
                        <NavItem eventKey={9} componentClass={Link} href="/vkry" to="/vkry">
                            VK ry
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}