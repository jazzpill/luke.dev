/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html'],
	theme: {
		extend: {
			colors: {
				'cb-blue': 'rgb(0, 82, 255)',
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			keyframes: {
				bg: {
					from: {
						'background-position': '0% 0%',
					},
					to: {
						'background-position': '100% 100%',
					},
				},
				land: {
					from: {
						opacity: 0,
						transform: 'translateY(-10px)',
					},
					to: {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				bg: 'bg 10s ease-in-out infinite alternate',
				land: 'land 666ms ease-in-out',
			},
		},
	},
	plugins: [],
};
