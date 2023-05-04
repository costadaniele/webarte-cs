//var url2 = "https://ia801504.us.archive.org/8/items/capsulassonoras/cs02_11U4.mp3"

function LineAmp(lineX, lineY) {
  this.xValue = lineX;
  this.yValue = lineY;
}

function CircF(radiusCirc) {
  this.radius = radiusCirc;
  this.color = color(0, random(195, 94), 0, random(0, 200));
}

function preload() {
  headerImg = loadImage("../Header.png");
}

function setup() {
  //for all
  createCanvas(windowWidth, windowHeight);
  song = loadSound("/CAPSULAS_MP3/cs02_11U4.mp3", loaded);
  //song1 = loadSound (url2, loaded);
  //song = song1;
  background(0);
  toggleSliders();

  //for bubbles
  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 64);

  //for radial
  amplitude = new p5.Amplitude();
  fft1 = new p5.FFT(0, 32);

  // for lines
  amp2 = new p5.Amplitude();
  particleFormation();
}

function draw() {

  header();
  if (songLoading === 0) {
    push();
    textSize(12);
    fill(255)
    textFont("Source Sans Pro");
    text("Aguarde...", width / 2 - 30, height / 2);
    pop();
  } else {
    if (selectVizCount === 1) {
      bubbleViz();
    } else if (selectVizCount === 2) {
      radial();
    } else if (selectVizCount === 3) {
      lines();
    }
  }
}

function header() {
  background(0);
  screenText();
  song.setVolume(volume.value());
  song.rate(rate.value());
  // image(headerImg,width/2-400,25,800,200);
}

function splash() {
  for (var l = 0; l < splashCount.length; l++) {
    for (var i = 0; i < particleVortex[l].length; i++) {
      fill(particleVortex[l][i].color);
      particleVortex[l][i].animation(l);
      particleVortex[l][i].display();
    }
  }
}

function particleFormation() {
  var k = 0;
  for (var l = splashCount.length - 1; l < splashCount.length; l++) {
    particleVortex[splashCount.length - 1] = [];
    for (var j = 0; j < 2; j++) {
      for (var i = 0; i < 25; i++) {
        particleVortex[l][k] = new Particle(0, 0, amplitude1 - i * (10));
        k++;
      }
    }

  }
}

function Particle(x, y, amp1) {
  this.speed = random(0.1, 1.5);
  this.name = "astroid";
  this.color = color(255, random(21, 133), 5, random(2, 200));
  this.posX = x;
  this.posY = y;
  this.angle = random(0, 360);
  this.size;
  this.amplitude = amp1;
  this.sizeAmplitude = random(0.1, 5);

  this.animation = function (i) {
    this.posY = sin(radians(this.angle)) * 0.25 * this.amplitude * splashCount[i] / 30;
    this.posX = cos(radians(this.angle)) * this.amplitude * splashCount[i] / 30;
    this.size = sin(radians(this.angle / 2 + 135)) * this.sizeAmplitude;
    this.angle = this.angle + this.speed * changeDir;
  }

  this.display = function () {
    ellipse(this.posX, this.posY, this.size, this.size);
  }
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    playButton.html("▢");
  } else {
    song.pause();
    playButton.html("▷");
  }
}

function loaded() {
  songLoading++;
  console.log("Loaded");
}

/*function jumpPlaying() {
  songLen = song.duration();
  song.jump(random(songLen));
}*/

function changeBackground() {
  background(random(255), random(255), random(255));
}

function toggleSliders() {
  volume = createSlider(0, 1, 0.5, 0.05);
  rate = createSlider(0, 2, 1, 0.05);

  songSelect = createSelect();
  songSelect.option('Cápsula 1');
/*  songSelect.option('Cápsula 2');
  songSelect.option('Cápsula 3');
  songSelect.option('Cápsula 4');
  songSelect.option('Cápsula 5');
  songSelect.option('Cápsula 6');
  songSelect.option('Cápsula 7'); */
 
  songSelect.changed(changedSong);

  selectViz = createSelect();
  selectViz.option('V1');
  /*selectViz.option('V2');
  selectViz.option('V3');*/

  selectViz.changed(changedViz);

  playButton = createButton("▷");
  playButton.mousePressed(togglePlaying);

   //jumpButton = createButton("Jump");
 // jumpButton.mousePressed(jumpPlaying);
  // jumpButton.position(width / 2 - 400, height - 480);
  songSelect.position(width / 2 - 650, height - 100);
  selectViz.position(width / 2 - 650, height - 420);
  playButton.position(width / 2 - 13, height - 200);
  volume.position(width / 2 - 60, height - 140); // mais
  rate.position(width / 2 - 60, height - 100); // menos
}

function screenText() {
  textSize(12);
  fill(195, 1, 94);
 // text("Selecione", width / 2 - 600, height - 500);
  textFont("Source Sans Pro");
 // text("Visualização", width / 2 - 600, height - 440);
  text("Volume", width / 2 - 10 , height-145);
  text("Velocidade", width / 2 - 20, height -105);
}

function changedSong() {
  if (song.isPlaying()) {
    togglePlaying();
  }
  if (songSelect.value()  == 'Cápsula 1') {
     song = url;
  } /*else if (songSelect.value() == 'Cápsula 2') {
    song = song2;
  } else if (songSelect.value() == 'Cápsula 3') {
    song = song3;
  } else if (songSelect.value() == 'Cápsula 4') {
    song = song4;
  } else if (songSelect.value() == 'Cápsula 5') {
    song = song5;
  } else if (songSelect.value() == 'Cápsula 6') {
    song = song6;
  } else if (songSelect.value() == 'Cápsula 7') {
    song = song7;
  }*/
}

function changedViz() {
  if (song.isPlaying()) {
    //togglePlaying();
  }
  if (selectViz.value() == 'V3') {
    selectVizCount = 1;
  } /*
  if (selectViz.value() == 'V2') {
    selectVizCount = 2;
  }
  if (selectViz.value() == 'V1') {
    selectVizCount = 3;
  } */
}

function mousePressed() {
  changeDir = changeDir * (-1);
}