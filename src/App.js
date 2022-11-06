import './App.css';

function App() {
  return (
    <div className='app'>
    <div className='nav-bar'>
  <input id='input' type="text" />
  <a id='button' href='##' type='text' onClick={button_click}>search</a>
  </div>
  <div id='weather-view'>
        <div className='city'>City</div>
        <div className='temp'>{"0"+"°"}</div>
        <div className='sky'>Weather</div>
        <div className='th'>
        <div className='tempT'>{"0"+"°"}</div>
        <div className='tempH'>{"0"+"°"}</div></div>
    </div></div>
  );}

export default App;

function weather_data(input_city) {
fetch (
  'https://api.openweathermap.org/data/2.5/weather?q='+input_city+'&units=metric&appid=17a9c05423a9aae2be18a4b09068a5eb',
  )
  .then((response) => response.json())
  .then((data) => {
    var temp = data['main']['temp'];
    var tempT = data['main']['temp_min'];
    var tempH = data['main']['temp_max'];
    var sky = data['weather']['0']['main'];
    var cityName = data['name'];

    var cityClass = document.querySelector('.city');
    var tempClass = document.querySelector('.temp');
    var tempTClass = document.querySelector('.tempT');
    var tempHClass = document.querySelector('.tempH');
    var skyClass = document.querySelector('.sky');

    cityClass.innerHTML = cityName;
    tempClass.innerHTML = temp+"°";
    tempTClass.innerHTML = "T:"+tempT+"°";
    tempHClass.innerHTML = "H:"+tempH+"°";
    skyClass.innerHTML = sky;
  });
}

function button_click() {
  var input = document.getElementById('input').value;
  weather_data(input);
  document.getElementById('input').value = "";
}