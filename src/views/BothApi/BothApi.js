import React, { useState } from 'react';
import MultiCard from '../../components/MultiCard';
import Link from '../../components/Link';
import './BothApi.scss';

const BothApi = ({dataFirst, dataSecond, color}) => {
	return (
		<React.Fragment>
			<h1>Both Api</h1>
			{
				dataFirst && dataSecond ?
				<MultiCard dataFirst={dataFirst} dataSecond={dataSecond} color={color} /> :
				<span className="color-red">Retourner sur <Link href="/">Home</Link> et veuillez utiliser les 2 api avant de venir sur cette page.</span>
			}
		</React.Fragment>
	)
}

export default BothApi;