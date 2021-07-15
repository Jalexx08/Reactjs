import React, { useState } from 'react';
import GitUser from './GitHubUser';

const App = () => {
	const [searchUser, setSearchUser] = useState('');
	const handleChange = (event) => {
		setSearchUser(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				value={searchUser}
				onChange={handleChange}
			/>
			<GitUser user={searchUser} />
		</div>
	);
};

export default App;
