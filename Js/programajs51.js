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

async function showLoLData() {
  try{
    const lol_message = document.getElementById('lol_message');
    let i = 1;

    // https://ddragon.leagueoflegends.com/api/lol_versions.json
    const lol_version = "12.22.1";
    const lol_idiom = ["es_MX", "es_ES", "es_AR", "pt_BR", "en_US", "en_GB", "en_AU"];
    const lol_platform_id = ["la1", "la2", "br1", "eun1", "euw1"];
    const lol_apykey = "RGAPI-b6f36ad8-7e8a-4c9c-847b-640d0ec9a825";

    const lol_summoner_name = "patokuack";
    const lol_Champeons_img = "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/Aatrox.png";

    const lol_champeons_info = `http://ddragon.leagueoflegends.com/cdn/${lol_version}/data/${lol_idiom[0]}/champion.json`;
    const lol_summoner_info = `https://${lol_platform_id[0]}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${lol_summoner_name}?api_key=${lol_apykey}`;

    const res = await fetch(lol_champeons_info);
    const data = await res.json();

    let champeonInfo = Object.entries(data.data)[44][1].id;
    lol_message.textContent = champeonInfo;
      console.log(Object.entries(data.data)[0]);
    // imprimir todos los campeones
    /* Object.entries(data.data).forEach( e => { 
      console.log(`${i++}: ${e[1].id}`);
    }); */

  } catch(err) {
    console.log(err);
    if(res.status !== 200) {
      lol_message.textContent = "Error:" + res.status + ",\n" + data.message;
    }
  }
}
showLoLData();
