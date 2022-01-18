// Las etiquetas a tendrán la clase "link"
const Anchor = Array.from(document.getElementsByTagName('a'));
Anchor.map(aditionColor => aditionColor.classList.add('link'));

// Las etiquetas dt tendrán la clase "bold"
const definitionTerm = Array.from(document.getElementsByTagName('dt'));
definitionTerm.map(aditionBold => aditionBold.classList.add('bold'));

// Las etiquetas dd tendrán un margin-left de 1em
const definitionDescription = Array.from(document.getElementsByTagName('dd'));
definitionDescription.map(aditionMargin => aditionMargin.style.marginLeft='1em');

// Las etiquetas ul tendrán un padding-left de 1.7em
const unorderList = Array.from(document.getElementsByTagName('ul'));
unorderList.map(aditionPadding => aditionPadding.style.paddingLeft='1.7em');

// Las etiquetas i con la clase "coment" tendrán el ancho de fuente de 400 (el estandar).
const coment = Array.from(document.querySelectorAll('.coment'));
coment.map(sustraccionBold => sustraccionBold.style.fontWeight='400');