/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				charcoal: '#0C0A09',
				ash: '#1C1917',
				cream: '#F5F5F4',
				gravel: '#D6D3D1',
				glee: '#FACC15',
				darkGlee: '#EAB308',

				wrong: '#F87171',
				correct: '#34D399'
			},
			fontFamily: {
				plein: ['Plein', 'sans-serif'],
				switzer: ['Switzer', 'sans-serif']
			}
		}
	},
	plugins: []
};
