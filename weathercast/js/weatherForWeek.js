
export const getWeatherForWeek = () => {
    const weatherForWeek = [
        {
            day: "monday",
            date: "08.12"
        },
         {
            day: "tusday", 
            date: "09.12"
        },
         {
            day: "wednesday", 
            date: "10.12"
        },
         {
            day: "thusday", 
            date: "11.12"
        },
         {
            day: "friday", 
            date: "12.12"
        },
         {
            day: "saturday", 
            date: "13.12"
        },
         {
            day: "sunday", 
            date: "14.12"
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