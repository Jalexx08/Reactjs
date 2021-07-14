import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
	const [val, setVal] = useState('');
	const [frase, setFrase] = useState('Frase de ejemplo');
	// const [checked, setChecked] = useState(false);

	const crearFrase = () => {
		setFrase(val);
		setVal = '';
	};

	useEffect(() => {
		// alert(`Checked: ${checked.toString()}`);
	}, []);

	return (
		<>
			<label>Mi frase favorita</label>
			<input type="checkbox" onChange={(e) =>setVal(e.target.value)} placeholder={frase} />
		</>
		// 	<input
		// 		type="checkbox"
		// 		onChange={() => setChecked((checked) => !checked)}
		// 	/>
		// 	{checked ? 'Checked' : 'No checked'}
		// </>
	);
}

export default App;
