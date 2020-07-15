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
    onOpenEnd : carouselInit
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
    const apiData = await postData("http://localhost:8000/fetch",data);
    console.log(apiData);
    setImages(apiData.images);
    const text = document.querySelector("#Image-text");
    text.innerHTML = `${apiData.cityName},${apiData.countryName}`;
    
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
