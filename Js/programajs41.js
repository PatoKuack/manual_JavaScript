const body = document.getElementById("body");

const divParent = document.createElement('div');
divParent.id = 'cosmos';
divParent.className = 'cosmos';
body.insertAdjacentElement('beforeend', divParent);

const divSon1 = document.createElement('div');
divSon1.id = 'space';
divSon1.className = 'space';
const divSon2 = document.createElement('div');
divSon2.id = 'space';
divSon2.className = 'space';
if(document.getElementById('cosmos')) {
  divParent.appendChild(divSon1);
  divParent.appendChild(divSon2);
}

const divGrandSon1 = document.createElement('div');
divGrandSon1.id = 'stars';
divGrandSon1.className = 'stars';
const divGrandSon2 = document.createElement('div');
divGrandSon2.id = 'stars';
divGrandSon2.className = 'stars';
const divGrandSon3 = document.createElement('div');
divGrandSon3.id = 'comet';
divGrandSon3.className = 'comet';
if(document.querySelectorAll('#space')[0]) {
  divSon1.appendChild(divGrandSon1);
  divSon1.appendChild(divGrandSon2);
}
if(document.querySelectorAll('#space')[1]) {
  divSon2.appendChild(divGrandSon3);
}



function dimesionStars() {
  let scrollWidth = document.documentElement.scrollWidth;
  let scrollHeight = document.documentElement.scrollHeight;
  if(scrollWidth > scrollHeight) {
    divSon1.style.width = `${scrollWidth}px`;
    divSon1.style.height = `${scrollWidth}px`;
    let calculoTrnaslateY = (scrollWidth/2) - (scrollHeight/2);
    divSon1.style.transform = `translateY(-${calculoTrnaslateY}px) rotate3d(0, 0, 1, 40deg)`;
  } else {
    divSon1.style.width = `${scrollHeight}px`;
    divSon1.style.height = `${scrollHeight}px`;
    let calculoTrnaslateX = (scrollHeight/2) - (scrollWidth/2);
    divSon1.style.transform = `translateX(-${calculoTrnaslateX}px) rotate3d(0, 0, 1, 40deg)`;
  }
}
dimesionStars();

window.addEventListener('resize', () => {
  dimesionStars();
});
