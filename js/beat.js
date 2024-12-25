const audioElement = document.getElementById("audioPlayer");
const imageElement = document.getElementById("profile-thumb");

// Setup Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioSource = audioContext.createMediaElementSource(audioElement);
const analyser = audioContext.createAnalyser();

audioSource.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 256;

const dataArray = new Uint8Array(analyser.frequencyBinCount);

// Beat detection function
function detectBeat() {
  analyser.getByteFrequencyData(dataArray);

  // Calculate the average frequency (simplified)
  const average =
    dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

  // Adjust this threshold based on the music
  if (average > 90) {
    // Apply random transformations to the image
    const scale = 1 + Math.random() * 0.5; // Scale between 1 and 1.5

    // imageElement.style.transform = ``;
    imageElement.style.transform = `scale(${scale})`;
  } else {
    // Reset the transformation when no beat
    imageElement.style.transform = "scale(1) ";
  }

  requestAnimationFrame(detectBeat);
}

// Start beat detection when audio plays
audioElement.addEventListener("play", () => {
  audioContext.resume().then(() => {
    detectBeat();
  });
});
