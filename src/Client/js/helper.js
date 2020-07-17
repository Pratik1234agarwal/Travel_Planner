import fetch from "node-fetch";


function setDaysLeft(data){
    const date = new Date(data);
    const current = new Date();
    const diff = date.getTime() - current.getTime();
    let days = diff / (1000*24*3600);
    days = Math.round(days);
    return days;

}


async function postData(url="",data={}){
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

export {setDaysLeft,postData}