const musicButton1 = document.getElementById("musicList1");
const musicButton2 = document.getElementById("musicList2");
const musicButton3 = document.getElementById("musicList3");
const musicButton4 = document.getElementById("musicList4");
const x = document.getElementById("audio");

let isPlaying = false;

const playAudio = () => {
  x.play();
  isPlaying = true;
}

const pauseAudio = () => {
  x.pause();
  isPlaying = false;
}

musicButton1.addEventListener('click', () => {
  x.src = "assets/audio/Chill Vlog Happy Lofi Beat Marshmallow by Lukrembo.mp3";
  if(isPlaying)
  {
    pauseAudio();
  }
  else
  {
    playAudio();
  }
});

musicButton2.addEventListener('click', () => {
  x.src = "assets/audio/Grieg - Morning Mood.mp3";
  if(isPlaying)
  {
    pauseAudio();
  }
  else
  {
    playAudio();
  }
});

musicButton3.addEventListener('click', () => {
  x.src = "assets/audio/Infraction-City-Beat-Main-Version-pr.mp3";
  if(isPlaying)
  {
    pauseAudio();
  }
  else
  {
    playAudio();
  }
});

musicButton4.addEventListener('click', () => {
  x.src = "assets/audio/Punch Deck - Maximalism.mp3";
  if(isPlaying)
  {
    pauseAudio();
  }
  else
  {
    playAudio();
  }
});