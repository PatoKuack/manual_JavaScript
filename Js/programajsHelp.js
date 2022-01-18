// Las etiquetas dt tendrán la clase "negrita"
const definitionTerm = Array.from(document.getElementsByTagName('dt'));
definitionTerm.map(adicionBold => adicionBold.classList.add('negrita'));

// Las etiquetas dd tendrán un margin-left de 1em
const definitionDescription = Array.from(document.getElementsByTagName('dd'));
definitionDescription.map(adicionMargin => adicionMargin.style.marginLeft='1em');

// Las etiquetas em con la clase "coment" tendrán el ancho de fuente de 400 (el estandar).
const comentarios = Array.from(document.querySelectorAll('em.coment'));
comentarios.map(sustraccionBold => sustraccionBold.style.fontWeight='400');