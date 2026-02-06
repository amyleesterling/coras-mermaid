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
  
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x, y },
    colors: ['#ffc0da', '#ffd6f0', '#ff69b4', '#da70d6', '#ee82ee', '#dda0dd']
  });
  
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