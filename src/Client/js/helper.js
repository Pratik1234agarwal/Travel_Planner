function setDaysLeft(data){
    const date = new Date(data);
    const current = new Date();
    const diff = date.getTime() - current.getTime();
    let days = diff / (1000*24*3600);
    days = Math.round(days);
    return days;

}


export {setDaysLeft}