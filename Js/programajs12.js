console.log("Se mostrarán los datos en cada evento:");
//EVENTO DE MOUSE--------------------
const buton1 = document.getElementById('form1');
const saludo1 = () => {
  alert('Helloooooooo nurse =3');
};
buton1.addEventListener('click', saludo1);
//---------------------------
const buton2 = document.getElementById('form2');
const saludo2 = texto2 => alert(texto2);
buton2.addEventListener('dblclick', () => {
  saludo2('tock tock, ¿quién es? =P');
});
//---------------------------
const buton3 = document.getElementById('form3');
const saludo3 = texto3 => alert(`${texto3.target.textContent} \neste botón no contiene texto`);
buton3.addEventListener('contextmenu', texto3 => {
console.log(texto3);
saludo3(texto3);
});
//---------------------------
const menuEj = document.getElementById('menuContext');
const miMenu1 = meniu =>{
  const menuDiv = document.createElement('div');
  const menuContext = document.getElementById('mContextual');
  menuDiv.id = 'mContextual';
  menuDiv.textContent = '¡Cha chan!';
    if(menuContext) {
      document.body.removeChild(menuContext);
    }
  document.body.appendChild(menuDiv);
  menuDiv.style.padding = '1em';
  menuDiv.style.background = '#fde38e';
  menuDiv.style.position = 'fixed';
/*   menuDiv.style.top = `${meniu.pageY}px`;
  menuDiv.style.left = `${meniu.pageX}px`; */
  menuDiv.style.top = `${meniu.clientY}px`;
  menuDiv.style.left = `${meniu.clientX}px`;
};
const miMenu2 = () =>{
  const menuQuit = document.getElementById('mContextual');
  if(menuQuit) {
    console.log(menuQuit);
    document.body.removeChild(menuQuit);
  }
};
menuEj.addEventListener('contextmenu', meniu => {
  miMenu1(meniu);
  meniu.preventDefault();
  console.log(meniu);
});
menuEj.addEventListener('click', miMenu2);

//EVENTO DE TECLADO--------------------
document.addEventListener('keydown', tecla => {
  let control = tecla.ctrlKey;
  if(control === true && tecla.key === "y"){
    tecla.preventDefault();
    alert(`¡¡¡funcionó!!!\npresiona flecha izquierda o derecha para cambiar el día`);
  }
  else{
    console.log(`control: ${tecla.ctrlKey}`);
    console.log(`alt: ${tecla.altKey}`);
  };
  console.log(tecla);
});

/* addEventListener('keyup', bgColor => {
  let rBG = 7, gBG = 165, bBG = 204;
  const teclear = document.getElementById('tecleando');
  const colorear = tonalidad => {
    switch (tonalidad){
      case 'claro':
        rBG=rBG+5;
        // gBG=gBG+5;
        bBG=bBG-5;
        if(rBG>=255) rBG=255;
        if(bBG<=0) bBG=0;
        console.log(rBG, gBG, bBG);
        break;
      case 'oscuro':
        rBG=rBG-5;
        // gBG=gBG-5;
        bBG=bBG+5;
        if(rBG<=0) rBG=0;
        if(bBG>=255) bBG=255;
        console.log(rBG, gBG, bBG);
        break;
      default:
        break;
    }
    teclear.style.backgroundImage = `linear-gradient(rgb(${rBG}, ${gBG}, ${bBG}) 1%, rgb(9, 107, 110) 70%)`;
  }
  switch (bgColor.key){
    case 'ArrowLeft':
      colorear('claro');
      break;
    case 'ArrowRight':
      colorear('oscuro');
      break;
    default:
      break;
  }
}) */
const colorear = () => {
  cielo.style.backgroundImage = `radial-gradient(circle, rgb(241, 250, 255) 1%, rgb(${rBG}, ${gBG}, ${bBG}) 3%)`;
}
let rBG = 0, gBG = 35, bBG = 100;
const cielo = document.getElementById('anochecer');
cielo.addEventListener('keydown', bgColor => {
  switch (bgColor.key){
    case 'ArrowLeft':
      rBG=rBG+5;
      gBG=gBG-2;
      bBG=bBG-5;
      if(rBG>=255) rBG=255;
      if(gBG<=0) gBG=0;
      if(bBG<=0) bBG=0;
      console.log(rBG, gBG, bBG);
      colorear();
      break;
    case 'ArrowRight':
      rBG=rBG-5;
      gBG=gBG+2;
      bBG=bBG+5;
      if(rBG<=0) rBG=0;
      if(gBG>=255) gBG=255;
      if(bBG>=255) bBG=255;
      console.log(rBG, gBG, bBG);
      colorear();
      break;
    default:
      break;
  }
});

