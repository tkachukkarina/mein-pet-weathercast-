import { serverInfo } from "./weatherAPI.js"
import { gettempData } from "./mainWeatherInfo.js"

export const searchByCity = () => {


const form = document.querySelector('#search');
const input = document.querySelector('#input');
const cityName = document.querySelector('.citypar');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const city = input.value.trim();
    if (!city) return;
    
    cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    await gettempData(city)

    const info = await serverInfo(city)
    console.log('city from', city)
    return info

    

});

}

