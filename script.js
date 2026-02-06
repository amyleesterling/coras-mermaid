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
    ticks: 400
  });
  
  // Second burst
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x, y },
      colors: colors,
      ticks: 400
    });
  }, 100);
  
  // Third burst
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x, y },
      colors: colors,
      ticks: 400
    });
  }, 200);
  
  // Rising bubbles from the bottom
  const bubbleColors = ['#87CEEB', '#ADD8E6', '#B0E0E6', '#AFEEEE', '#E0FFFF'];
  
  // Create multiple bubble streams
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 90,
        spread: 45,
        origin: { x: Math.random(), y: 1.1 },
        colors: bubbleColors,
        gravity: -0.3,
        ticks: 400,
        scalar: 0.8,
        shapes: ['circle']
      });
    }, i * 50);
  }
  
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