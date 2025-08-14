var music = [
    {
        "title": "Grateful",
        "artist": "Neffex",
        "mp3": "./Music/Grateful.mp3",
        "cover": "./Images/grateful.jpg"
    },
    {
        "title": "Fight-Back",
        "artist": "Neffex",
        "mp3": "./Music/fight_back.mp3",
        "cover": "./Images/fight_back.jpg"
    },
    {
        "title": "Give-Smile",
        "artist": "Give-Smile-Author",
        "mp3": "./Music/Give-Smile.mp3",
        "cover": "./Images/summer.jpg"
    },
    {
        "title": "Power-Trap",
        "artist": "Power-Trap-Author",
        "mp3": "./Music/Power-Trap.mp3",
        "cover": "./Images/hey.jpg"
    },
    {
        "title": "Sweet-Dreams",
        "artist": "Sweet-Dreams-Author",
        "mp3": "./Music/Sweet-Dreams.mp3",
        "cover": "./Images/ukulele.jpg"
    }
]

var currentSong = 0;

var audio = new Audio();
audio.src = music[currentSong].mp3;

const musicCount = document.querySelector('.music-count');
const cover = document.querySelector('.cover-img');
const current = document.querySelector('.current-time');
const timeSlider = document.querySelector('.time-slider');

musicCount.textContent = `Playing ${currentSong+1} of ${music.length}`;


var correctTime = "00:00";
current.textContent = correctTime;

var playState = false;


function LoadSong(){
    audio.src = music[currentSong].mp3;
    if(playState){
        audio.play();
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        updateSlider();
    }
    else{
        audio.pause();
        playState = true;
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    }
}

const totalTimeDisplay = document.querySelector('.total-time');

audio.addEventListener('loadeddata',() =>{
    let duration = audio.duration;
    let totalMinutes = Math.floor(duration/60);
    let totalSeconds = Math.floor(duration%60);
    if(totalSeconds < 10){
        totalSeconds = `0${totalSeconds}`;
    } 
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds}`;

    timeSlider.max = duration;

    var coverImg = music[currentSong].cover;
    cover.src = `${coverImg}`;

});


const prevBtn = document.querySelector('.prev-btn');
const playPause = document.querySelector('.play-pause-container');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click',()=>{

    if(timeSlider.value == 0){
        if(currentSong==0){
            currentSong = music.length - 1;
        }
        else{
            currentSong--;
        }
        musicCount.textContent = `Playing ${currentSong+1} of ${music.length}`;
        LoadSong();
    }
    else{
        timeSlider.value = 0;
        audio.currentTime = 0;
    }
});

nextBtn.addEventListener('click',()=>{
    if(currentSong==music.length - 1){
        currentSong = 0;
    }
    else{
        currentSong++;
    }
    musicCount.textContent = `Playing ${currentSong+1} of ${music.length}`;
    LoadSong();
});

const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

playPause.addEventListener('click',()=>{
    if(playState){
        audio.pause();
        playState = false;
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
    }
    else{
        audio.play();
        playState = true;
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
        updateSlider();
    }
});

let correctMinutes = 0;
let correctSeconds = 0;
let currentTotal = 0;


function updateSlider(){
    setInterval(() => {
        timeSlider.value = audio.currentTime;
        currentTotal = audio.currentTime;
        correctMinutes = Math.floor(currentTotal/60);
        correctSeconds = Math.floor(currentTotal%60);
        if(correctMinutes < 10) correctMinutes = `0${correctMinutes}`;
        if(correctSeconds < 10) correctSeconds = `0${correctSeconds}`;
        correctTime = `${correctMinutes}:${correctSeconds}`;
        current.textContent = correctTime;
    }, 1000);
}

function seekSlider(){
    let seekPosition = timeSlider.value;
    audio.currentTime = seekPosition;

    console.log("seek to: "+seekPosition);

    currentTotal = audio.currentTime;
    correctMinutes = Math.floor(currentTotal/60);
    correctSeconds = Math.floor(currentTotal%60);

    if(correctMinutes < 10) correctMinutes = `0${correctMinutes}`;
    if(correctSeconds < 10) correctSeconds = `0${correctSeconds}`;

    correctTime = `${correctMinutes}:${correctSeconds}`;
    current.textContent = correctTime;
}

timeSlider.addEventListener("input",seekSlider);
timeSlider.addEventListener("change",seekSlider);


const volumeSlider = document.querySelector('.volume-slider');
volumeSlider.min = 0;
volumeSlider.max = 1;
volumeSlider.step = 0.01;

audio.volume = 0.50;
volumeSlider.value = 0.50;

function seekVolume(){
    let newVolume = volumeSlider.value;
    audio.volume = newVolume;

}

volumeSlider.addEventListener("change",seekVolume);
