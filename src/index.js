const citySelector = document.querySelector("#city-select");
citySelector.addEventListener("change", Update);

const Day_0 = document.querySelector("#day_0");
const Day_1 = document.querySelector("#day_1");
const Day_2 = document.querySelector("#day_2");

//affichage du jour selectionner par l'utilisateur
var currentDay = 0;

Update();






function Update() {


    let selectedCityID = citySelector.options[citySelector.selectedIndex].value;
    console.log(selectedCityID);
    let cityID = getCity(selectedCityID);
    let apiLink = "https://api.openweathermap.org/data/2.5/forecast?id="+cityID+"&APPID=df2c0ba7bc6472158e45f43704175a72";
    
    getWeather(apiLink).then(useWeather);


    
}



function getCity(cityID) {
switch(cityID){

    case "cf": return "3024634";

    case "pa": return "6269531";

    case "to": return "1850147";

    case "mo": return "524894";

    case "sy": return "6160752";

    case "ny": return "5128581";

    case "va": return "5814616";

}

}

function getWeather(apiLink) {
return fetch(apiLink).then(res => res.json() );
}

function useWeather(weather) {
    display(weather["list"][0], Day_0);
    display(weather["list"][8], Day_1);
    display(weather["list"][16], Day_2);
}


function display(info , dayNbr){
    var temp = Math.round(parseFloat(info["main"]["temp"]) - 273.15);
    var feels = Math.round(parseFloat(info["main"]["feels_like"]) - 273.15);

    DisplayIcon(info["weather"][0]["icon"] , dayNbr);

    dayNbr.querySelector("#temp").innerText = "Temperature : " + temp.toString() + "°C";
    dayNbr.querySelector("#feels").innerText = "Ressentis : " + feels.toString() + "°C";

    displayDay(currentDay);
}




function displayDay(day){

    if(day===0){
        Day_0.style.display = "block";
        Day_1.style.display = "none";
        Day_2.style.display = "none";

        var str = Day_0.querySelector("#peppa_pig").getAttribute('bg');
        document.body.style.backgroundImage = "url('"+ str.toString() +"')";
    }

    if(day===1){
        Day_0.style.display = "none";
        Day_1.style.display = "block";
        Day_2.style.display = "none";

        var str = Day_1.querySelector("#peppa_pig").getAttribute('bg');
        document.body.style.backgroundImage = "url('"+ str.toString() +"')";
    }
    if(day===2){
        Day_0.style.display = "none";
        Day_1.style.display = "none";
        Day_2.style.display = "block";

        var str = Day_2.querySelector("#peppa_pig").getAttribute('bg');
        document.body.style.backgroundImage = "url('"+ str.toString() +"')";
    }
    currentDay = day;
}

function next() {
    if(currentDay == 2)displayDay(0);
    else displayDay(currentDay+1); 
}

function prev() {
    if(currentDay == 0)displayDay(2)
    else displayDay(currentDay-1);

}

//les images background et icon 
//icon : l'image dans le site 
function DisplayIcon(icon, day){
    if(icon === '01n' || icon === '01d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_plage.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_soleil.jpg");}
    if(icon === '02n' || icon === '02d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_nuage_soleil.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_nuage_soleil.jpg");}
    if(icon === '03n' || icon === '03d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_nuage_soleil.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_nuage_soleil.jpg");}
    if(icon === '04n' || icon === '04d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_nuage.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_nuage.jpg");}
    if(icon === '09n' || icon === '09d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_rain.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_pluie.jpg");}
    if(icon === '10n' || icon === '10d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_rain.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_pluie.jpg");}
    if(icon === '11n' || icon === '11d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_tonere.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_pluie.jpg");}
    if(icon === '13n' || icon === '13d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_neige.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_neige.jpg");}
    if(icon === '10n' || icon === '10d'){ day.querySelector("#peppa_pig").src = "src/images/peppa_rain.png"; day.querySelector("#peppa_pig").setAttribute('bg',"src/images/bg_nuage_soleil.jpg");}


}