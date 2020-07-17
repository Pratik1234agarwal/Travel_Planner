import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.min";
import "./styles/main.scss";
import Resort1 from "./img/resort1.jpg";
import Resort2 from "./img/resort2.jpg";
import Resort3 from "./img/resort3.jpg";
import html from "./views/index.html";
import { setDaysLeft,postData } from "./js/helper";
import { setModal } from "./js/updateUi";

console.log(setModal);
let flag = 0;

const html2pdf = require("html2pdf.js");

const date = document.querySelector(".datepicker");
const city = document.querySelector("input");

//sidenav

const sidenav = document.querySelector(".slider");
M.Slider.init(sidenav, {
  indicators: false,
  interval: 5000,
});

// Modal

const modal1 = document.querySelector(".modal");
M.Modal.init(modal1, {
  dismissible: false,
  //onOpenEnd : carouselInit
});

const modal = M.Modal.getInstance(modal1);

// Datepicker

const picker = document.querySelector(".datepicker");
M.Datepicker.init(picker, {
  autoclose: true,
  showClearBtn: true,
  minDate: new Date(),
  format: "mm/dd/yyyy",
});

//Carousel

function carouselInit() {
  const carousel = document.querySelector(".carousel");
  M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
  });
}

// Tabs

const tabs = document.querySelector(".tabs");
M.Tabs.init(tabs, {});


// Code 
const button = document.querySelector(".btn");
button.addEventListener("click", async () => {
  if (city.value === "" || date.value === "") {
    alert("Please fill all the details");
  } else {
    button.innerHTML = "Fetching .. ";
    const data = { city: city.value };
    const apiData = await postData("http://localhost:8000/fetch", data);
    //const apiData = await postData("/fetch",data);
    console.log(apiData);

    //This renders and prepares the content of the modal
    setModal(apiData, date);
    modal.open();
    if (flag === 0) {
      carouselInit();
    }
    flag = 1;
    button.innerHTML = "Submit";
  }
});

const print = document.querySelector("#print");
print.addEventListener("click", generatePDF);

function generatePDF() {
  console.log("generating pdf");
  // Choose the element that our invoice is rendered in.
  //const element = document.getElementById(".modal");
  // Choose the element and save the PDF for our user.
  const modal = document.querySelector("#modal-content1");
  var opt = {
    filename: `document.pdf`,
    image: { type: "jpg", quality: 0.98 },
    html2canvas: { scale: 1, useCORS: true },
    jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(modal).save();
}

/*function setImages(images) {
  for (let i = 0; i < 4; i++) {
    const carousel = document.querySelectorAll(".carousel-item");
    carousel[i].querySelector("img").src = images[i];
  }
}

function setCountryDetails(data, riskScore) {
  document.querySelector("#countryInfoImage").src = data.flag;
  const text = `
        <p><strong>Population: </strong>${data.population}</p>
        <p><strong>CallingCode: </strong>+${data.callingCode}</p>
        <p><strong>Capital: </strong>${data.capital}</p>
        <p><strong>Currency : </strong>${data.currency.code} , ${data.currency.symbol}</p>
        <p><strong>Risk Score: </strong>${riskScore} / 5</p>
        <p><strong>Language: </strong>${data.languages.name}</p>
    `;
  document.querySelector("#countryInfo").innerHTML = text;
}

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
    return "error";
  }
};

function setWeather(data) {
  let info = filterWeatherDate(data);
  const icon = info.weather.icon;
  const img = document.querySelector(".weather_icon");
  img.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  setWeatherInfo(info);
}

function filterWeatherDate(data) {
  return data[0];
}

function setWeatherInfo(data) {
  const text = ` 
     <p><strong>Temperature : </strong> ${data.max_temp} , ${data.min_temp} </p>
     <p><strong>Feels Like : </strong> ${data.app_max_temp} , ${data.app_min_temp} </p>
     <p><strong>Weather : </strong> ${data.weather.description}</p>
    `;

  document.querySelector("#weather_info").innerHTML = text;
}
*/

export { 
    setDaysLeft,
    postData
 };
