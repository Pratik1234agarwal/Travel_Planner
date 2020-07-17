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
        try{
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
    }catch(error){
        alert("Unable to process your request , Please check your internet connection and refresh again");
        button.innerHTML = "Submit";
    }
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
    image: { type: "jpg", quality: 0.9 },
    html2canvas: { scale: 1, useCORS: true },
    jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(modal).save();
}

export { 
    setDaysLeft,
    postData
 };
