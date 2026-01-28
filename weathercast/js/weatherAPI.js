//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=b365fae7f562a5993dce0c4e7336947e

export async function serverInfo(city) {

    
    const geoApi = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=uk&format=json`

    try {
        const geoResponse = await fetch(geoApi, {
        method: 'GET',
    });

   

    const data = await geoResponse.json();
    console.log('data:', data);

    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;

   const server = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature`

 const response = await fetch (server, {
        method: 'GET',
    });

    if (response.ok) {
        const result = await response.json();
        console.log('result:',result);
        return result;
    };
    } catch (err) {
       console.log("error");
        alert('ПАЛУНДРА!!! Місто не знайдене')
    }

    

    
}


