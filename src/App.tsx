import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {DefaultLayout} from "./components/layout/DefaultLayout";

function App() {
	return (
		<>
			<div className="App bg-dark text-light">
				<DefaultLayout/>
			</div>
		</>
	);
}

export default App;
