/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Paginas/*.{html,js}", "./Estilos/tailwind_src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'coocky': "linear-gradient(45deg, transparent 49%, #b45309 49%, #b45309 51%, transparent 51%), linear-gradient(135deg, transparent 49%, #b45309 49%, #b45309 51%, transparent 51%), linear-gradient(#92400e 0%, #92400e 100%)",
        'ice_cream': 'radial-gradient(circle at 0px 25px, #fecaca 15px, transparent 15px), radial-gradient(circle at 100px 25px, #fecaca 15px, transparent 15px), radial-gradient(circle at 50px 0px, #ffedd5 40px, transparent 40px), radial-gradient(circle at 0px 0px, #ffedd5 25px, transparent 25px), radial-gradient(circle at 100px 0px, #ffedd5 25px, transparent 25px)',
        'react': 'radial-gradient(25px 25px at 100px 103px, #38bdf8 45%, transparent 50%), radial-gradient(400px 400px at 362px 365px, transparent 99%, #38bdf8 99.5%, #38bdf8 100.5%, transparent 101%), radial-gradient(400px 400px at -162px 365px, transparent 99%, #38bdf8 99.5%, #38bdf8 100.5%, transparent 101%), radial-gradient(400px 400px at -164px -164px, transparent 99%, #38bdf8 99.5%, #38bdf8 100.5%, transparent 101%), radial-gradient(400px 400px at 365px -165px, transparent 99%, #38bdf8 99.5%, #38bdf8 100.5%, transparent 101%), radial-gradient(320px 400px at 100px 477px, transparent 99%, #38bdf8 99.5%, #38bdf8 100.5%, transparent 101%), radial-gradient(320px 400px at 100px -278px, transparent 99%, #38bdf8 99.5%, #38bdf8 100.5%, transparent 101%), linear-gradient(#c7d2fe 0%, #c7d2fe 100%)',
      }
    },
  },
  variants: {},
  plugins: [],
}
