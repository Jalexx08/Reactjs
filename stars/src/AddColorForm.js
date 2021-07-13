import React from 'react';
import { useInput } from './hooks/useInput';


export default function AddColorForm({ onNewColor = params => params }) {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000');

	const submit = (e) => {
		e.preventDefault();

		onNewColor(titleProps.value, colorProps.value);
		resetTitle();
        resetColor();
	};

	return (
		<form onSubmit={submit}>
			<input
                {...titleProps }
				type="text"
				placeholder="Titulo del color"
				required
			/>
			<input
                {...colorProps }
				type="color"
				required
			/>
			{/* <input
				onChange={(e) => setTitle(e.target.value)}
				type="text"
				value={title}
				placeholder="Titulo del color"
				required
			/> */}
			<button>Add</button>
		</form>
	);
}

