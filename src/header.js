const apiKey = "81acc92028bd0387d800ecffa68063f2";

const clock = document.querySelector(".clock");
const weather = document.querySelector(".weather");

// 시간 계산하기
const getTime = () => {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${min}`;
};

// 유저 위치 가져오기
const geoSuccess = (e) => {
  const lat = e.coords.latitude;
  const lon = e.coords.longitude;
  console.log(e);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const location = data.name;
      const weather = data.weather[0].main;
      const temp = Math.floor(data.main.temp);
      // console.log(data.name, data.weather[0].main);
      const weatherCon = document.querySelector(".weather");

      weatherCon.innerText = `${location} ${weather} ${temp}\u00b0C`;
    });
};

const geoErr = () => {
  weather.innerText = "위치 못받아옴";
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoErr);

getTime();
setInterval(getTime, 6000);
