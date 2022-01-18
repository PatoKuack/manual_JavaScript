/* 
abreviatura = latín           = español
i.e.        = id est          = es decir
e.g.        = exempli gratia  = por ejemplo
 */

alert("ve tu consola!")
console.log("Hola amico!")

console.log("-----------------");

console.log("Imprimir datos con corchetes:")
console.log(["37", 37, true])
console.log("Imprimir varios tipos de datos usando solo un TYPEOF:")
console.log(typeof "37", 37, true)
console.log("Imprimir varios tipos de datos contenidos entre corchetes:")
console.log(typeof ["37", 37, true])

let cadena
cadena = "37"
let numero = 37
const buleano = true
console.log("Imprimir los datos: '37', 37 y true. Con un TYPEOF cada uno")
console.log(typeof cadena, typeof numero, typeof buleano)

console.log("-----------------");

let aminal = "oso";
let frase = `me agradan los ${aminal}s`;
console.log(frase);
