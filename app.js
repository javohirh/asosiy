const pokemonCards = [
  {
    id: 1,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 2,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 3,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 4,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 5,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 6,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 7,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
  {
    id: 8,
    title: "Pokemons",

    img: "./images/pokemon.png",

    info: `Grass, Poison`,
    weigth: "6.9kg",
    age: 99,
  },
];

const sectionEl = document.querySelector(".row");

const btns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", function () {
  displayPokemonCard(pokemonCards);
});

function displayPokemonCard(menuItems) {
  let displayPokemonCard = menuItems.map((item) => {
    return ` <div class="card" style="width: 17rem">
          <img src=${item.img} class="card-img-top" alt="..."  />
          <div class="card-body">
            <hr />
            <h5 class="card-title">${item.title}</h5>
            <img class="card-like" src="./images/heart.svg" alt="">
            <p class="card-text">${item.info}</p>
            <div class="d-flex align-items-center gap-3">
              <h5 class="card-title">${item.weigth}</h5>
              <h5 class="card-title">${item.age} age</h5>
            </div>
          </div>
        </div>`;
  });

  displayPokemonCard = displayPokemonCard.join("");
  sectionEl.innerHTML = displayPokemonCard;
}
