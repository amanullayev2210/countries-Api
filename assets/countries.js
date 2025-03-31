// HTML Other Element
const Elhtml = document.getElementById("html");
const elbody = document.getElementById("body");
const elRenderList = document.querySelector(".js-render-list");
const ELInfoInner = document.getElementById("js-info_wrapper");
const elbtn = document.getElementById("js-btn");  
const elmodeImg = document.getElementById("js-modeImg");
const elmodeText = document.getElementById("js-mode_text")
const elAllCountryRender = document.querySelector(".hero_items");
const elAllTemplate = document.querySelector(".js-template").content;
const data = JSON.parse(localStorage.getItem("country"));
const ErrorImg = document.createElement("img");


let mode_data = localStorage.getItem("data") === "true";
let COUNTRIES_URL = "https://restcountries.com/v3.1/all";

if (!data) window.location.pathname = "./index.html";

const countriesObj = {
  "AFG": "Afghanistan",  "ALB": "Albania",  "DZA": "Algeria",
  "AND": "Andorra",      "AGO": "Angola",   "ATG": "Antigua and Barbuda",
  "ARG": "Argentina",    "ARM": "Armenia",  "AUS": "Australia",
  "AUT": "Austria",      "AZE": "Azerbaijan", "BHS": "Bahamas",
  "BHR": "Bahrain",      "BGD": "Bangladesh", "BRB": "Barbados",
  "BLR": "Belarus",      "BEL": "Belgium",   "BLZ": "Belize",
  "BEN": "Benin",        "BTN": "Bhutan",    "BOL": "Bolivia",
  "BIH": "Bosnia and Herzegovina", "BWA": "Botswana", "BRA": "Brazil",
  "BRN": "Brunei",       "BGR": "Bulgaria",  "BFA": "Burkina Faso",
  "BDI": "Burundi",      "CPV": "Cabo Verde", "KHM": "Cambodia",
  "CMR": "Cameroon",     "CAN": "Canada",    "CAF": "Central African Republic",
  "TCD": "Chad",         "CHL": "Chile",     "CHN": "China",
  "COL": "Colombia",     "COM": "Comoros",   "COD": "Congo (Democratic Republic)",
  "COG": "Congo (Republic)", "CRI": "Costa Rica", "CIV": "Côte d'Ivoire",
  "HRV": "Croatia",      "CUB": "Cuba",      "CYP": "Cyprus",
  "CZE": "Czechia",      "DNK": "Denmark",   "DJI": "Djibouti",
  "DMA": "Dominica",     "DOM": "Dominican Republic", "ECU": "Ecuador",
  "EGY": "Egypt",        "SLV": "El Salvador", "GNQ": "Equatorial Guinea",
  "ERI": "Eritrea",      "EST": "Estonia",   "SWZ": "Eswatini",
  "ETH": "Ethiopia",     "FJI": "Fiji",      "FIN": "Finland",
  "FRA": "France",       "GAB": "Gabon",     "GMB": "Gambia",
  "GEO": "Georgia",      "DEU": "Germany",   "GHA": "Ghana",
  "GRC": "Greece",       "GRD": "Grenada",   "GTM": "Guatemala",
  "GIN": "Guinea",       "GNB": "Guinea-Bissau", "GUY": "Guyana",
  "HTI": "Haiti",        "HND": "Honduras",  "HUN": "Hungary",
  "ISL": "Iceland",      "IND": "India",     "IDN": "Indonesia",
  "IRN": "Iran",         "IRQ": "Iraq",      "IRL": "Ireland",
  "ISR": "Israel",       "ITA": "Italy",     "JAM": "Jamaica",
  "JPN": "Japan",        "JOR": "Jordan",    "KAZ": "Kazakhstan",
  "KEN": "Kenya",        "KIR": "Kiribati",  "KWT": "Kuwait",
  "KGZ": "Kyrgyzstan",   "LAO": "Laos",      "LVA": "Latvia",
  "LBN": "Lebanon",      "LSO": "Lesotho",   "LBR": "Liberia",
  "LBY": "Libya",        "LIE": "Liechtenstein", "LTU": "Lithuania",
  "LUX": "Luxembourg",   "MDG": "Madagascar", "MWI": "Malawi",
  "MYS": "Malaysia",     "MDV": "Maldives",  "MLI": "Mali",
  "MLT": "Malta",        "MHL": "Marshall Islands", "MRT": "Mauritania",
  "MUS": "Mauritius",    "MEX": "Mexico",    "FSM": "Micronesia",
  "MDA": "Moldova",      "MCO": "Monaco",    "MNG": "Mongolia",
  "MNE": "Montenegro",   "MAR": "Morocco",   "MOZ": "Mozambique",
  "MMR": "Myanmar",      "NAM": "Namibia",   "NRU": "Nauru",
  "NPL": "Nepal",        "NLD": "Netherlands", "NZL": "New Zealand",
  "NIC": "Nicaragua",    "NER": "Niger",     "NGA": "Nigeria",
  "PRK": "North Korea",  "MKD": "North Macedonia", "NOR": "Norway",
  "OMN": "Oman",         "PAK": "Pakistan",  "PLW": "Palau",
  "PAN": "Panama",       "PNG": "Papua New Guinea", "PRY": "Paraguay",
  "PER": "Peru",         "PHL": "Philippines", "POL": "Poland",
  "PRT": "Portugal",     "QAT": "Qatar",     "ROU": "Romania",
  "RUS": "Russia",       "RWA": "Rwanda",    "WSM": "Samoa",
  "SMR": "San Marino",   "SAU": "Saudi Arabia", "SEN": "Senegal",
  "SRB": "Serbia",       "SYC": "Seychelles", "SLE": "Sierra Leone",
  "SGP": "Singapore",    "SVK": "Slovakia",  "SVN": "Slovenia",
  "SLB": "Solomon Islands", "SOM": "Somalia", "ZAF": "South Africa",
  "KOR": "South Korea",  "SSD": "South Sudan", "ESP": "Spain",
  "LKA": "Sri Lanka",    "SDN": "Sudan",     "SUR": "Suriname",
  "SWE": "Sweden",       "CHE": "Switzerland", "SYR": "Syria",
  "TJK": "Tajikistan",   "TZA": "Tanzania",  "THA": "Thailand",
  "TLS": "Timor-Leste",  "TGO": "Togo",      "TON": "Tonga",
  "TTO": "Trinidad and Tobago", "TUN": "Tunisia", "TUR": "Turkey",
  "TKM": "Turkmenistan", "TUV": "Tuvalu",    "UGA": "Uganda",
  "UKR": "Ukraine",      "ARE": "United Arab Emirates", "GBR": "United Kingdom",
  "USA": "United States", "URY": "Uruguay",  "UZB": "Uzbekistan",
  "VUT": "Vanuatu",      "VAT": "Vatican City", "VEN": "Venezuela",
  "VNM": "Vietnam",      "YEM": "Yemen",     "ZMB": "Zambia",
  "ZWE": "Zimbabwe", "UNK": "Unknown"
};

