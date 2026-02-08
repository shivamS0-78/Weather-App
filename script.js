const API_KEY="66c6a307ec5167a8f5244bc9b408c506";
const op = document.querySelector(".content")

function dropDown(){
    if(op.style.height){
        op.style.height = null;
    }
    else{
        op.style.height = op.scrollHeight + "px";
    }
}

document.getElementById("dropDown").addEventListener("click",dropDown);
console.log(op.style.height);

document.getElementById("blue-style").addEventListener("click",async ()=>{
    const city = document.getElementById("place-input").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    let data = await response.json();
    const {temp , humidity , feels_like,pressure} = data.main;
    const {description,icon}=data.weather[0];
    const {speed} = data.wind;
    document.querySelector(".place-name").textContent=data.name;
    document.querySelector(".temp").textContent=`${temp}°C`
    document.getElementById("percent").textContent=`${humidity}%`
    document.getElementById("feelsLtemp").textContent=`${feels_like}°C`
    document.querySelector(".condition-card").textContent=description.toUpperCase();
    document.getElementById("imgIcon").src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById("pressure").textContent=`PRESSURE : ${pressure} mPa`;
    document.getElementById("wind").textContent=`WIND : ${speed} m/s`
})

