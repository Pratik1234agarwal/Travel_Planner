# [Travielle](http://plantheway.herokuapp.com/) : Travel Planning for you

This website helps you plan your travel and store them locally , so that you can access them anytime.
You can also export it unto a pdf to get it printed . 

You can use the website here : 
[Traville](http://plantheway.herokuapp.com/)


## Technology used :-

1. The website uses Materialize.css for styling and layout .
2. It uses vanilla Javascript , HTML and sass .
3. The website uses **Local Storage** to store the trips as per the user wants.
4. The website uses html2pdf to genereate the pdf for the trip .
5. The website uses service worker for offline functionality.
6. The website uses **webpack** as a bundler .
7. The website uses a Express server . 
8. The api used are :-

    1. Geonames Api - this pulls the data of the city being visited 
    2. WeatherBit Api - this gives the weather details of the city
    3. Pixabay Api - this provides the images of the place being visited .
    4. Rest-Countries Api - this provides the imformation about the country being visited . 

9. Icons incorporated into the forecast are provided by WeatherBit api as well



*If you want to run the app locally refer to the guide below .*



## Getting Started

### 1. Fork this repository and then clone it into your pc 

You can directly clone it , but the additional step of forking is recomended .

### 2. Open up a terminal 

Make sure you have git installed .
Also verify that you have node and npm installed .

Now at the root of the directory do :

    npm install

This will install all the required packages and dependency required for the website for you . 

### 3. Now open the .env file at the root of the directory

##### For this you have to sign up for **Geonames api** , **Pixabay api** and **WeatherBit api**

Setup three variables there . 

So your .env file should be like this 

```
KEY_GEONAMES='YOUR USERNAME HERE'
KEY_PIXABAY = 'YOUR PIXABAY KEY HERE'
KEY_WEATHERBIT = 'YOUR WEATHERBIT KEY HERE'
```

### 4. Now it's time to run the website 

Open up the terminal at the root of the directory .

To run the app do :-

    npm run start

This will open the app in port 8080 . 

You can additionally open the app in development mode 

    npm run dev

Finally to make the app for production do 

    npm run prod


Cheers Enjoy . 