// console.log(countries);



function countyrAllRender(piece, node) {
  try {
    node.innerHTML = "";
  const docFrgAll = document.createDocumentFragment();
  const allDataClone = elAllTemplate.cloneNode(true);
  allDataClone.querySelector(".js-country-img").src = piece.flags.svg?.trim() || "Unknown";
  allDataClone.querySelector(".js-country-img").alt = piece.flags.alt?.trim() || "Unknown";
  allDataClone.querySelector(".js-country-name").textContent = piece.name.common?.trim() || "Unknown";
  allDataClone.querySelector(".js-nativname").textContent = 
  piece.altSpellings[2] ||
  piece.name.nativeName.eng?.common?.trim() ||
  piece.name.official?.trim() ||
  piece.name.nativeName.uzb?.official?.trim() || 
  piece.name.nativeName.zho?.common || piece.name.nativeName.eng?.official?.trim() || 
  piece.altSpellings[0] || "Unknown";
  allDataClone.querySelector(".js-population").textContent = piece.population ? new Intl.NumberFormat('en-US').format(piece.population) : "Unknown";
  allDataClone.querySelector(".js-region").textContent = piece.region?.trim() || "Unknown";
  allDataClone.querySelector(".js-subregion").textContent = piece.subregion?.trim() || "Unknown";
  allDataClone.querySelector(".js-capital").textContent = piece.capital;
  allDataClone.querySelector(".js-domain").textContent = piece.tld;
  allDataClone.querySelector(".js-currencies").textContent = piece.currencies.UZS?.name || piece.fifa;
  allDataClone.querySelector(".js-language").textContent = piece.languages.eng?.trim() || piece.languages?.uzb ||
  piece.languages?.spa || piece.languages?.fra || piece.languages?.deu ||
  piece.languages?.ita || piece.languages?.por || piece.languages?.rus ||
  piece.languages?.zho || piece.languages?.jpn || piece.languages?.kor ||
  piece.languages?.hin || piece.languages?.ara || piece.languages?.tur ||
  piece.languages?.pol || piece.languages?.uzb || piece.languages?.ind || "Unknown";
  allDataClone.querySelector(".js-border_first").style.display =  piece.borders?.[0]  ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_first").textContent = countriesObj[piece.borders?.[0]] ;
  allDataClone.querySelector(".js-border_second").style.display = piece.borders?.[1] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_second").textContent = countriesObj[piece.borders?.[1]];
  allDataClone.querySelector(".js-border_third").style.display = piece.borders?.[2] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_third").textContent = countriesObj[piece.borders?.[2]];
  allDataClone.querySelector(".js-border_fourth").style.display = piece.borders?.[3] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_fourth").textContent = countriesObj[piece.borders?.[3]];
  allDataClone.querySelector(".js-border_fifth").style.display = piece.borders?.[4] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_fifth").textContent = countriesObj[piece.borders?.[4]];
  allDataClone.querySelector(".js-border_sixth").style.display = piece.borders?.[5] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_sixth").textContent = countriesObj[piece.borders?.[5]];
  allDataClone.querySelector(".js-border_seventh").style.display = piece.borders?.[6] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_seventh").textContent = countriesObj[piece.borders?.[6]];
  allDataClone.querySelector(".js-border_eighth").style.display = piece.borders?.[7] ? "inline-block" : "none";
  allDataClone.querySelector(".js-border_eighth").textContent = countriesObj[piece.borders?.[7]];
  docFrgAll.appendChild(allDataClone);
  node.appendChild(docFrgAll);
  } 
  catch (error) {
    ErrorImgFn();
  }
}
countyrAllRender(data, elAllCountryRender);


