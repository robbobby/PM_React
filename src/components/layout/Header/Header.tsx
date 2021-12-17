import React from 'react';

import {HeaderProps} from './Header.interfaces';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../../assets/images/logo.png'
import "./Header.styles.css"


const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<div>
			<Navbar className={"header"} variant={"dark"} sticky={"top"} >
				<Container fluid>
					<Navbar.Brand>
						<img src={logo} alt="logo" width={"70px"} height={"50px"}/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
					<Navbar.Collapse id={"basic-navbar-nav"}>
						<Nav className={"m-lg-1"}>
							<Nav.Link href={"/dashboard"}>Dashboard</Nav.Link>
							<Nav.Link href={"/dashboard"}>Tickets</Nav.Link>
							<Nav.Link href={"/dashboard"}>Logout</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;