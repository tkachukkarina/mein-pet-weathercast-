
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=b365fae7f562a5993dce0c4e7336947e

export async function serverInfo(city) {

    const apiKey = 'b365fae7f562a5993dce0c4e7336947e'
    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

    const response = await fetch (server, {
        method: 'GET',
    });

    if (!response.ok) {
        alert('ПАЛУНДРА!!! Місто не знайдене');
    } else {
        const result = await response.json();
        return result;
    }
};

