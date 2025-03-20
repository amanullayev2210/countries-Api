// HTML Form
const elForm = document.querySelector(".js-form")
const elSearch = document.querySelector(".js-search-inp")
const elSelect = document.querySelector(".js-country-select");

// HTML Other Element
const Elbody = document.getElementById("body")
const elRenderList = document.querySelector(".js-render-list");
const elTemplate = document.querySelector(".js-template").content;
const Elbtn = document.getElementById("js-btn");  
const ElmodeImg = document.getElementById("js-modeImg");
const ElmodeText = document.getElementById("js-mode_text")
const ElanimationLoading = document.getElementById("js-loading");

let COUNTRIES_URL = "https://restcountries.com/v3.1/all";
let mode_data = localStorage.getItem("data") === "true";
let ErrorImg = document.createElement("img");

// Render List function
function renderList(arr, node) {
  node.innerHTML = "";
  const docFrg = document.createDocumentFragment();
  arr.forEach((item) => {
    const templateClone = elTemplate.cloneNode(true);
    templateClone.querySelector(".js-country-img").src = item.flags.png;
    templateClone.querySelector(".js-country-img").alt = item.flags.alt;
    templateClone.querySelector(".js-country-name").textContent = item.name.common;
    templateClone.querySelector(".js-country-population").textContent = new Intl.NumberFormat('en-US').format(item.population);
    templateClone.querySelector(".js-country-region").textContent = item.region;
    templateClone.querySelector(".js-country-capital").textContent = item.capital; 
    templateClone.querySelector(".item").dataset.id = item.population;

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
    countryAllInfo(data);
  } catch (error) {
    ErrorImgFn();
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

// Dark mode
if (mode_data) {
  Elbody.classList.add("active");
  ElmodeImg.src = "./assets/imgs/moon_dark.svg";
  ElmodeText.textContent = "Light mode";
} else {
  Elbody.classList.remove("active");
  ElmodeImg.src = "./assets/imgs/moon_light.svg";
  ElmodeText.textContent = "Dark mode";
}

Elbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  mode_data = !mode_data; 

  if (mode_data) {
      Elbody.classList.add("active");
      ElmodeImg.src = "./assets/imgs/moon_dark.svg";
      ElmodeText.textContent = "Light mode";
  } else {
      Elbody.classList.remove("active");
      ElmodeImg.src = "./assets/imgs/moon_light.svg";
      ElmodeText.textContent = "Dark mode";
  }

  localStorage.setItem("data", mode_data); 
});



// countries all info
function countryAllInfo(data) {
  elRenderList.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target.closest(".item")) {
      let dataId = evt.target.closest(".item").dataset.id;

      let findCountry = data.find((item) => {
        if (+dataId === item.population) {
          return item;
        }
      });
      localStorage.setItem("country", JSON.stringify(findCountry));
      window.location.pathname = "./countries.html";
    }
  });
}

// ErrorImgFn
function ErrorImgFn () {
     Elbody.style.overflowY = "hidden"
     ElanimationLoading.style.display = "none";
     ErrorImg.src = "https://miro.medium.com/v2/resize:fit:1400/0*QOZm9X5er1Y0r5-t";
     ErrorImg.style.marginInline = 'auto';
     ErrorImg.style.paddingBottom = "450px";
     ErrorImg.style.maxWidth = '768px';
     ErrorImg.style.width = '100%';
     elRenderList.append(ErrorImg);
}