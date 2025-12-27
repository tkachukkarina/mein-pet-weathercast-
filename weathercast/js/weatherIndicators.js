
export const getWeatherIndicators = () => {
    const weatherIndicators = [
        {
            dataName: "Вологість"
        },
        {
            dataName: "Видимість"
        },
        {
            dataName: "Вітер"
        },
        {
            dataName: "Тиск"
        }
    ]

    const container = document.querySelector('#bigblock')
    
    weatherIndicators.forEach((item) => {
        const dataName = document.createElement('div')
        dataName.classList.add('miniblock')

        const dataNameContent = document.createElement('p')
        dataNameContent.classList.add('hvwp')
        dataNameContent.textContent = item.dataName

        dataName.append(dataNameContent)
        container.append(dataName)
    })
}