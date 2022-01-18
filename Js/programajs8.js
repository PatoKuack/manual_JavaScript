let mascota = {
  especie: "perro",
  años: 2,
  nombre: "Galleta",
  feliz: true
}

console.log("Mi perra se llama " + mascota["nombre"])

let atributos = Object.values(mascota)
console.log(atributos)

let valores = Object.keys(mascota)
console.log(valores)

let nuse = Object.assign(mascota)
console.log(nuse) //copia los datos de los objetos colocados en los paramentros a una variable asignada

const dado = Math.random()*10
const redond = Math.round(dado)
console.log(`Número aleatorio: ${redond}`)

const dia = new Date()
console.log("El día de hoy es " + dia.getUTCDate() + " del mes " + dia.getUTCMonth() + " del año " + dia.getUTCFullYear())