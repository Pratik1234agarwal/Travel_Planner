

function setModal(apiData,date){

    setImages(apiData.images);
    const text = document.querySelector("#trip_destination");
    document.querySelector("#countryInfoTitle").innerHTML = `About ${apiData.countryName}`;
    text.innerHTML = `Trip to ${apiData.cityName},${apiData.countryName}`;
    setWeather(apiData.weather);
    const days = Client.setDaysLeft(date.value);
    const day_left = document.querySelector('.days_left');
    day_left.innerHTML = `No. of days Left : ${days}`;
    setCountryDetails(apiData.countryDetails,apiData.riskScore);
    
}

function setImages(images){
    for(let i=0;i<4;i++){
        const carousel = document.querySelectorAll('.carousel-item');
        carousel[i].querySelector('img').src = images[i];
    }
}

function setCountryDetails(data,riskScore){
    document.querySelector('#countryInfoImage').src = data.flag;
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


export{ setModal }