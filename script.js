
document.getElementById("b1").addEventListener("click", function(e) {
    e.preventDefault();
    var city = document.getElementById("city").value;

    if (city.trim() === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e64166980b4d2a08f2876131f0ac4449&units=metric`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data); // See full response
            document.querySelector("article p").textContent =
                `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        })
        .catch(function(error) {
            console.error(error);
            document.querySelector("article p").textContent = "City not found or error fetching data.";
        });
});

