import React, { useState, useEffect } from 'react';
import {
	Card,
	Spinner
} from 'react-bootstrap';
import Link from '../../components/Link';
import './FirstApi.scss';

const FirstApi = ({value, color, onResult}) => {
	const url = 'https://pokeapi.co/api/v2/pokemon';
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchPokemon = async (myPokemon) => {
		const pokemon = myPokemon.toLowerCase();
		setLoading(true);
		try {
			const response = await fetch(`${url}/${pokemon}`);
			const result = await response.json();
			if (result && result.name) {
				result && setData(result);
				onResult(result);
				setLoading(false);
			} else {
				setError('Entrer un Pokémon existant');
				setLoading(false);
			}
		} catch (error) {
			setError('Pokémon non reconnu');
			setLoading(false);
		}
	}

	useEffect(() => {
		value && fetchPokemon(value);
		!value && setError('Entrer un Pokémon existant');
	}, [])

	return (
		<React.Fragment>
			<h1>First Api</h1>
			{
				loading &&
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			}
			{ !error && !loading &&
				<React.Fragment>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={data?.sprites?.front_default} />
						<Card.Body>
							<Card.Title><span className="text-capitalize" style={{color}}>{data?.name}</span></Card.Title>
							<Card.Text>
								<span className="d-block"><b>id:</b> {data?.id}</span>
								<span className="d-block"><b>weight:</b> {data?.weight}</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</React.Fragment>
			}
			{ error && <span className="color-red">{error}. Retourner sur la <Link href="/">Home</Link></span> }
		</React.Fragment>
	)
}

export default FirstApi;