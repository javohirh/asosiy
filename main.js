function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}

let pokemonCards = [
  {
    id: 1,
    title: "Diamond pearl",
    img: "./images/pokemon.png",
    categories: ["All", "grass", "poison"],
    weight: "8.9kg",
    age: 52,
    isFavourite: false,
  },
  {
    id: 2,
    title: "Heartgold Soul",

    img: "./images/pokemon.png",

    categories: ["All", "grass", "poison", "nimadir"],
    weight: "6.9kg",
    age: 99,
    isFavourite: false,
  },
  {
    id: 3,
    title: "Scarlet & Violet",

    img: "./images/pokemon.png",

    categories: ["All", "grass", "poison"],
    weight: "5.9kg",
    age: 63,
    isFavourite: false,
  },
  {
    id: 4,
    title: "Platinum",

    img: "./images/pokemon.png",

    categories: ["All", "grass", "poison"],
    weight: "9.3kg",
    age: 95,
    isFavourite: false,
  },
  {
    id: 5,
    title: "Black & White",

    img: "./images/pokemon.png",

    categories: ["All", "poison"],
    weight: "5.8kg",
    age: 69,
    isFavourite: false,
  },
  {
    id: 6,
    title: "Sword & Shield",

    img: "./images/pokemon.png",

    categories: ["All", "grass"],
    weight: "6.4kg",
    age: 89,
    isFavourite: false,
  },
  {
    id: 7,
    title: "Sun & Moon",

    img: "./images/pokemon.png",

    categories: ["All", "poison"],
    weight: "9.3kg",
    age: 49,
    isFavourite: false,
  },
  {
    id: 8,
    title: "Brilliant Stars",

    img: "./images/pokemon.png",

    categories: ["All", "grass", , "test"],
    weight: "7.9kg",
    age: 68,
    isFavourite: false,
  },
];

const categories = ["All", "grass", "poison", "nimadir", "test"];
const sort = ["All", "Aa-Zz", "Age"];

const sectionEl = document.querySelector(".row");

const btns = document.querySelectorAll(".btn");
const template = document.querySelector("template");
const elHeart = getElement(".heart");

const elCategories = getElement("#categories-list");
const elOfcanvas = getElement(".offcanvas-body");
const elSort = getElement("#sort");
const elSearchInput = getElement("#search");
const elSubmitBtn = getElement("#submit-btn");
// displayPokemonCard(pokemonCards, elOfcanvas);
elSubmitBtn.addEventListener("click", () => {
  if (elSearchInput.value.length > 0) {
    const filteredArray = pokemonCards.filter((item) =>
      item.title.toLowerCase().includes(elSearchInput.value.toLowerCase())
    );

    displayPokemonCard(filteredArray);
  } else {
    displayPokemonCard(pokemonCards);
  }
});

window.addEventListener("DOMContentLoaded", function () {
  displayPokemonCard(pokemonCards);

  categories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;

    elCategories.appendChild(newOption);
  });
  sort.forEach((item) => {
    const newOption = document.createElement("option");
    newOption.value = item;
    newOption.textContent = item;

    elSort.appendChild(newOption);
  });
});
elSort.addEventListener("change", () => {
  if (elSort.value === "All") {
    displayPokemonCard(pokemonCards);
  }
  const sortedArray = pokemonCards
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  const sortedByAgeArray = pokemonCards.slice().sort((a, b) => a.age - b.age);
  if (elSort.value === "Aa-Zz") {
    displayPokemonCard(sortedArray);
  }
  if (elSort.value === "Age") {
    displayPokemonCard(sortedByAgeArray);
  }
});

elCategories.addEventListener("change", () => {
  if (elCategories.value === "All") {
    displayPokemonCard(pokemonCards);
  }

  const filteredArray = pokemonCards.filter((item) =>
    item.categories.includes(elCategories.value)
  );

  displayPokemonCard(filteredArray);
});

function displayPokemonCard(menuItems, where = sectionEl) {
  sectionEl.textContent = null;

  let displayPokemonCard = menuItems.map((item) => {
    const newElement = template.content.cloneNode(true);

    const topImg = getElement(".card-img-top", newElement);
    const title = getElement(".card-title", newElement);
    const weight = getElement(".card-weight", newElement);
    const age = getElement(".card-age", newElement);
    const categories = getElement(".categories", newElement);
    const elCardHeart = getElement(".card-like", newElement);
    elCardHeart.dataset.id = item.id;
    if (item.isFavourite) {
      elCardHeart.classList.remove("fa-regular");
      elCardHeart.classList.add("fa-solid");
      elCardHeart.classList.add("active-like");
      elHeart.classList.add("active-heart");
    }

    topImg.src = item.img;
    title.textContent = item.title;
    weight.textContent = item.weight;
    age.textContent = item.age + "-Years old";

    item.categories.map((category, i) => {
      const newLi = document.createElement("li");
      const span = document.createElement("span");

      if (item.categories.length - 1 !== i) {
        span.textContent = ", ";
      }

      newLi.textContent = category;

      categories.appendChild(newLi);
      categories.appendChild(span);
    });

    where.appendChild(newElement);
  });
}
function displayFavourites(menuItems, where = sectionEl) {
  where.textContent = null;

  let displayPokemonCard = menuItems.map((item) => {
    const newElement = template.content.cloneNode(true);
    const topImg = getElement(".card-img-top", newElement);
    const title = getElement(".card-title", newElement);
    const weight = getElement(".card-weight", newElement);
    const age = getElement(".card-age", newElement);

    const elCardHeart = getElement(".card-like", newElement);
    elCardHeart.dataset.id = item.id;

    topImg.src = item.img;
    title.textContent = item.title;
    weight.textContent = item.weight;
    age.textContent = item.age + "-Years old";

    const elCardDel = getElement(".card-like", newElement);
    elCardDel.dataset.id = item.id;
    if (item.isFavourite) {
      elCardDel.classList.remove("fa-heart");
      elCardDel.classList.add("fa-solid");
      elCardDel.classList.add("fa-trash");
    }
    elCardDel.addEventListener("click", () => {
      const index = menuItems.findIndex((card) => card.id === item.id);
      if (index !== -1) {
        menuItems.splice(index, 1);
        displayFavourites(menuItems, where);
      }
    });

    where.appendChild(newElement);
  });
}

const isFavouriteArray = [];

sectionEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-like")) {
    const id = +e.target.dataset.id;

    // Clear the isFavouriteArray before updating it
    isFavouriteArray.length = 0;

    pokemonCards.forEach((card) => {
      if (card.id === id) {
        card.isFavourite = !card.isFavourite;
      }
      if (card.isFavourite) {
        isFavouriteArray.push(card);
      }
      if (isFavouriteArray.length == 0) {
        elHeart.classList.remove("active-heart");
      }
    });

    displayPokemonCard(pokemonCards);
    displayFavourites(isFavouriteArray, elOfcanvas);
  }
});
