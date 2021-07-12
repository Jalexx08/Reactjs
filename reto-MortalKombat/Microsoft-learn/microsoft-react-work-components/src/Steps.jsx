import React from 'react';

function Steps(props) {
	return (
		<ol>
			{props.steps.map((step, index) => (
				<li key={index}>{step}</li>
			))}
		</ol>
	);
}

export default Steps;
