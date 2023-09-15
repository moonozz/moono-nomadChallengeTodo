const clock = document.querySelector(".clock");
const weather = document.querySelector(".weather");

const getTime = () => {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${min}`;
};

getTime();
setInterval(getTime, 6000);
