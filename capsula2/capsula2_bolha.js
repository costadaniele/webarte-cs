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
      fill(200, 100, j * 5, 250);
    } else {
     // noFill();
      fill(200, random(0, 15), 100, 250);
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
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    else {
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + 70 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    spcount++;
  }
}

