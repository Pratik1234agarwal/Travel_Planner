# [Travielle](http://plantheway.herokuapp.com/) : Travel Planning for you

This website helps you plan your travel and store them locally , so that you can access them anytime.
You can also export it unto a pdf to get it printed . 

You can use the website here : 
[Traville](http://plantheway.herokuapp.com/)

If you want to run the app locally refer to the guide below

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

