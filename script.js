document.getElementById("b1").addEventListener("click", function(e) {
    e.preventDefault();
    var city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e64166980b4d2a08f2876131f0ac4449&units=metric`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Display the weather info
            document.querySelector("article p").textContent =
                `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;

            // Get the weather condition
            const condition = data.weather[0].main;
            let imageUrl = "";

            // Set image based on condition
            if (condition === "Clear") {
                imageUrl = "clear.jpg";
            } else if (condition === "Clouds") {
                imageUrl = "cloudy.jpg";
            } else if (condition === "Rain") {
                imageUrl = "rain.jpg";
            } else if (condition === "Snow") {
                imageUrl = "snow.jpg";
            } else if (condition === "Thunderstorm") {
                imageUrl = "storm.jpg";
            } else {
                imageUrl = "default.jpg"; // fallback
            }

            // Apply image
            document.body.style.backgroundImage = `url('${imageUrl}')`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
        })
        .catch(function(error) {
            console.error(error);
            document.querySelector("article p").textContent = "City not found or error fetching data.";
        });
});
