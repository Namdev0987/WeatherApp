let form = document.querySelector("form");
let input = document.querySelector("input");
let card = document.querySelector("#wetherCard");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let img = document.querySelector("img");

const fetchWeather = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=8e5296f9f21c425fa2a122442242309&q=${input.value}&aqi=yes`
    );
    const data = await response.json();
    // console.log(data)
    card.className = "card p-3 my-3 rounded-0";
    h1.innerText = data.current.temp_c;
    h2.innerText = data.location.name;
    img.setAttribute("src", data.current.condition.icon);
    p.innerText = data.current.condition.text;
    form.reset();
  } catch (error) {
    card.className = "card p-3 my-3 rounded-0 d-none";
    // window.alert("Invalid city name");
  }
};

form.addEventListener("click", fetchWeather);
