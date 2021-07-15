import React, { useEffect, useState } from 'react';

const GitUser = ({ user }) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!user) return;

		setLoading(true);

		fetch(`https://api.github.com/users/${user}`)
			.then((data) => data.json())
			.then(setData)
			.then(() => setLoading(false))
			.catch(setError);
	}, [user]);

	console.log(data);

	if (loading) return <h1>Loading...</h1>;

	if (error) return <p>{JSON.stringify(error)}</p>;

	if (!data) return null;

	const { login, avatar_url, email, followers, company, bio } = data;

	return (
		<div style={{margin: '0 auto', width:'85%'}}>
			<h1
				style={{
					textAlign: 'center',
					color: 'blue',
					fontSize: '3rem',
					textTransform: 'uppercase',
				}}
			>
				{login}
			</h1>
			<figure style={{ width: '300px', margin: '0 auto' }}>
				<img src={avatar_url} />
			</figure>
			<p style={{ textAlign: 'center' }}>{bio}</p>
			<p>Email: {email ? email: 'No email available'}</p>
			<p>Followers: {followers ? followers : 'No followers available'}</p>
			<p> Company: {company ? company: 'No company available'}</p>
		</div>
	);
};

export default function App() {
	return <GitUser user="octocat" />;
}
