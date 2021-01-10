import React, { useState } from 'react';
import { Container, Navbar as ReactNavbar, Nav } from 'react-bootstrap';
import Link from './Link';

function Navbar() {
	return (
		<ReactNavbar variant="dark" bg="dark">
			<Container>
				<ReactNavbar.Brand href="/">React03</ReactNavbar.Brand>
				<Nav className="ml-auto">
					<Link className="nav-link" href="/">Home</Link>
					<Link className="nav-link" href="/firstapi">FirstApi</Link>
					<Link className="nav-link" href="/secondapi">SecondApi</Link>
					<Link className="nav-link" href="/bothapi">BothApi</Link>
				</Nav>
			</Container>
		</ReactNavbar>
	)
}

export default Navbar;