// import logo from './logo.svg';
import React, { useEffect, useState, useMemo } from 'react';

import './App.css';

const useAnyKeyToRender = () => {
	const [, setForceRender] = useState();

	useEffect(() => {
		window.addEventListener('keydown', setForceRender);
	}, []);
};

function WordCount({ children }) {
	useAnyKeyToRender();
	const words = useMemo(() => children.split(' '), [children]);

	useEffect(() => console.log(`Se ejecuta useEffect`), [words]);

	return (
		<>
			<p>{children}</p>
			<p>
				<strong>{words.length} - words</strong>
			</p>
		</>
	);
}

export default function App() {
	return <WordCount>World of Warcraft</WordCount>;
}
