import logo from './logo.svg';
import { useState } from 'react';
import Route from "./components/Route";
import Navbar from "./components/Navbar";
import Home from "./views/Home/Home";
import FirstApi from "./views/FirstApi/FirstApi";
import SecondApi from "./views/SecondApi/SecondApi";
import BothApi from "./views/BothApi/BothApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	const [searchedValue, setSearchedValue] = useState('');
	const [searchedValueSecond, setSearchedValueSecond] = useState('');
	const [colorValue, setColorValue] = useState('');

	const [result, setResult] = useState('');
	const [resultSecond, setResultSecond] = useState('');

	const handleSearchedValue = (value) => {
		setSearchedValue(value);
	}

	const handleSearchedValueSecond = (value) => {
		setSearchedValueSecond(value);
	}

	const handleOnColorChanged = (color) => {
		setColorValue(color);
	}

	const handleOnResult = (result) => {
		setResult(result);
	}

	const handleOnResultSecond = (result) => {
		setResultSecond(result);
	}

 	 return (
		<div className="ui container">
			<Navbar />
			<Route path="/">
				<Home onResult={handleOnResult} onResultSecond={handleOnResultSecond} onSearch={handleSearchedValue} onSearchSecond={handleSearchedValueSecond} onColorChanged={handleOnColorChanged}/>
			</Route>
			<Route path="/firstapi">
				<FirstApi value={searchedValue} color={colorValue} onResult={handleOnResult} />
			</Route>
			<Route path="/secondapi">
				<SecondApi value={searchedValueSecond} color={colorValue} onResultSecond={handleOnResultSecond} />
			</Route>
			<Route path="/bothapi">
				<BothApi dataFirst={result} dataSecond={resultSecond} color={colorValue} />
			</Route>
		</div>
  	);
}

export default App;
