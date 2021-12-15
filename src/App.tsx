import React from 'react';
import './App.css';
import EntryView from "./views/EntryView/EntryView";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	return (
		<>
			<div className="App bg-dark text-light">
				<EntryView></EntryView>
			</div>
		</>
	);
}

export default App;
