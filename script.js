console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("10.mp3");

let masterPlay = document.getElementById("masterPlay");
let MyProgressBar = document.getElementById("MyProgressBar");

let songs = [
  {
    songName: "salam-e-ishq",
    filePath: "song/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

// let audioElement = new Audio("1.mp3");
// audioElement.play();

// Handle Play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

// listen to events

MyProgressBar.addEventListener("timeupdate", () => {
  console.log("timeupdate");
});
