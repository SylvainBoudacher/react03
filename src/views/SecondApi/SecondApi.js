import React, { useState, useEffect } from 'react';
import {
	Card,
	Spinner
} from 'react-bootstrap';
import Link from '../../components/Link';
import './SecondApi.scss';

const SecondApi = ({value, color, onResultSecond}) => {
	const url = 'https://digimon-api.herokuapp.com/api/digimon/name';
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchDigimon = async (myDigimon) => {
		const digimon = myDigimon.toLowerCase();
		setLoading(true);
		try {
			const response = await fetch(`${url}/${digimon}`);
			const result = await response.json();
			if (result && result[0] && result[0]?.name) {
				result && setData(result[0]);
				onResultSecond(result[0]);
				setLoading(false);
			} else {
				setError('Entrer un Digimon existant');
				setLoading(false);
			}
		} catch (error) {
			setError('Digimon non reconnu');
			setLoading(false);
		}
	}

	useEffect(() => {
		value && fetchDigimon(value);
		!value && setError('Entrer un Digimon existant');
	}, [])

	return (
		<React.Fragment>
			<h1>Second Api</h1>
			{
				loading &&
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			}
			{ !error && !loading &&
				<React.Fragment>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={data?.img} />
						<Card.Body>
							<Card.Title><span className="text-capitalize" style={{color}}>{data?.name}</span></Card.Title>
							<Card.Text>
								<span><b>level:</b> {data?.level}</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</React.Fragment>
			}
			{ error && <span className="color-red">{error}. Retourner sur la <Link href="/">Home</Link></span> }
		</React.Fragment>
	)
}

export default SecondApi;