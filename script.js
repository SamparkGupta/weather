document.getElementById("b1").addEventListener("click", function (e) {
  e.preventDefault();
  const city = document.getElementById("city").value.trim();

  if (!city) {
    document.querySelector("article p").textContent = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e64166980b4d2a08f2876131f0ac4449&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        document.querySelector("article p").textContent = data.message || "City not found.";
        return;
      }

      // Display weather info
      document.querySelector("article p").textContent =
        `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;

      const condition = data.weather[0].main.toLowerCase();
      let imageUrl = "bgweather.jpg";
      let audioFile = "default.mp3";

      switch (condition) {
        case "clear":
          imageUrl = "clear.jpg";
          audioFile = "clear.mp3";
          break;
        case "clouds":
          imageUrl = "cloudy.jpg";
          audioFile = "cloudy.mp3";
          break;
        case "rain":
        case "drizzle":
          imageUrl = "rain.jpg";
          audioFile = "rain.mp3";
          break;
        case "snow":
          imageUrl = "snow.jpg";
          audioFile = "snow.mp3";
          break;
        case "thunderstorm":
          imageUrl = "storm.jpg";
          audioFile = "storm.mp3";
          break;
        default:
          imageUrl = "bgweather.jpg";
          audioFile = "default.mp3";
      }

      // Update background
      document.body.style.backgroundImage = `url('${imageUrl}')`;

      // Update audio source
      const audio = document.getElementById("bg-audio");
      audio.src = audioFile;
      audio.load(); // reload the new file
      if (!audio.muted) audio.play(); // auto-play if not muted
    })
    .catch((error) => {
      console.error(error);
      document.querySelector("article p").textContent = "Error fetching weather data.";
    });
});

// Mute/unmute toggle
const audio = document.getElementById("bg-audio");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? "🔇" : "🔊";
  muteBtn.title = audio.muted ? "Unmute" : "Mute";
});
