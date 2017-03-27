var rolaChida = new Audio("assets/audio/07 The Loco Motion.m4a");

function botonPlay(){
  rolaChida.play();
}

function botonPause(){
  rolaChida.pause();
}

function botonStop(){
  rolaChida.pause();
  rolaChida.currentTime = 0;
}

function botonBack(){
  rolaChida.currentTime--;
}

function botonNext(){
  rolaChida.currentTime++;
}

function sliderVol(){
  rolaChida.volume = document.getElementById("points").value/100;
}

function sliderProgress(){
  document.getElementById("progress").max = rolaChida.duration;
  rolaChida.currentTime = document.getElementById("progress").value;
}
