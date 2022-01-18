let pepinillos = 2
let escondidos = 2
robaloBubuja = pepinillos - escondidos
if (robaloBubuja >= 2){
  console.log("la cangreburguer tiene pepinillos extra.")
}
else if (robaloBubuja === 1){
  console.log("la cangreburguer tiene pepinillos.")
}
else {
  console.log("la cangreburguer NO tiene pepinillos, Bob Esponja!")
}

switch(pepinillos){
  case 0:
  console.log("Bob esponja no le puso pepinillos!")
  break
  case 1:
  console.log("Robalo Burbuja se lo robó.")
  break
  default:
  console.log("Robalo Burbuja se los robó.")
}

let muchedumbre = "ATRAPENLO!"
for (let i=0; i<muchedumbre.length; i++){
  console.log(muchedumbre[i])
}

let porra = 1
console.log("Urra por Bob!")
while(porra < 4){
  console.log(`${porra}: Hip Hip Urra!`)
  porra++
}