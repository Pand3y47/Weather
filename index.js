
const app  =
{
  init:() =>
  {
    document
    .getElementById("btnGet")
    .addEventListener("click",app.fetchWeather);
    document
    .getElementById("btnCurrent")
    .addEventListener("click", app.getLocation);
  },
  getLocation: (ev) =>
  {
    let opts = {
      enableHighAccuracy: true,
      timeOut : 1000*10,
      maxAge : 1000*60*5,
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  wtf : (err) =>
  {
    console.error(err);
  },
  ftw : (position) =>
  {
    document.getElementById("latitude").value = position.coords.latitude.toFixed(2);
    document.getElementById("longitude").value = position.coords.longitude.toFixed(2);
  },
  fetchWeather : (ev) =>
  {
    let lat = document.getElementById("latitude").value;
    let long = document.getElementById("longitude").value;
    let key = "89832b08ff67ec7b57cc41e17e659d59";
    let units = "metric";
    let url  = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat +"&lon="+long +"&units=metric&exclude=hourly,minutely&appid="+key;
    fetch(url)
    .then(resp=>{
      if(!resp.ok) throw new Error(resp.statusText);
        return resp.json();
    })
    .then(data=>
    {
      app.showWeather(data);
    })
    .catch(console.err)
  },
  showWeather:(resp) =>
  {
    console.log(resp);
    let row1 = document.querySelector(".weather1");
    row1.innerHTML = resp.daily.map((day,idx) =>{if(idx==0)
      {
        let dt = new Date(day.dt*1000);
        let sr = new Date(day.sunrise*1000).toTimeString();
        let ss = new Date(day.sunset*1000).toDateString();
        date = dt.toDateString();
        high = day.temp.max;
        low = day.temp.min;
        feel_day = day.feels_like.day;
        feel_night = day.feels_like.night;
        icon1 = day.weather[0].icon;
        des = day.weather[0].description;
        return '<div class="weather1"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://openweathermap.org/img/wn/'+icon1 +'@4x.png"><div class="day">'+date +'</br>High : '+high +'&#176 C</br>Low :'+low +'&#176 C</br>Feels like:</br> Day :'+feel_day +'</br> Night :'+feel_night +'</br>Description : '+des +'</div><div class="d-flex justify-content-between align-items-center"></div></div>';
      }
    }).join(" ");
    let row2 = document.querySelector(".weather2");
    row2.innerHTML = resp.daily.map((day,idx)=>{
      if(idx==1)
      {
        let dt = new Date(day.dt*1000);
        let sr = new Date(day.sunrise*1000).toTimeString();
        let ss = new Date(day.sunset*1000).toDateString();
        date = dt.toDateString();
        high = day.temp.max;
        low = day.temp.min;
        feel_day = day.feels_like.day;
        feel_night = day.feels_like.night;
        icon1 = day.weather[0].icon;
        des = day.weather[0].description;
        return '<div class="weather1"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://openweathermap.org/img/wn/'+icon1 +'@4x.png"><div class="day">'+date +'</br>High : '+high +'&#176 C</br>Low :'+low +'&#176 C</br>Feels like:</br> Day :'+feel_day +'</br> Night :'+feel_night +'</br>Description : '+des +'</div><div class="d-flex justify-content-between align-items-center"></div></div>';
      }
    }).join("");
    let row3  = document.querySelector(".weather3");
    row3.innerHTML = resp.daily.map((day,idx)=>
  {
    if(idx == 2)
    {
      let dt = new Date(day.dt*1000);
      let sr = new Date(day.sunrise*1000).toTimeString();
      let ss = new Date(day.sunset*1000).toDateString();
      date = dt.toDateString();
      high = day.temp.max;
      low = day.temp.min;
      feel_day = day.feels_like.day;
      feel_night = day.feels_like.night;
      icon1 = day.weather[0].icon;
      des = day.weather[0].description;
      return '<div class="weather1"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://openweathermap.org/img/wn/'+icon1 +'@4x.png"><div class="day">'+date +'</br>High : '+high +'&#176 C</br>Low :'+low +'&#176 C</br>Feels like:</br> Day :'+feel_day +'</br> Night :'+feel_night +' </br>Description : '+des +'</div><div class="d-flex justify-content-between align-items-center"></div></div>';
    }
  }).join(" ");
  let row4 = document.querySelector(".weather4");
  row4.innerHTML = resp.daily.map((day,idx)=>
  {
    if(idx==3)
    {
      let dt = new Date(day.dt*1000);
      let sr = new Date(day.sunrise*1000).toTimeString();
      let ss = new Date(day.sunset*1000).toDateString();
      date = dt.toDateString();
      high = day.temp.max;
      low = day.temp.min;
      feel_day = day.feels_like.day;
      feel_night = day.feels_like.night;
      icon1 = day.weather[0].icon;
      des = day.weather[0].description;
      return '<div class="weather1"><img class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://openweathermap.org/img/wn/'+icon1 +'@4x.png"><div class="day">'+date +'</br>High : '+high +'&#176 C</br>Low :'+low +'&#176 C</br>Feels like:</br> Day :'+feel_day +'</br> Night :'+feel_night +' </br>Description : '+des +'</div><div class="d-flex justify-content-between align-items-center"></div></div>';
    }
  }).join(" ");
}
}
app.init();
