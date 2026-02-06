// Attempt to autoplay the background audio. Many browsers block autoplay until user interaction.
// We handle both autoplay and a user-controlled toggle.
const audio = document.getElementById('bg-audio');
const toggleBtn = document.getElementById('bg-toggle');
const note = document.getElementById('autoplay-note');

let isPlaying = false;

async function tryAutoplay() {
  if (!audio) return;
  try {
    await audio.play();
    isPlaying = true;
    toggleBtn.textContent = 'Pause music';
    note.textContent = 'Background music playing';
  } catch (err) {
    // Autoplay blocked — inform the user and set button to play
    isPlaying = false;
    toggleBtn.textContent = 'Play music';
    note.textContent = 'Autoplay was blocked by your browser. Click "Play music" to start the background track.';
  }
}

toggleBtn.addEventListener('click', async () => {
  if (!audio) return;
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    toggleBtn.textContent = 'Play music';
    note.textContent = 'Music paused';
  } else {
    try {
      await audio.play();
      isPlaying = true;
      toggleBtn.textContent = 'Pause music';
      note.textContent = 'Background music playing';
    } catch (err) {
      note.textContent = 'Unable to play. Some browsers require a user gesture or specific media formats.';
    }
  }
});

// Start autoplay attempt on page load.
tryAutoplay();