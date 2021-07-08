const { createElement } = React;

const menus = ['home', 'about', 'portfolios', 'contact'];
const cards = Array(20).fill(1);

console.log(cards);

let header = createElement(
	'div',
	{
		className: 'navbar navbar-expand-lg navbar-dark bg-dark',
	},

	createElement(
		'div',
		{ className: 'container text-white' },

		createElement('span', { className: 'navbar-brand' }, 'Logo'),
		createElement(
			'button',
			{
				className: 'navbar-toggler',
				type: 'button',
				'data-bs-toggle': 'collapse',
				'data-bs-target': '#navbarNav',
			},
			createElement('span', { className: 'navbar-toggler-icon' })
		),

		createElement(
			'div',
			{ className: 'collapse navbar-collapse', id: 'navbarNav' },
			createElement(
				'ul',
				{ className: 'navbar-nav' },
				menus.map((menu, i) =>
					createElement(
						'li',
						{ className: 'nav-item', key: menu },
						createElement('a', { className: 'nav-link', href: '#' }, menu)
					)
				)
			)
		)
	)
);

let main = createElement(
	'div',
	{ className: 'container my-5' },
	createElement(
		'div',
		{ className: 'row row-cols-1 row-cols-md-3 g-4' },
		cards.map((card, i) =>
			createElement(
				'div',
				{ className: 'col', key: card + i },
				createElement(
					'div',
					{ className: 'card' },
					createElement('img', { className: 'card-img-top', src: '' }),
					createElement(
						'div',
						{ className: 'card-body' },
						createElement('h5', { className: 'card-title' }, 'card title'),
						createElement('p', { className: 'card-text' }, 'texto de la card')
					)
				)
			)
		)
	)
);

let footer = createElement(
	'div',
	{ className: 'p-3 bg-dark text-center' },
	createElement('p', { className: 'text-white' }, 'Footer')
);

ReactDOM.render([header, main, footer], document.getElementById('root'));
