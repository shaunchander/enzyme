/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				charcoal: '#0C0A09',
				cream: '#F5F5F4',
				gravel: '#D6D3D1',
				glee: '#FACC15'
			},
			fontFamily: {
				plein: ['Plein', 'sans-serif'],
				switzer: ['Switzer', 'sans-serif']
			}
		}
	},
	plugins: []
};
