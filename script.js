
document.getElementById("b1").addEventListener("click", function(e) {
    e.preventDefault();
    var city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e64166980b4d2a08f2876131f0ac4449&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Displaying the weather info
            document.querySelector("article p").textContent =
                `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error(error);
            document.querySelector("article p").textContent = "City not found or error fetching data.";
        });
});
