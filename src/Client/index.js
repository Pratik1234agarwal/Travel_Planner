import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min';
import './styles/main.scss';
import Resort1 from './img/resort1.jpg';
import Resort2 from './img/resort2.jpg';
import Resort3 from './img/resort3.jpg';
import html from './views/index.html';


//sidenav 

const sidenav = document.querySelector('.slider');
M.Slider.init(sidenav,{
    indicators:false,
    interval:5000
});


// Modal 

const modal = document.querySelectorAll('.modal');
M.Modal.init(modal,{
    dismissible:false,
    //onOpenEnd : carouselInit
});

// Datepicker 

const picker = document.querySelector('.datepicker');
M.Datepicker.init(picker,{
    autoclose:true,
    showClearBtn:true,
    minDate:new Date(),
});


function carouselInit(){
    const carousel = document.querySelector('.carousel');
    M.Carousel.init(carousel,{
        fullWidth:true,
        indicators:true,
    });
}


const button = document.querySelector(".btn");
button.addEventListener('click',async()=>{
    const input = document.querySelector('input');
    const data = {city:input.value};
    const apiData = await postData("/fetch",data);
    console.log(apiData);
    setImages(apiData.images);
    const text = document.querySelector("#trip_destination");
    text.innerHTML = `Trip to ${apiData.cityName},${apiData.countryName}`;
    const risk = document.querySelector('#risk-score');
    risk.innerHTML = `Risk Score : ${apiData.riskScore} / 5`;

    document.querySelector('#test').classList.remove('hide');
    carouselInit();

    setWeather(apiData.weather);
    
});

function setImages(images){
    for(let i=0;i<4;i++){
        const carousel = document.querySelectorAll('.carousel-item');
        carousel[i].querySelector('img').src = images[i];
    }
}


const postData = async(url="",data={})=>{
    const response = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });
    console.log(response);

    try{
        const data = await response.json();
        return data;
    }catch(error){
         console.log("Error",error);
         return "error";
    }
}


function setWeather(data){
    let info = filterWeatherDate(data);
    const icon = info.weather.icon;
    const img = document.querySelector('.weather_icon');
    img.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    const text = setWeatherInfo(info);
}

function filterWeatherDate(data){
    return data[0];
}

function setWeatherInfo(data){
    const text = ` 
     <p><strong>Temperature : </strong> ${data.max_temp} , ${data.min_temp} </p>
     <p><strong>Feels Like : </strong> ${data.app_max_temp} , ${data.app_min_temp} </p>
     <p><strong>Weather : </strong> ${data.weather.description}</p>
    `

    document.querySelector('#weather_info').innerHTML = text;
}
