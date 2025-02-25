// HTML Form
const elForm = document.querySelector(".js-form")
const elSearch = document.querySelector(".js-search-inp")
const elSelect = document.querySelector(".js-country-select");

// HTML Other Element
const elRenderList = document.querySelector(".js-render-list");
const elTemplate = document.querySelector(".js-template").content;
const light_mode = document.querySelector(".light_mode");
const dark_mode = document.querySelector(".dark_mode");
const darkmode_button = document.querySelector(".site_darkmode_button");
const lightmode_button = document.querySelector(".site_lightmode_button");

let COUNTRIES_URL = "https://restcountries.com/v3.1/all";
let data = true;

// Render List function
function renderList(arr, node) {
  node.innerHTML = "";
  const docFrg = document.createDocumentFragment();
  arr.forEach((item) => {
    const templateClone = elTemplate.cloneNode(true);
    templateClone.querySelector(".js-country-img").src = item.flags.png;
    templateClone.querySelector(".js-country-img").alt = item.flags.alt;
    templateClone.querySelector(".js-country-name").textContent =item.name.common;
    templateClone.querySelector(".js-country-population").textContent = new Intl.NumberFormat('en-US').format(item.population);
    templateClone.querySelector(".js-country-region").textContent = item.region;
    templateClone.querySelector(".js-country-capital").textContent =item.capital;

    docFrg.appendChild(templateClone);
  });
  node.appendChild(docFrg);
}

// Async function
async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    data = data.slice(0, 248);
    renderList(data, elRenderList);
  } catch (error) {
    console.error("Xatolik yuz berdi", error.massage);
  }
}

getData(COUNTRIES_URL);

// Search function
function search() {
  elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let searchValue = elSearch.value;
    let SEARCH_URL = COUNTRIES_URL.replace("all", `name/${searchValue}`);
    if (searchValue === "") {
      getData(COUNTRIES_URL);
    } else {
      getData(SEARCH_URL);
    }
  });
}
search();

// Filter Regions function
function filterRegion() {
  elSelect.addEventListener("change", (evt) => {
    evt.preventDefault();
    let selectValue = elSelect.value;
    let SELECT_URL = COUNTRIES_URL.replace("all", `region/${selectValue}`);
    if (selectValue === "all") {
      getData(COUNTRIES_URL);
    } else {
      getData(SELECT_URL);
    }
  });
}

filterRegion();

// Dark mode function
function OnAdd() {
    document
      .querySelector(".site_lightmode_button")
      .closest(".body")
      .classList.toggle("js-darkmode");
      if (data) {
          light_mode.style.display = "none";
          lightmode_button.style.display = "none"
          darkmode_button.style.display = "block"
          dark_mode.style.display = "block";
          data = false;
        } else {
          dark_mode.style.display = "none";
          lightmode_button.style.display = "block"
          darkmode_button.style.display = "none"
          light_mode.style.display = "block";
          data = true;
}};