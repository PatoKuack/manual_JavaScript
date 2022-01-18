console.time("Todo éste código en js tardó en ejecutarse");

console.log("console.log UuU/");
console.info("console.info OuO");
console.error("console.error x_x")
console.warn("console.warn °O°")

const amicos = [
  {nombre: "Juan", carrera: "QBP"},
  {nombre: "Rhaziel", carrera: "Diseño"},
  {nombre: "Alien", carrera: "Mecatrónica"}
];

console.table(amicos);

let i = 0;

console.group("Amicos:");
  for(i=0; i<3; i++){
    console.log(amicos[i].nombre);
  }
console.groupEnd("Amicos:");

console.count(`¡Señor mesero! ¡dos más por favor!`);
console.count(`¡Señor mesero! ¡dos más por favor!`);
console.countReset(`¡Señor mesero! ¡dos más por favor!`);
console.count(`¡Señor mesero! ¡dos más por favor!`);

console.timeEnd("Todo éste código en js tardó en ejecutarse");