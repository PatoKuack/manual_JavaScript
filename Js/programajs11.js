console.log(`----------Nodos y Selectores----------`);
const elementoEj = document.getElementById('nodoEjemplo');
let elemEj1 = elementoEj.nodeName;
console.log(`nodeName: ${elemEj1}`);
//----------------------------------------
const selectorEj = document.querySelector('#nodoEjemplo');
let selecEj2 = selectorEj.childNodes[0];
console.log(`childNodes: ${selecEj2}`);
//----------------------------------------
const selectorAllEj = document.querySelectorAll('#nodoEjemplo');
let selecAllEj3 = selectorAllEj[0].nodeType;
console.log(`nodeType: ${selecAllEj3}`);
//----------------------------------------
const dataTitle = Array.from(document.getElementsByTagName('dt'));
dataTitle.map(adicion => adicion.classList.add('negrita'));


console.log(`----------Atributos----------`);
const attribEj = document.querySelector('h2.atributoClass');
console.log(attribEj);
attribEj.setAttribute('id', 'atributoId');
//----------------------------------------
var attribGet = attribEj.getAttribute('id');
console.log(`Se colocó un id "${attribGet}"`);
console.log(attribEj);
//----------------------------------------
const attribEj2 = document.getElementById('atributoId');
attribEj.id = "attribId";
var attribGet2 = attribEj.getAttribute('id');
console.log(`Se modificó el id por "${attribGet2}"`);
console.log(attribEj);


console.log(`----------Clases----------`);
const claseEj = document.querySelector('h3.clsLst');
claseEj.classList.add('momOso', 'dadoso', 'babyoso');
console.log(claseEj);
//----------------------------------------
claseEj.classList.remove('momOso', 'dadoso');
console.log(claseEj);
//----------------------------------------
claseEj.classList.toggle('babyoso');
claseEj.classList.toggle('ricitosOro');
console.log(claseEj);


console.log(`----------Contenido----------`);
const contenidoEj = document.querySelector('#tcont');
console.log(contenidoEj.textContent);
console.log(contenidoEj.innerHTML);
console.log(contenidoEj.outerHTML);


console.log(`----------Creación----------`);
const animal = document.createElement('div');
animal.textContent = 'Pejelagarto'
animal.classList.add('reptilia');
animal.id='oviparidad';
console.log(animal.outerHTML);
//----------------------------------------
var interact3 = prompt('Ingresa tu nombre en la consola', "ej: Peter Pan");
const interact4 = document.createElement('em');
const interact5 = document.getElementById('interact1');
interact4.textContent = interact3;
if(interact5 && interact5.querySelector('#interact2')){
  interact5.querySelector('#interact2').appendChild(interact4);
  console.log(`Checa la sección dentro de las líneas rojas >_,o`);
}