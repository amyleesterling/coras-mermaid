// Cora's Mermaid Seeout - Spotify player page

// Mermaid click-to-play functionality
const mermaidImg = document.getElementById('mermaid-img');
const mermaidAudio = document.getElementById('mermaid-audio');

let isMermaidSongPlaying = false;

mermaidImg.addEventListener('click', async () => {
  if (!mermaidAudio) return;
  
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