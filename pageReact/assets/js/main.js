(async () => {
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=d1f718df197ee42df78bcf97d331e205&language=es-ES&page=1
	`;
	const menus = ['Home', 'Now playing', 'Lastest', 'Popular'];

	let response = await fetch(url);
	let { results } = await response.json();
	console.log(results);

	const Header = () => {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Movies App
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							{menus.map((menu, i) => (
								<li className="nav-item" key={i}>
									<a className="nav-link active" aria-current="page" href="#">
										{menu}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		);
	};

	const Card = (props) => {
		return (
			<div className="col">
				<div className="card">
					<img src={ `https://image.tmdb.org/t/p/w300${props.poster_path}`} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">
							{props.overview.slice(0,80)}...
						</p>
					</div>
				</div>
			</div>
		);
	};

	const Home = (props) => {
		return (
			<div className="container my-5">
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{props.movies.map((card, i) => (
						<Card key={i} {...card} />
					))}
				</div>
			</div>
		);
	};

	const Main = (props) => {
		return (
			<>
				<Header />
				<Home { ...props} />
			</>
		);
	};

	ReactDOM.render(<Main movies={results} />, document.getElementById('root'));

	//* Forma Antigua de hacer componentes

	// let header = createElement(
	// 	'div',
	// 	{
	// 		className: 'navbar navbar-expand-lg navbar-dark bg-dark',
	// 	},

	// 	createElement(
	// 		'div',
	// 		{ className: 'container text-white' },

	// 		createElement('span', { className: 'navbar-brand' }, 'Logo'),
	// 		createElement(
	// 			'button',
	// 			{
	// 				className: 'navbar-toggler',
	// 				type: 'button',
	// 				'data-bs-toggle': 'collapse',
	// 				'data-bs-target': '#navbarNav',
	// 			},
	// 			createElement('span', { className: 'navbar-toggler-icon' })
	// 		),

	// 		createElement(
	// 			'div',
	// 			{ className: 'collapse navbar-collapse', id: 'navbarNav' },
	// 			createElement(
	// 				'ul',
	// 				{ className: 'navbar-nav' },
	// 				menus.map((menu, i) =>
	// 					createElement(
	// 						'li',
	// 						{ className: 'nav-item', key: menu },
	// 						createElement('a', { className: 'nav-link', href: '#' }, menu)
	// 					)
	// 				)
	// 			)
	// 		)
	// 	)
	// );

	// let main = createElement(
	// 	'div',
	// 	{ className: 'container my-5' },
	// 	createElement(
	// 		'div',
	// 		{ className: 'row row-cols-1 row-cols-md-3 g-4' },
	// 		cards.map((card, i) =>
	// 			createElement(
	// 				'div',
	// 				{ className: 'col', key: card + i },
	// 				createElement(
	// 					'div',
	// 					{ className: 'card' },
	// 					createElement('img', { className: 'card-img-top', src: '' }),
	// 					createElement(
	// 						'div',
	// 						{ className: 'card-body' },
	// 						createElement('h5', { className: 'card-title' }, 'card title'),
	// 						createElement('p', { className: 'card-text' }, 'texto de la card')
	// 					)
	// 				)
	// 			)
	// 		)
	// 	)
	// );

	// let footer = createElement(
	// 	'div',
	// 	{ className: 'p-3 bg-dark text-center' },
	// 	createElement('p', { className: 'text-white' }, 'Footer')
	// );

	// ReactDOM.render([header, main, footer], document.getElementById('root'));
})();
