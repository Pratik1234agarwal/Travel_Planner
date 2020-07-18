import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.min";
import "./styles/main.scss";
import Resort1 from "./img/resort1.jpg";
import Resort2 from "./img/resort2.jpg";
import Resort3 from "./img/resort3.jpg";
import html from "./views/index.html";
import { setDaysLeft, postData } from "./js/helper";
import { setModal } from "./js/updateUi";
import {initialize,carouselInit} from "./js/init";




const del = document.querySelector("#delete");

// This stores the index corresponsing to the Trip which is being viewed
// from the saved trips
let indexModal = -1;


// Intializing the Components of materialize
initialize();

// Modal

const modal1 = document.querySelector("#modal1");
M.Modal.init(modal1, {
  dismissible: false,
  //onOpenEnd : carouselInit
});

const modal = M.Modal.getInstance(modal1);


const html2pdf = require("html2pdf.js");

const date = document.querySelector(".datepicker");
const city = document.querySelector("input");

let apiData = {};


// Form Button Click Event Listener

const button = document.querySelector(".btn");
button.addEventListener("click", async () => {
  if (city.value === "" || date.value === "") {
    alert("Please fill all the details");
  } else {
    button.innerHTML = "Fetching .. ";
    const data = { city: city.value };
    try {

      apiData = await postData("http://localhost:8000/fetch", data);
      apiData.date = date.value
      //const apiData = await postData("/fetch",data);
      console.log(apiData);

      //This renders and prepares the content of the modal
      save.classList.remove('hide');
      del.classList.add('hide');
      setModal(apiData);
      modal.open();
      carouselInit();
      setTimeout(carouselInit,1000);
      button.innerHTML = "Submit";
    } catch (error) {
      console.log(error);
      alert(
        "Unable to process your request , Please check your internet connection and refresh again"
      );
      button.innerHTML = "Submit";
    }
  }
});

// This lisents to the print button inside the modal
const print = document.querySelector("#print");
print.addEventListener("click", generatePDF);


//Generate PDF using html2pdf 

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

//exporting the function to be used globally

export { setModal,setDaysLeft, postData, modal,carouselInit };




// Adding LocalStorage to the app 


let trips = []


if(localStorage.getItem('trips')){
  trips = JSON.parse(localStorage.getItem('trips'))
}

formCard();

const save = document.querySelector("#save");

save.addEventListener('click',()=>{
    trips.push(apiData);
    localStorage.setItem("trips",JSON.stringify(trips));
    alert("This trip has been saved ");
    formCard();

});


function formCard(){
  const tripRow = document.querySelector('#trips');
  const tripPast = document.querySelector("#past-trips");
  console.log(trips)
  tripRow.innerHTML ="";
  tripPast.innerHTML = "";
  const card = document.createElement("div");
  card.classList.add('row');
  const cardPast = document.createElement("div");
  cardPast.classList.add('row');
  trips.sort(compareDates);
  
  for(let i=0;i<trips.length;i++){

      const dayLeft = setDaysLeft(trips[i].date);
      if(dayLeft>=0){
      card.innerHTML +=cardHtml(trips[i],dayLeft,i);
      }else{

        cardPast.innerHTML +=cardHtml(trips[i],dayLeft,i);
      }
      

  }
  addListener(card);
  addListener(cardPast);
    if(card.innerHTML ===""){
      console.log("true")
      card.innerHTML = "<h4> Nothing to show here </h4>"
      card.classList.add('nothing');
    }
    if(cardPast.innerHTML ===""){
      cardPast.innerHTML = "<h4> Nothing to show here </h4>"
      cardPast.classList.add('nothing');
    }
  tripRow.appendChild(card);
  tripPast.appendChild(cardPast);
}


function cardHtml(apiData,dayLeft,index){
  let horizontal = "";
  if(window.innerWidth > 600){
    horizontal = "horizontal";
  }
  let dayText = "to go";
  if(dayLeft<0){
    dayText = "earlier";
    dayLeft = Math.abs(dayLeft);
  }
  const innerHTML = `<div class="col s12 medium" data-city="${apiData.cityName}" data-index="${index}">
      <div class="card hoverable ${horizontal}">
        <div class="card-image">
          <img src="${apiData.images[0]}" alt="image" class="responsive-img">
        </div>
        <div class="card-content center">
          <h5 class='flow-text'>${apiData.cityName},${apiData.countryName}</h5>
          <h6>${dayLeft} Days ${dayText}</h6>
        </div>
      </div>
    </div>`;
  return innerHTML;
}


function click(event){
  const data_index = trips[this.dataset.index];
  indexModal = this.dataset.index;
  toggleModal(data_index);
}

function toggleModal(data_index){
  setModal(data_index);
  modal.open();
  carouselInit();

  save.classList.add('hide');
  del.classList.remove('hide');


}

function addListener(row){
    const cards = row.children;
    for(let i=0;i<cards.length;i++){
      cards[i].addEventListener('click',click);
    }
}


function compareDates(data1,data2){
  let date1 = new Date(data1.date);
  let date2 = new Date(data2.date);
  return(date1.getTime()-date2.getTime());
}


del.addEventListener('click',()=>{
  trips.splice(indexModal,1);
  if(confirm("Are you sure you want to delete the trip ")){
    localStorage.setItem('trips',JSON.stringify(trips));
    formCard();
    modal.close();
  }
});

