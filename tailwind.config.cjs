/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Paginas/*.{html,js}", "./Estilos/tailwind_src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'coocky': "linear-gradient(45deg, transparent 49%, #b45309 49%, #b45309 51%, transparent 51%), linear-gradient(135deg, transparent 49%, #b45309 49%, #b45309 51%, transparent 51%), linear-gradient(#92400e 0%, #92400e 100%)",
        'ice_cream': 'radial-gradient(circle at 0px 25px, #fecaca 15px, transparent 15px), radial-gradient(circle at 100px 25px, #fecaca 15px, transparent 15px), radial-gradient(circle at 50px 0px, #ffedd5 40px, transparent 40px), radial-gradient(circle at 0px 0px, #ffedd5 25px, transparent 25px), radial-gradient(circle at 100px 0px, #ffedd5 25px, transparent 25px)',
      }
    },
  },
  variants: {},
  plugins: [],
}
