// HTML Other Element
const elbody = document.getElementById("body")
const elRenderList = document.querySelector(".js-render-list");
const elbtn = document.getElementById("js-btn");  
const elmodeImg = document.getElementById("js-modeImg");
const elmodeText = document.getElementById("js-mode_text")
const elAllCountryRender = document.querySelector(".hero_items");
const elAllTemplate = document.querySelector(".js-template").content;
const data = JSON.parse(localStorage.getItem("country"));
let mode_data = localStorage.getItem("data") === "true";

if (!data) window.location.pathname = "./index.html";


function countyrAllRender(piece, node) {
  node.innerHTML = "";
  const docFrgAll = document.createDocumentFragment();
  const allDataClone = elAllTemplate.cloneNode(true);
  allDataClone.querySelector(".js-country-img").src = piece.flags.svg?.trim() || "Unknown";
  allDataClone.querySelector(".js-country-img").alt = piece.flags.alt?.trim() || "Unknown";
  allDataClone.querySelector(".js-country-name").textContent = piece.name.common?.trim() || "Unknown";
  allDataClone.querySelector(".js-nativname").textContent = 
  piece.name.nativeName.eng?.common?.trim() ||
  piece.name.official?.trim() ||
  piece.name.nativeName.uzb?.official?.trim() || 
  piece.name.nativeName.zho?.common || piece.name.nativeName.eng?.official?.trim() || "Unknown";
  allDataClone.querySelector(".js-population").textContent = piece.population ? new Intl.NumberFormat('en-US').format(piece.population) : "Unknown";
  allDataClone.querySelector(".js-region").textContent = piece.region?.trim() || "Unknown";
  allDataClone.querySelector(".js-subregion").textContent = piece.subregion?.trim() || "Unknown";
  allDataClone.querySelector(".js-capital").textContent = piece.capital;
  allDataClone.querySelector(".js-domain").textContent = piece.tld;
  allDataClone.querySelector(".js-currencies").textContent = piece.fifa;
  allDataClone.querySelector(".js-language").textContent = piece.languages.eng?.trim() ||
  piece.languages?.spa || piece.languages?.fra || piece.languages?.deu ||
  piece.languages?.ita || piece.languages?.por || piece.languages?.rus ||
  piece.languages?.zho || piece.languages?.jpn || piece.languages?.kor ||
  piece.languages?.hin || piece.languages?.ara || piece.languages?.tur ||
  piece.languages?.pol || piece.languages?.uzb || piece.languages?.ind || "Unknown";
  allDataClone.querySelector(".js-border_first").style.display = piece.borders?.[0] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_first").textContent = piece.borders?.[0];
  allDataClone.querySelector(".js-border_second").style.display = piece.borders?.[1] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_second").textContent = piece.borders?.[1];
  allDataClone.querySelector(".js-border_third").style.display = piece.borders?.[2] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_third").textContent = piece.borders?.[2];
  allDataClone.querySelector(".js-border_fourth").style.display = piece.borders?.[3] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_fourth").textContent = piece.borders?.[3];
  allDataClone.querySelector(".js-border_fifth").style.display = piece.borders?.[4] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_fifth").textContent = piece.borders?.[4];
  allDataClone.querySelector(".js-border_sixth").style.display = piece.borders?.[5] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_sixth").textContent = piece.borders?.[5];
  allDataClone.querySelector(".js-border_seventh").style.display = piece.borders?.[6] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_seventh").textContent = piece.borders?.[6];
  allDataClone.querySelector(".js-border_eighth").style.display = piece.borders?.[7] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_eighth").textContent = piece.borders?.[7];
  docFrgAll.appendChild(allDataClone);
  node.appendChild(docFrgAll);
}
countyrAllRender(data, elAllCountryRender);

document.querySelector(".js-country-back").addEventListener("click", (evt) => {
  evt.preventDefault();
  localStorage.removeItem("country");
  window.location.pathname = "./index.html";
});


// Dark mode
if (mode_data) {
  elbody.classList.add("active");
  elmodeImg.src = "./assets/imgs/moon_dark.svg";
  elmodeText.textContent = "Light mode";
} else {
  elbody.classList.remove("active");
  elmodeImg.src = "./assets/imgs/moon_light.svg";
  elmodeText.textContent = "Dark mode";
}

elbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  mode_data = !mode_data; 

  if (mode_data) {
      elbody.classList.add("active");
      elmodeImg.src = "./assets/imgs/moon_dark.svg";
      elmodeText.textContent = "Light mode";
  } else {
      elbody.classList.remove("active");
      elmodeImg.src = "./assets/imgs/moon_light.svg";
      elmodeText.textContent = "Dark mode";
  }

  localStorage.setItem("data", mode_data); 
});

