module.exports = {
  purge: [
  "./src/**/*.html",
  "./src/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		primary: {
    			darkCyan: 'hsl(185, 75%, 39%)',
    			desatBlue: 'hsl(229, 23%, 23%)',
    			darkBlue: 'hsl(227, 10%, 46%)'
    		},
    		netral: {
    			darkGray: 'hsl(0, 0%, 59%)'
    		}
    	},
    	fontFamily: {
    		sans: ['Kumbh Sans', 'sans-serif'],
    	}	
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
