import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Card
} from 'react-bootstrap';
import './Home.scss';

const Home = ({onSearch}) => {
	const [searchedValue, setSearchedValue] = useState('')
	const [searchedValueError, setSearchedValueError] = useState(null);

	const handleSearchedValue = (event) => {
		event.preventDefault();
		const value = event?.target?.value || '';
		setSearchedValue(value);
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();
		onSearch(searchedValue);
	}

	return (
		<React.Fragment>
			<h1>Home</h1>
			<Container>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="/pokeapi.jpeg" />
							<Card.Body>
								<Card.Title>PokéApi</Card.Title>
								<span className="d-block">PokéApi est une api sur pokémon.</span>
								<a href="https://pokeapi.co/">https://pokeapi.co/</a>
								<hr />
								<Card.Title>Test de l'api</Card.Title>
								<span className="d-block">Rechercher un pokémon</span>
								<form onSubmit={handleOnSubmit} noValidate>
									<input className="mt-2" type="text" value={searchedValue} onChange={handleSearchedValue} placeholder="Exemple: Charizard" />
									{ searchedValueError && <span className="color-red">{searchedValueError}</span> }
									<input className="mt-2" type="submit"/>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

export default Home;