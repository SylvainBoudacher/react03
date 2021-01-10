import React, { useState, useEffect } from 'react';
import './FirstApi.scss';

const FirstApi = ({value}) => {
	const url = 'https://pokeapi.co/api/v2/pokemon';
	const [data, setData] = useState(null);
	const [error, setError] = useState('');

	const fetchPokemon = async (myPokemon) => {
		try {
			const response = await fetch(`${url}/${value}`);
			const result = await response.json();
			result && setData(result);
		} catch (error) {
			setError(error);
		}
	}

	useEffect(() => {
		fetchPokemon(value);
	})

	return (
		<React.Fragment>
			<h1>First Api</h1>
			<h4>Test sur le pokémon: {value}</h4>
			<p>{data?.name}</p>
			<p>{data?.weight}</p>
			{ error && <span className="color-red">{error}</span> }
		</React.Fragment>
	)
}

export default FirstApi;