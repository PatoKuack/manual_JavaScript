let buffete = ["gelatina de moho", "telarañas cristalizadas", "aderezo de huesos", "sangre bajo en hierro", "sanguijuelas recién alimentadas"]
console.log("El buffete del día es: " + buffete)

let especial = buffete.push("feto en su jugo")
console.log("Hay " + especial + " platillos contando el nuevo especial.")
console.log("Ahora el buffete contiene: " + buffete)

let agotado = buffete.pop()
console.log("El último platillo '" + agotado + "' se agotó.")
console.log("Ahora el buffete contiene: " + buffete)

let postres = buffete.slice(0,2)
console.log("Los postres del buffete son: " + postres)

let i = 1
buffete.forEach(platillos => (console.log(`Platillo ${i}: ${platillos}`), i++))

i = 1
let menu = buffete.map(platillos => `Platillo ${i++}: ${platillos}`)
console.log(`Menú: ${menu}`)

let vamplillos = buffete.filter(sangre => sangre === "sangre bajo en hierro" || sangre === "sanguijuelas recién alimentadas")
console.log(`Los preferidos por vampiros son: ${vamplillos}`)

let nombre = buffete.find(nplatillo => nplatillo.length > 15)
console.log(`El primer platillo con el nombre más largo es: ${nombre} con ${nombre.length} caracteres`)

let especifico = buffete.includes("feto en su jugo")
console.log(`Aún queda 'feto en su jugo': ${especifico}`)

let nombre2 = buffete.some(typeplatillo => typeof typeplatillo === "number")
console.log(`Algún platillo tiene nombre de número: ${nombre2}`)

let nombre3 = buffete.every(typeplatillo => typeof typeplatillo === "string")
console.log(`Todos los platillos son de tipo string: ${nombre3}`)

let indice = buffete.indexOf("aderezo de huesos")
console.log(`El "aderezo de huesos" es el platillo número ${indice+1}`)
