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
	const [searchedValue, setSearchedValue] = useState('')
	const handleSearchedValue = (value) => {
		setSearchedValue(value);
	}

 	 return (
		<div className="ui container">
			<Navbar />
			<Route path="/">
				<Home onSearch={handleSearchedValue} />
			</Route>
			<Route path="/firstapi">
				<FirstApi value={searchedValue} />
			</Route>
			<Route path="/secondapi">
				<SecondApi />
			</Route>
			<Route path="/bothapi">
				<BothApi />
			</Route>
		</div>
  	);
}

export default App;
