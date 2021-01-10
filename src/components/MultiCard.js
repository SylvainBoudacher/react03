import React from "react";
import {
	Container,
	Row,
	Col,
	Card
} from 'react-bootstrap';

const MultiCard = ({ dataFirst, dataSecond, color }) => {

	return (
		<Container>
			<Row>
				<Col>
					{dataFirst && dataSecond && 
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="/vs.jpg" />
							<Card.Title>Pokémon vs Digimon</Card.Title>
							<span className="d-block" style={{color: color}} >{dataFirst?.name} vs {dataSecond?.name}</span>
						</Card>
					}
					{(!dataFirst || !dataSecond) && <h5 className="color-red">Données manquantes.</h5>}
				</Col>
			</Row>
		</Container>
	);
};

export default MultiCard;