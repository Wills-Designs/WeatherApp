window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector("temperature-description");
  let temperatureDegree = document.querySelector("temperature-degree");
  let locationTimezone = document.querySelector("location-timezone")


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
        console.log(temp_f)
        temperatureDegree.textContent = temp_f;
        })
    })  
  }
});

