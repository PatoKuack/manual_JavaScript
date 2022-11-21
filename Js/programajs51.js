const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
const randomApiUrl = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
const apiUrlImg = 'https://images.ygoprodeck.com/images/cards/';
const apiUrlImgSmall = 'https://images.ygoprodeck.com/images/cards_small/';
// const toonMonsters = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=toon%20monster';

fetch(randomApiUrl)
    .then(result => result.json())
    .then(data => {
      const randomCard = data.id;
      const imageCard = document.getElementById('image-example');
      // const nameCard = data.data[0].name;
      imageCard.src = `${apiUrlImgSmall}${randomCard}.jpg`;
      imageCard.alt = `Carta aleatoria de la serie Yu-Gi-Oh!: ${data.name}`;
      imageCard.title = `Carta aleatoria de la serie Yu-Gi-Oh!: ${data.name}`;
    })
    .catch(err => console.log(err));



async function showToonCard() {
  try{
    const toonsList = document.getElementById('toonsList');
    let i = 1;
    const res = await fetch(`${apiUrl}?type=toon%20monster`);
    const data = await res.json();
    const toonNames = await data.data.map ( toon => `${toon.name}` );
    await toonNames.forEach(printName => {
      const createItemList = document.createElement('li');
      createItemList.textContent = `${i++}: ${printName}`;
      toonsList.appendChild(createItemList);
    });
  } catch(err) { console.log(err)}
}
showToonCard()