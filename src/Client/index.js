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

// Datepicker 

const picker = document.querySelector('.datepicker');
M.Datepicker.init(picker,{
    autoclose:true,
    showClearBtn:true,
    minDate:new Date()
});
