// Cora's Mermaid Seeout - Spotify player page

// Mermaid click-to-play functionality
const mermaidImg = document.getElementById('mermaid-img');
const mermaidAudio = document.getElementById('mermaid-audio');

let isMermaidSongPlaying = false;

mermaidImg.addEventListener('click', async (event) => {
  if (!mermaidAudio) return;
  
  // Trigger confetti on every click
  const rect = mermaidImg.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;
  
  // Create a longer-lasting, more abundant confetti effect
  const colors = ['#ffc0da', '#ffd6f0', '#ff69b4', '#da70d6', '#ee82ee', '#dda0dd'];
  
  // Initial burst
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { x, y },
    colors: colors,
    gravity: 0.6,
    ticks: 300,
    scalar: 1.2
  });
  
  // Second burst
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x, y },
      colors: colors,
      gravity: 0.6,
      ticks: 300,
      scalar: 1
    });
  }, 100);
  
  // Third burst
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x, y },
      colors: colors,
      gravity: 0.6,
      ticks: 300,
      scalar: 0.8
    });
  }, 200);
  
  if (isMermaidSongPlaying) {
    mermaidAudio.pause();
    isMermaidSongPlaying = false;
    mermaidImg.style.transform = 'scale(1)';
  } else {
    try {
      await mermaidAudio.play();
      isMermaidSongPlaying = true;
      mermaidImg.style.transform = 'scale(1.05)';
    } catch (err) {
      console.log('Unable to play audio:', err);
    }
  }
});