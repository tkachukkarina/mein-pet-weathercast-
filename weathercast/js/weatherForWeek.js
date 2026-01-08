
export const getWeatherForWeek = () => {
    const weatherForWeek = [
        {
            day: "Понеділок",
            date: "08.12"
        },
         {
            day: "Вівторок", 
            date: "09.12"
        },
         {
            day: "Середа", 
            date: "10.12"
        },
         {
            day: "Четвер", 
            date: "11.12"
        },
         {
            day: "Пʼятниця", 
            date: "12.12"
        },
         {
            day: "Субота", 
            date: "13.12"
        },
         {
            day: "Неділя", 
            date: "14.12"
        },
        {
            day: "Понеділок", 
            date: "15.12"
        },
        {
            day: "Вівторок", 
            date: "16.12"
        },
        {
            day: "Середа", 
            date: "17.12"
        }
    ]


    console.log((weatherForWeek[5].day))

const container = document.querySelector('.karusel')

weatherForWeek.forEach((item) => {
  const day = document.createElement("div")
  day.classList.add("day")

  const dayContent = document.createElement("p")
  dayContent.classList.add("wk")
  dayContent.textContent = item.day

  const dateContent = document.createElement("p")
  dateContent.classList.add("wk")
  dateContent.textContent = item.date

  day.append(dayContent)
  day.append(dateContent)

  container.append(day)
})


}