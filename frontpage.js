const watagashirush = new Audio('music/watagashirush.mp3');
const tainted = new Audio('music/tainted reminiscence.mp3');
const chronoexplorers = new Audio('music/chronoexplorers.mp3');
const zander = new Audio('music/zander the rock.mp3');
const maya = new Audio('music/sincerely maya.mp3');

//img
// const watagashirushimg = url('images/maya.png')
// const taintedimg = 
// const chronoexplorersimg = 
// const zanderimg = 
// const mayaimg = 


let volume_slider = document.querySelector('.volume_slider');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: watagashirush, audioName: 'takehirotei vs SiLiS - 綿菓子RUSH' },
  { ele: tainted, audioName: 'takehirotei - Tainted Reminiscence'},
  { ele: chronoexplorers, audioName: 'takehirotei - Chronoexplorers (ft. Finite Limit)'},
  { ele: zander, audioName: 'takehirotei - ザンダル・ざ・ろっく!' },
  { ele: maya, audioName: 'takehirotei - Sincerely, Maya' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
  setVolume()

})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  setVolume()
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  setVolume()
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
    
  }
}


// volume bar
function setVolume(){
    currentSong.volume = volume_slider.value / 100;
}