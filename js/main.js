const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const searchBtn = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBtn}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text;
}

const displayTemperature = (temperature) => {
    console.log(temperature)
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}




// const fetchedData = async (url) => {
//     const response = await fetch(url);

//     const data = await response.json();

//     return data;
//   };