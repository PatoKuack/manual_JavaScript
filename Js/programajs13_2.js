const whichSonsHaveGrandson = ancestor => {
  let parent = document.getElementById(`${ancestor}`);
  let descendants = Array.from(parent.children);
  let whichHaveGs = descendants.filter(son => son.children.length > 0);
  return whichHaveGs;
}
console.log("Con whichSonsHaveGrandson() se obtienen los hijos que contengan nietos del elemento especificado especificando su id en el parámetro.");

const getMiddleSon = dad => {
  let dadId = document.getElementById(`${dad}`);
  let dadIdSons = dadId.children;
  let dadIdSonsCount = dadIdSons.lenght;
  let middleSon = Math.trunc(dadIdSonsCount/2);
  return dadIdSons[middleSon];
}
console.log("Con getMiddleSon() se obtiene el hijo de enmedio del elemento especificado especificando su id en el parámetro.");


/* const anotherfunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
} */