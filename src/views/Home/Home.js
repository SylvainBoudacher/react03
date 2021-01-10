import React, { useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	Alert
} from 'react-bootstrap';
import Link from '../../components/Link';
import './Home.scss';

const Home = ({onSearch, onSearchSecond, onColorChanged, onResult, onResultSecond}) => {
	const [searchedValue, setSearchedValue] = useState('')
	const [searchedValueSecond, setSearchedValueSecond] = useState('')
	const [searchedValueError, setSearchedValueError] = useState(null);
	const [searchedValueErrorSecond, setSearchedValueErrorSecond] = useState(null);
	const [apiResult, setApiResult] = useState(false);
	const [apiResultSecond, setApiResultSecond] = useState(false);
	const [colorValue, setColorValue] = useState('');
	const [showLink, setShowLink] = useState(false);
	const [showLinkSecond, setShowLinkSecond] = useState(false);

	const fetchPokemon = async (myPokemon) => {
		const url = 'https://pokeapi.co/api/v2/pokemon';
		const pokemon = myPokemon.toLowerCase();
		try {
			const response = await fetch(`${url}/${pokemon}`);
			const result = await response.json();
			if (result && result.name) {
				result && setApiResult(true);
				result && onResult(result);
			} else {
				setSearchedValueError('Entrer un Pokémon existant');
			}
		} catch (error) {
			setSearchedValueError('Pokémon non reconnu');
		}
	}

	const fetchDigimon = async (myDigimon) => {
		const url = 'https://digimon-api.herokuapp.com/api/digimon/name';
		const digimon = myDigimon.toLowerCase();
		try {
			const response = await fetch(`${url}/${digimon}`);
			const result = await response.json();
			if (result && result[0] && result[0]?.name) {
				result[0] && setApiResultSecond(true);
				result[0] && onResultSecond(result[0]);
			} else {
				setSearchedValueErrorSecond('Entrer un Digimon existant');
			}
		} catch (error) {
			setSearchedValueErrorSecond('Digimon non reconnu');
		}
	}


	const handleSearchedValue = (event) => {
		event.preventDefault();
		const value = event?.target?.value || '';
		setSearchedValue(value);
	}

	const handleSearchedValueSecond = (event) => {
		event.preventDefault();
		const value = event?.target?.value || '';
		setSearchedValueSecond(value);
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (searchedValue) {
			fetchPokemon(searchedValue);
			setSearchedValueError(null);
			setShowLink(true);
			onSearch(searchedValue);
		} else {
			setSearchedValueError('Entrer une valeur');
		}
	}

	const handleOnSubmitSecond = (event) => {
		event.preventDefault();
		if (searchedValueSecond) {
			fetchDigimon(searchedValueSecond);
			setSearchedValueErrorSecond(null);
			setShowLinkSecond(true);
			onSearchSecond(searchedValueSecond);
		} else {
			setSearchedValueErrorSecond('Entrer une valeur');
		}
	}

	const handleColorValue = (event) => {
		event.preventDefault();
		const value = event?.target?.value || '';
		setColorValue(value);
	}

	const handleColorOnSubmit = (event) => {
		event.preventDefault();
		onColorChanged(colorValue);
	}

	return (
		<React.Fragment>
			<h1>Home</h1>
			{apiResult && apiResultSecond &&
				<Alert variant='success'>
					Vous pouvez désormais aller sur <Link href="bothapi">BothApi</Link> pour voir les données
				</Alert>
			}
			<Container>
				<Row className="mb-3">
					<Col>
						<h2>Entrer une couleur</h2>
						<form onSubmit={handleColorOnSubmit} noValidate>
							<input className="mt-2" type="text" value={colorValue} onChange={handleColorValue} placeholder="red" />
							<input className="mt-2 ml-2" type="submit" value="Sauvegarder la couleur" />
						</form>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="/pokeapi.jpeg" />
							<Card.Body>
								<Card.Title>PokéApi</Card.Title>
								<span className="d-block">PokéApi est une api sur pokémon.</span>
								<a href="https://pokeapi.co/">Lien de l'api</a>
								<hr />
								<Card.Title>Test de l'api</Card.Title>
								<span className="d-block">Rechercher un pokémon</span>
								<form onSubmit={handleOnSubmit} noValidate>
									<input className="mt-2" type="text" value={searchedValue} onChange={handleSearchedValue} placeholder="Exemple: Charizard" />
									<input className="mt-2" type="submit"/>
									{ searchedValueError && <span className="d-block color-red">{searchedValueError}</span> }
									{ apiResult && <span className="d-block color-green">Success !</span> }
									{ showLink && <span className="d-block">Aller sur <Link href="/firstapi">/firstapi</Link> pour voir le résultat.</span>}
								</form>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="/digimon.png" />
							<Card.Body>
								<Card.Title>DigimonApi</Card.Title>
								<span className="d-block">Digimon Api est une api sur digimon.</span>
								<a href="https://digimon-api.herokuapp.com/">Lien de l'api</a>
								<hr />
								<Card.Title>Test de l'api 2</Card.Title>
								<span className="d-block">Rechercher un digimon</span>
								<form onSubmit={handleOnSubmitSecond} noValidate>
									<input className="mt-2" type="text" value={searchedValueSecond} onChange={handleSearchedValueSecond} placeholder="Exemple: Agumon" />
									<input className="mt-2" type="submit"/>
									{ apiResultSecond && <span className="d-block color-green">Success !</span> }
									{ searchedValueErrorSecond && <span className="d-block color-red">{searchedValueErrorSecond}</span> }
									{ showLinkSecond && <span className="d-block">Aller sur <Link href="/secondapi">/secondapi</Link> pour voir le résultat.</span>}
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