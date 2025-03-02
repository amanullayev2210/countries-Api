// HTML Other Element
const elRenderList = document.querySelector(".js-render-list");
const elTemplate = document.querySelector(".js-template").content;
const light_mode = document.querySelector(".light_mode");
const dark_mode = document.querySelector(".dark_mode");
const darkmode_button = document.querySelector(".site_darkmode_button");
const lightmode_button = document.querySelector(".site_lightmode_button");
const elAllCountryRender = document.querySelector(".hero_items");
const elAllTemplate = document.querySelector(".js-template").content;
const data = JSON.parse(localStorage.getItem("country"));
let mode_data = true

if (!data) window.location.pathname = "./index.html";

function countyrAllRender(piece, node) {
  node.innerHTML = "";
  const docFrgAll = document.createDocumentFragment();
  const allDataClone = elAllTemplate.cloneNode(true);
  allDataClone.querySelector(".js-country-img").src = piece.flags.svg;
  allDataClone.querySelector(".js-country-img").alt = piece.flags.alt;
  allDataClone.querySelector(".js-country-name").textContent = piece.name.common;
  allDataClone.querySelector(".js-nativname").textContent =piece.name.nativeName.eng.common;
  allDataClone.querySelector(".js-population").textContent = new Intl.NumberFormat('en-US').format(piece.population);
  allDataClone.querySelector(".js-region").textContent = piece.region;
  allDataClone.querySelector(".js-subregion").textContent = piece.subregion;
  allDataClone.querySelector(".js-capital").textContent = piece.capital;
  allDataClone.querySelector(".js-domain").textContent = piece.tld;
  allDataClone.querySelector(".js-currencies").textContent = piece.fifa;
  allDataClone.querySelector(".js-language").textContent = piece.languages.eng;
  docFrgAll.appendChild(allDataClone);
  node.appendChild(docFrgAll);
}
countyrAllRender(data, elAllCountryRender);

document.querySelector(".js-country-back").addEventListener("click", (evt) => {
  evt.preventDefault();
  localStorage.removeItem("country");
  window.location.pathname = "./index.html";
});


// Dark mode function
function OnAdd() {
    document
      .querySelector(".site_lightmode_button")
      .closest(".body")
      .classList.toggle("js-darkmode");
      if (mode_data) {
          light_mode.style.display = "none";
          lightmode_button.style.display = "none"
          darkmode_button.style.display = "block"
          dark_mode.style.display = "block";
          mode_data = false;
        } else {
          dark_mode.style.display = "none";
          lightmode_button.style.display = "block"
          darkmode_button.style.display = "none"
          light_mode.style.display = "block";
          mode_data = true;
}};
