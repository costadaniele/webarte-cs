function bubbleViz() {
    var spectrum = fft.analyze();
    for (var i = 0; i < spectrum.length; i++) {
      noFill();
      stroke(250, i * 5, 50);
      var amp = spectrum[i];
      var y = map(amp, 0, 300, 0, height);
      mappedSpectrum[i] = map(amp, 0, 200, 5, 500);
      mappedWiggle[i] = map(mappedSpectrum[i], 10, 500, 1, 10);
  
    }
  
    var spcount = 1;
    for (var j = 0; j < spectrum.length - 20; j += 2) {
      if (mappedSpectrum[j] > 20) {
       // fill(200, 100, j * 5, 250);
      } else {
        noFill();
        stroke(200, random(0, 15), 100, 250);
      }
  
      if (spcount % 2 === 0) {
        ellipse(width / 3 + j * 15 + random(mappedWiggle[j], -mappedWiggle[j]), height / 2 + random(mappedWiggle[j], -mappedWiggle[j]), mappedSpectrum[j], mappedSpectrum[j]);
      }
      else {
        ellipse(width / 3 + j * 15 + random(mappedWiggle[j], -mappedWiggle[j]), height / 2 + 70 + random(mappedWiggle[j], -mappedWiggle[j]), mappedSpectrum[j], mappedSpectrum[j]);
      }
      spcount++;
    }
  
    var spcount = 1;
    //noStroke();
    for (var k = 2; k < spectrum.length - 20; k += 2) {
  
      if (mappedSpectrum[k] > 50) {
        //fill(195, 1, k * 5, 94);
  
      } else {
          noFill();
        //fill(0, 200);
        stroke(0, 50);
      }
  
      if (spcount % 2 === 0) {
        rect(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
      }
      else {
        ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + 70 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
      }
      spcount++;
    }
  }

  function lines() {

    if (linesCount === 0) {
      particleFormation();
    }
  
    linesCount++;
    var vol1 = amp2.getLevel();
  
    if (songSelect.value() == 'Cápsula 1') {
      dia1 = map(vol1, 0, 0.5, 50, 1600);
    } else if (songSelect.value() == 'Cápsula 2') {
      dia1 = map(vol1, 0, 0.5, 50, 1000);
    } else if (songSelect.value() == 'Cápsula 3') {
      dia1 = map(vol1, 0, 0.5, 50, 1600);
    } else if (songSelect.value() == 'Cápsula 4') {
      dia1 = map(vol1, 0, 0.5, 50, 3500);
    } else if (songSelect.value() == 'Cápsula 5') {
      dia1 = map(vol1, 0, 0.5, 50, 3500);
    } else if (songSelect.value() == 'Cápsula 6') {
      dia1 = map(vol1, 0, 0.5, 50, 1600);
    } else if (songSelect.value() == 'Cápsula 7') {
      dia1 = map(vol1, 0, 0.5, 50, 1000);
    }
  
    var ampCountTrigger = 3;
    var ampCount = -1;
  
    rectangleCircle();
    noStroke();
    push();
    translate(width / 2, height / 2);
  
    /* if(splashCount.length>1){
       for(var i=0;i<=50;i++){
         shorten(particleVortex[0]);
       }
     }*/
  
    if (dia1 > 500) {
      if (ampCountTrigger === 3) {
        ampCount = 0;
        ampCountTrigger = 0;
      }
  
      if (ampCount % 100 === 0) {
        var newCount = 0;
        //  splashCount.push(newCount);
        particleFormation();
        ampCountTrigger = 1;
      }
    }
  
    //splash();
  
    if (ampCount != -1) {
      ampCount++;
    }
  
    /*  for (var i = 0; i < splashCount.length; i++) {
        splashCount[i]++;
      } */
    pop();
  }
  
  function rectangleCircle() {
    var vol1 = amp2.getLevel();
    // var dia1 = map(vol1, 0, 0.5, 50, 1600);
    rectMode(CENTER);
    noFill();
    circ.push(dia1);
    push();
    translate(width / 2, height / 2);
    rotate(radians(frameCount));
  
    for (var i1 = 0; i1 < circ.length; i1++) {
      strokeWeight(1);
      //fill(94, random(15,210), 0, 3)
      stroke(200, random(0, 15), 100, 250);
      if (i1 % 3 === 0) {
        ellipse(50, 10, circ[i1], circ[i1]);
      } else {
        rect(50, 50, circ[i1] - 50, circ[i1] - 50);
      }
    }
  
    if (linesCount > 20) {
      circ.splice(0, 1);
    }
    pop();
  }
  
