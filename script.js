const gameContainer = document.getElementById("game");

const POKEMON = [
  // Pikachu
  "url('https://assets.pokemon.com/assets/cms2/img/cards/web/XY1/XY1_EN_42.png')",
  // Bulbasaur
  "url('https://m.media-amazon.com/images/I/512aSUYQPnL.__AC_SX300_SY300_QL70_FMwebp_.jpg')",
  // Charmander
  "url('https://m.media-amazon.com/images/I/519TwJqFnVL._AC_UF894,1000_QL80_.jpg')",
  // Squirtle
  "url('https://m.media-amazon.com/images/I/51rVxXHIClL.__AC_SX300_SY300_QL70_FMwebp_.jpg')",
  // Mewtwo
  "url('https://m.media-amazon.com/images/I/51+Hjs2Ry2L.jpg')",
  // Pikachu
  "url('https://assets.pokemon.com/assets/cms2/img/cards/web/XY1/XY1_EN_42.png')",
  // Bulbasaur
  "url('https://m.media-amazon.com/images/I/512aSUYQPnL.__AC_SX300_SY300_QL70_FMwebp_.jpg')",
  // Charmander
  "url('https://m.media-amazon.com/images/I/519TwJqFnVL._AC_UF894,1000_QL80_.jpg')",
  // Squirtle
  "url('https://m.media-amazon.com/images/I/51rVxXHIClL.__AC_SX300_SY300_QL70_FMwebp_.jpg')",
  // Mewtwo
  "url('https://m.media-amazon.com/images/I/51+Hjs2Ry2L.jpg')"
];

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledPokemon = shuffle(POKEMON);

function createDivsForPokemon(pokemonArray) {
  for (let pokemon of pokemonArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(pokemon);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClick = false;

function handleCardClick(event) {
  if (noClick) return;
  if (event.target.classList.contains("flipped")) return;

  let currentCard = event.target;
  currentCard.style.backgroundImage = 'none';
  currentCard.style.backgroundImage = currentCard.classList[0];
  

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClick = true;
    let pic1 = card1.className;
    let pic2 = card2.className;

    if (pic1 === pic2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClick = false;
      if (cardsFlipped === 10) alert("You caught 'em all!");
    } 
    else {
      setTimeout(function() {
        card1.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fit/w_828,h_1148/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA')";
        card2.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fit/w_828,h_1148/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA')";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClick = false;
      }, 1000);
    }
   
  }
}

createDivsForPokemon(shuffledPokemon);

