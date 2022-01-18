const parent = document.getElementById('padre');

var familly = parent.querySelectorAll('*');
var progeniesNd = parent.childNodes;
var progeniesChl = parent.children;
//--------TODOS los elementos--------
console.group("All familly =3");
  console.log(familly)
console.groupEnd();
//--------NODOS hijos--------
console.group("childNode");
  console.log(progeniesNd);
  let i = 0;
  progeniesNd.forEach(contenidoPNd => {
    if(contenidoPNd.nodeType !== 1){
      i++;
    }else if(contenidoPNd.textContent.slice(1, 3) == "  " || contenidoPNd.textContent == ""){
      i++;
      console.log(`childNode[${i}]: <${contenidoPNd.localName}>...</${contenidoPNd.localName}>`);
    }else{
      i++;
      console.log(`childNode[${i}]: <${contenidoPNd.localName}>${contenidoPNd.textContent.slice(0, 10)}</${contenidoPNd.localName}>`);
    }
  });
console.groupEnd();
//--------ELEMENTOS hijos--------
console.group("children");
  console.log(progeniesChl);
  for (let i = 0; i<progeniesChl.length; i++){
    if(progeniesChl[i].textContent.slice(1, 3) == "  " || progeniesChl[i].textContent == ""){
      console.log(`children[${i}]: <${progeniesChl[i].localName}>...</${progeniesChl[i].localName}>`);
    }else{
      console.log(`children[${i}]: ${progeniesChl[i].textContent.slice(0, 10)}`);
    }
  }
console.groupEnd();
//--------¿¿¿Tiene NODOS hijos???--------
console.group("hasChilNodes");
  let empty = document.getElementById('child-vacio');
  console.log(`El elemento "figure" devuelve un hasChilNodes = ${empty.hasChildNodes()}.`);
console.groupEnd();