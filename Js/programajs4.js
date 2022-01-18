function inicio(){
  console.warn("Encendido...")
}

function saludo(nombre){
  console.warn(`Hola señor ${nombre}`)
}

function regreso(tiempo, maquina){
  return `Buen${tiempo} ${maquina}`
}

function queacer1(actividades){
  return `Hoy ${actividades} actividades que realizar`
}
let tareas1 = queacer1

function queacer2(agregar, referencia){
  return `Agrega ${agregar} activid${referencia}, Jarvis`
}
let tareas2 = queacer2(1, "ad")

const agregados = actividad => `la actividad ${actividad}`

inicio()
saludo("Stark")
console.log(regreso("as tardes", "Jarvis"))
console.warn(tareas1("NO tenemos"))
console.log(tareas2)
 
let anonima
(function (confirmacion){
  anonima = `${confirmacion}`
}("De acuerdo"))

console.warn(anonima)
console.warn(agregados("fue agregada"))