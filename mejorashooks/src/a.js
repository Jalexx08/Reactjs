// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import './App.css';

function WordCount({children}) {



	useEffect(
		() => console.log(`Escribiendo valor: ${val} : ${frase}`),
		[val, frase]
	);

	return (
		<>
			<p>{children}</p>
			<p>
				<strong>{words.length} - words</strong>
			</p>

			{/* <label>Mi frase favorita: </label>
			<input
				type="text"
				value={val}
				onChange={(e) => setVal(e.target.value)}
				placeholder={frase}
			/>

			<button onClick={crearFrase}>Enviar Frase</button> */}
		</>
	);
}

export default WordCount;
