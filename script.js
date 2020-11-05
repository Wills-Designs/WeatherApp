window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone")


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude
      lat = position.coords.latitude
      
      const api = `https://api.weatherapi.com/v1/forecast.json?key=a4ca8e8251d2480cbb0192352200511&q=${lat},${long}&days=1`
      
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
        const {temp_f} = data.current;
        const {name} = data.location;
        const {text} = data.current.condition;
        const {icon} = data.current.condition;
        console.log(icon)
        temperatureDescription.textContent = text;
        locationTimezone.textContent = name;
        temperatureDegree.textContent = temp_f;
        document.getElementById("icon").src = `${icon}`;
        })
    })  
  }
});

