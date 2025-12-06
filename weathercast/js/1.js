const elemOne = document.querySelectorAll('.miniblock');
console.log(elemOne);

const form = document.querySelector('#search');
const input = document.querySelector('#input');
const cityName = document.querySelector('#citypar');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    cityName.textContent = input.value;
});

const date = new Date();

console.log(date.getDay());

