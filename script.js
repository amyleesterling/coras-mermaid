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
  
  // Rising bubbles from the bottom with wobble physics
  createBubbles();
  
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

// Create bubbles with wobble physics
function createBubbles() {
  const container = document.getElementById('bubble-container');
  const bubbleCount = 40;
  
  for (let i = 0; i < bubbleCount; i++) {
    setTimeout(() => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 10px and 40px
      const size = Math.random() * 30 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random starting position at bottom
      const startX = Math.random() * 100;
      bubble.style.left = `${startX}%`;
      bubble.style.bottom = '-50px';
      
      // Wobble effect - creates sine wave motion
      const wobbleAmount = (Math.random() - 0.5) * 200; // -100px to +100px
      bubble.style.setProperty('--wobble-distance', `${wobbleAmount}px`);
      
      // Random duration for variety (slower for bigger bubbles)
      const duration = 3 + (size / 10) + Math.random() * 2;
      bubble.style.animationDuration = `${duration}s`;
      
      container.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    }, i * 30); // Stagger bubble creation
  }
}