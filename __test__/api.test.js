import fetch from "node-fetch";
//import {postData} from '../src/Client/js/helper';

console.log("Make sure the sever is running on port :: 8000");

jest.setTimeout(30000);

test("Testing the Api with the city Delhi: ", async() => {
    const apiData = await postData("http://localhost:8000/fetch",{city:"Delhi"});
    expect(apiData.countryName).toBe('India');
    expect(apiData.countryDetails.callingCode).toBe("91");
});

test("Testing the Api with the city London: ", async() => {
    const apiData = await postData("http://localhost:8000/fetch",{city:"London"});
    expect(apiData.countryName).toBe('United Kingdom');
    expect(apiData.countryDetails.callingCode).toBe("44");
});



async function postData(url="",data={}){
    const response = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

    try{
        const data = await response.json();
        return data;
    }catch(error){
         console.log("Error",error);
         return "error";
    }
}
