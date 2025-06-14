    document.getElementById("b1").addEventListener("click",function(e){
    e.preventDefault();
        var city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e64166980b4d2a08f2876131f0ac4449&units=metric`)
});