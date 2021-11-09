let userName = prompt("Adınızı giriniz.")
document.querySelector("#myName").innerHTML = userName








function showTime() {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' | ' + time;


    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let day = days[today.getDay()];

    document.querySelector("#myClock").innerHTML = dateTime + " | " + day;
    //setTimeout(showTime, 1000); 
}

let interval = setInterval(showTime, 1000)