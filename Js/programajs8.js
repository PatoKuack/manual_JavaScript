let perra = {
  especie: "perro",
  años: 2,
  nombre: "Galleta",
  feliz: true
}
let nickname = {
  nickname: "peluda"
}

console.log("Mi perra y mi objeto se llaman " + perra["nombre"]);

let valores = Object.values(perra);
console.log(".values: ");
console.log(valores);

let atributos = Object.keys(perra);
console.log(".keys: ");
console.log(atributos);

let atributosValores = Object.entries(perra);
console.log(".entries: ");
console.log(atributosValores);

let nuse = Object.assign(perra, nickname);
console.log(".assign: ");
console.log(nuse); //copia los datos de los objetos colocados en el parámentro a una variable asignada

const dado = Math.random()*10;
const redond = Math.round(dado);
console.log(`Número aleatorio: ${redond}`);

const dia = new Date();
console.log("El día de hoy es " + dia.getUTCDate() + " del mes " + dia.getUTCMonth() + " del año " + dia.getUTCFullYear());