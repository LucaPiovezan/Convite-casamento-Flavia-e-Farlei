const weddingDate = new Date("2025-12-28T11:00:00-03:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<p style="color: var(--gold); font-size: 1.5rem;">O grande dia chegou!</p>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ========== MUSIC PLAYER ==========
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');
const pulseRing = document.getElementById('pulseRing');
const audioBars = document.getElementById('audioBars');
const closeBtn = document.getElementById('closeBtn');
const musicPlayer = document.getElementById('musicPlayer');
const musicIconBtn = document.getElementById('musicIconBtn');

let isPlaying = false;

// Play/Pause toggle
playBtn.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
    pulseRing.classList.remove('active');
    audioBars.classList.remove('active');
  } else {
    audio.play();
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
    pulseRing.classList.add('active');
    audioBars.classList.add('active');
  }
  isPlaying = !isPlaying;
});

// Close player
closeBtn.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  }
  musicPlayer.style.display = 'none';
  musicIconBtn.style.display = 'flex';
});

// Show player
musicIconBtn.addEventListener('click', function() {
  musicPlayer.style.display = 'flex';
  musicIconBtn.style.display = 'none';
});

// When audio ends
audio.addEventListener('ended', function() {
  iconPlay.style.display = 'block';
  iconPause.style.display = 'none';
  pulseRing.classList.remove('active');
  audioBars.classList.remove('active');
  isPlaying = false;
});