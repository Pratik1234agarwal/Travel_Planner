var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}



const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.listen(port, function () {
    console.log("Example app listening on port "+port);
});


app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
});


// Variables to store the api details
let images = [];

let apiData = {
  lat:0,
  long:0,
  countryName:"",
  countryCode : "",
  cityName:"",
  risk:"",
  riskScore:"",
  icon:"",
  weather:[],
  images:[],
  countryDetails:{}
}




app.post("/fetch",async function(req,res){
  const city = req.body.city;
  apiData.cityName = city;
  console.log("Request Received for city :: "+city);
  try{
    let request = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.KEY_GEONAMES}`);
    let data1 = await request.json();
    let lat = data1.geonames[0].lat;
    let long = data1.geonames[0].lng;
    apiData.lat = lat;
    apiData.long = long;
    apiData.countryName = data1.geonames[0].countryName;

    request = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${process.env.KEY_WEATHERBIT}`);
    let data2 = await request.json();
    apiData.weather = filterWeather(data2.data);

    const code = data2.country_code;
    apiData.countryCode = code;

    request = await fetch(`https://www.travel-advisory.info/api?countrycode=${code}`);
    let data3 = await request.json();
    apiData.risk = data3.data[code];
    apiData.riskScore = data3.data[code].advisory.score;

    request = await fetch(`https://pixabay.com/api/?key=${process.env.KEY_PIXABAY}&q=${city}&category=travel`);
    let data4 = await request.json();
    if(data4.hits.length === 0){
      request = await fetch(`https://pixabay.com/api/?key=${process.env.KEY_PIXABAY}&q=${apiData.countryName}&category=travel`);
      data4 = await request.json();
    }
    apiData.images = filterImages(data4.hits);

    request = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    let data5 = await request.json();
    apiData.countryDetails = setCountryDetails(data5);
    

    res.send(apiData);
    
  }catch(error){
    console.log("Error",error);
  }
   

});


function setCountryDetails(data5){
    countryDetails = {};
    countryDetails.currency = data5.currencies[0];
    countryDetails.population = data5.population;
    countryDetails.capital = data5.capital;
    countryDetails.callingCode = data5.callingCodes[0];
    countryDetails.languages = data5.languages[0];
    countryDetails.flag = data5.flag;

    return countryDetails;
}


/* This filters the pixibay api result */
function filterImages(data){
  filter = [];
    if(data.length==0){
      return [];
    }
    else{
      for(let i=0;i<data.length && i<=4 ;i++){
        filter.push(data[i].largeImageURL);
      }
    }
  return filter
}

/* This filters the data to be send */
function filterWeather(data){
  filter=[];
  daily = {};
  for(let i=0;i<data.length;i++){
      daily.max_temp = data[i].max_temp;
      daily.min_temp = data[i].min_temp;
      daily.app_min_temp = data[i].app_min_temp;
      daily.app_max_temp = data[i].app_max_temp;
      daily.date = data[i].valid_date;
      daily.weather = data[i].weather;
      filter.push(daily);
      daily={};
  }
  return filter;
}


// SSL Verification 

app.get("/.well-known/pki-validation/94B6CDC3A327212846F545DD10C41D88.txt",(rep,res)=>{
  console.log(__dirname);
  res.sendFile(path.join(__dirname,"94B6CDC3A327212846F545DD10C41D88.txt"));
})

console.log(__dirname);
console.log(path.join(__dirname,"94B6CDC3A327212846F545DD10C41D88.txt"))