//EVENTO DE FORMULARIO-------------------
function insercion(datoEvent) {
  const instruct = document.createElement('pre');
  instruct.classList.add('titCentrado','desface');
  const division = document.getElementById('instruccion');
  instruct.textContent = `${datoEvent}`;
  if(division && division.querySelector('#colocacion')){
    division.querySelector('#colocacion').appendChild(instruct);
  }
};
function remover() {
let borrarExist = Array.from(document.querySelectorAll('pre.desface'));
borrarExist.map(adicion => adicion.classList.add('esconder'));
};
const formEvent = document.getElementById('formulario');
formEvent.addEventListener('submit', enviado =>{
  remover();
  insercion(`Formulario enviado`);
  console.log(enviado.target);
});
formEvent.addEventListener('change', checado =>{
  remover();
  if(checado.target.checked){
    insercion(`Se marcó la casilla`);
  }else{
    insercion(`Se desmarcó la casilla`);
  }
  console.log(checado.target);
});
const textEvent = document.getElementById('formTexto');
textEvent.addEventListener('focus', cliceado =>{
  remover();
  insercion(`Escribe tu nombre`);
  console.log(cliceado.target);
});
textEvent.addEventListener('blur', descliceado =>{
  remover();
  insercion(`Nombre listo`);
  console.log(descliceado.target);
});
formEvent.addEventListener('reset', reseteado =>{
  remover();
  insercion(`Formulario nuevo`);
  console.log(reseteado.target);
});

//EVENTO DEL NAVEGADOR----------------
addEventListener('resize', redimencion => {
  console.log(`ancho interno: ${innerWidth}, largo interno: ${innerHeight}`);
  console.log(`ancho externo: ${outerWidth}, largo externa: ${outerHeight}`);
  });

//EVENTO DEL MULTIMEDIA-----------------
const video = document.getElementById('multimedia'),
      reproducir = document.getElementById('play'),
      pausar = document.getElementById('pause');
reproducir.addEventListener('click', () => {
  video.play();
});
pausar.addEventListener('click', () => {
  video.pause();
});

//---------PROPAGACIÓN DE EVENTOS-------
document.querySelectorAll('[class^="bubble"]:not(.bubbleman)').forEach( burbujear => {
  burbujear.addEventListener('click', burbuja => {
    const letter = document.getElementById('bubbleletter');
    console.log(`burbujeaste ${burbuja.target.id}`);
    if(burbuja.target.id === 'bubble3'){
      letter.style.color = ('yellow');
    }else if(burbuja.target.id === 'bubble2' && burbuja.target.id !== 'bubble3'){
      letter.style.color = ('cyan');
    }else if(burbuja.target.id === 'bubble1' && burbuja.target.id !== 'bubble2' && burbuja.target.id !== 'bubble3'){
      letter.style.color = ('pink');
    }else{
      letter.style.color = ('#f1faff');
    }
  });
});

//DELEGACIÓN DE EVENTOS-------------
const gallery = document.getElementById('galeria');
gallery.addEventListener('click', foto => {
  const posicion = foto.target;
  const obra = Array.from(gallery.querySelectorAll('figure'));
  const indice = obra.indexOf(posicion);
  const venta = document.getElementById('seleccionado');
  const arte1 = document.createElement('u');
  const arte2 = document.createElement('u');
  arte2.textContent = ((indice+15)*300)-indice;
  if(indice < 0){
    arte1.textContent = ` por asistir`;
  }else if(indice === 10){
    arte1.textContent = ` del cuadro ${indice}`;
  }else if(indice === 9){
    arte1.textContent = ``;
    arte2.textContent = ``;
  }else{
    arte1.textContent = ` del cuadro ${indice+1}`;
  }
  arte1.id='vendido1';
  arte2.id='vendido2';
  const eliminacion = Array.from(gallery.querySelectorAll('u'));
  eliminacion.map( elimina => {
    if(elimina.textContent.trim() !== '') {
    elimina.remove();
    }
  });
  venta.querySelector('#obraNum').appendChild(arte1);
  venta.querySelector('#costo').appendChild(arte2);
  console.log(foto);
});