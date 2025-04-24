const startBtn = document.getElementById('start-recording');
const stopBtn = document.getElementById('stop-recording');
const statusText = document.getElementById('status');
const waveContainer = document.getElementById('wave-container');
const waveElement = document.getElementById('wave');
const deepchat = document.getElementById('deepchat');

let recognition;

startBtn.addEventListener('click', () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Your browser doesn't support speech recognition.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  statusText.textContent = '🎧 Listening... Speak now!';
  startBtn.disabled = true;
  stopBtn.disabled = false;
  waveContainer.classList.add('active');  // Show the wave animation

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log('Transcript:', transcript);
    deepchat.sendMessage(transcript);
    statusText.textContent = `✅ Sent: "${transcript}"`;
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    statusText.textContent = `❌ Error: ${event.error}`;
  };

  recognition.onend = () => {
    console.log('Recognition ended.');
    statusText.textContent = '🛑 Stopped. Click Start to speak again.';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    waveContainer.classList.remove('active');  // Hide the wave animation
  };
});

stopBtn.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
    statusText.textContent = '🛑 Recording stopped.';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    waveContainer.classList.remove('active');  // Hide the wave animation
  }
});
