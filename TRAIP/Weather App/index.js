
const link="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key="419bfa0ee75969e4c0328fa4eb889c2e";
const city=document.querySelector(".text-box");
const weth=document.querySelector(".weather");
const hum= document.querySelector(".hum");
const win=document.querySelector(".win");
async function check_weather(city){
   const search_link = await fetch(link+city.value+`&appid=${api_key}`);
   let data=await search_link.json();
   console.log(data);
   if(data.cod==="400"){
      location.reload();
   }
   if(data.cod==="404"){
    location.reload();
 }
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
   document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
   document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";
   var img =data.weather[0].main;
   console.log(img)
   if (img==="Clouds"){
       weth.src="./assets/clouds.png";
   }
   if (img==="Clear"){
    weth.src="./assets/clear.png";
   }
   if (img==="Dizzle"){
  weth.src="./assets/dizzle.png";
   }
   if (img==="Mist"){
  weth.src="./assets/mist.png";
   }
   if (img==="Rain"){
  weth.src="./assets/rain.png";
   }
   if (img==="Snow"){
  weth.src="./assets/snow.png";
   }
   hum.style.display="block";
   win.style.display="block";
}

//const city=document.querySelector("text-box");

//const search=document.getElementsByClassName(search);
//search.addEventListener("onclick",()=>{
  // console.log("done");

const button=document.querySelector("button");
button.addEventListener("click",()=>{check_weather(city)});