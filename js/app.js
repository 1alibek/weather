const searchBox = document.getElementById('searchBox');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const notFoundMess = document.getElementById('notFoundMess');
const location = document.getElementById('location');
const country = document.getElementById('country');
const temperature = document.getElementById('temperature');
function getWeather(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            searchBox.style.transition = '.5s';
            searchBox.style.top = '-100%';
            showWeatherUi(data);
            searchInput.style.borderColor = '';
        })
        .catch(() => {
            searchBox.style.top = '0';
            searchInput.style.borderColor = 'red';
            notFoundMess.style.opacity = '1';
        });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = searchInput.value.trim();
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4cf1fe3ab5c2657d07c5c11c9834f4cb`;
    getWeather(BASE_URL);
    searchInput.value = '';
});
function showWeatherUi(data) {
    location.textContent = data.name;
    country.textContent = data.sys.country;
    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
}