document.querySelector(".js-country-back").addEventListener("click", (evt) => {
    evt.preventDefault();
    localStorage.removeItem("country");
    window.location.pathname = "./index.html";
});


// Dark mode
if (mode_data) {
  Elhtml.style.colorScheme = "dark";
  elbody.classList.add("active");
  elmodeImg.src = "./assets/imgs/moon_dark.svg";
  elmodeText.textContent = "Light mode";
} else {
  Elhtml.style.colorScheme = "unset"
  elbody.classList.remove("active");
  elmodeImg.src = "./assets/imgs/moon_light.svg";
  elmodeText.textContent = "Dark mode";
}

elbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  mode_data = !mode_data; 

  if (mode_data) {
      Elhtml.style.colorScheme = "dark"
      elbody.classList.add("active");
      elmodeImg.src = "./assets/imgs/moon_dark.svg";
      elmodeText.textContent = "Light mode";
  } else {
      Elhtml.style.colorScheme = "unset"
      elbody.classList.remove("active");
      elmodeImg.src = "./assets/imgs/moon_light.svg";
      elmodeText.textContent = "Dark mode";
  }

  localStorage.setItem("data", mode_data); 
});


async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    localStorage.setItem("country", JSON.stringify(data[0]));
    countyrAllRender(data[0], elAllCountryRender);
  } 
  catch (error) {
    ErrorImgFn();
  }
}

// ErrorImgFn
function ErrorImgFn () {
  ErrorImg.src = "https://miro.medium.com/v2/resize:fit:1400/0*QOZm9X5er1Y0r5-t";
  elAllCountryRender.style.height = '70vh';
  ErrorImg.style.marginInline = 'auto';
  ErrorImg.style.maxWidth = '660px';
  ErrorImg.style.width = '100%';
  elAllCountryRender.append(ErrorImg);
}


// countries border info
function CountrBordersInfo() {
  document.addEventListener("click", (event) => {
      if (event.target.classList.contains("js-borders")) {
          const btnText = event.target.textContent.trim();
          if (btnText === "Unknown") {
            event.target.remove();
          } else {
            let Search_link = COUNTRIES_URL.replace("all", `name/${btnText}`);
            getData(Search_link);
          }
      }
  });
}

CountrBordersInfo();