import { serverInfo } from "./weatherAPI.js"


export const getMainWeatherInfo = () => {
    const mainWeatherInfo = [
        {
            cityName: "місто",
            temperature: "0°",
            feelTemp: "Відчувається як:",
            feelTempNumber: "0°"
        }
    ]

    const container = document.querySelector('#maininfo')


    mainWeatherInfo.forEach((item) => {
        const mainData = document.createElement('div')
        mainData.classList.add('cityblock')

        const mainDataInfo = document.createElement('p')
        mainDataInfo.classList.add('citypar')
        mainDataInfo.textContent = item.cityName

        const temperatureInfo = document.createElement('p')
        temperatureInfo.classList.add('citytemp')
        temperatureInfo.textContent = item.temperature

        const feelTempInfo = document.createElement('p')
        feelTempInfo.classList.add('feeltemp')
        feelTempInfo.textContent = item.feelTemp

        const numberInfo = document.createElement('p')
        numberInfo.classList.add('numberinfo')
        numberInfo.textContent = item.feelTempNumber

        mainData.append(mainDataInfo)
        mainData.append(temperatureInfo)
        mainData.append(feelTempInfo)
        mainData.append(numberInfo)
        container.append(mainData)
    });

}


    export const gettempData = async (city) => {
    
        console.log('hello')

        const temperatureElem = document.querySelector('.citytemp')
        const feelTempElem = document.querySelector('.numberinfo')

        const data = await serverInfo(city)

        const temperature = Math.round(data.main.temp);
        const feelTemp = Math.round(data.main.feels_like);

        temperatureElem.textContent = `${temperature} c°`;
        feelTempElem.textContent = `${feelTemp} c°`;

    
    
    //getWeather(info)
    }