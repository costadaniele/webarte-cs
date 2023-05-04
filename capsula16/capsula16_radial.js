function radial(){
    var level1 = amplitude.getLevel();
    var level2=map(level1,0,volume.value(),0,225);
    
    noFill();
    stroke(200, random(0, 15), 100, 250);
    var spectrum = fft1.analyze();
    // console.log(spectrum.length);
    collecFreq[countArray] = [];
  
    for (var i = 0; i < spectrum.length - 5; i++) {
      var amp = spectrum[i];
      mappedSpectrum1 = map(amp, 0, 120, 50, 120);
      freqAtTime[i] = mappedSpectrum1;
      mappedAngle[i] = map(i, 0, spectrum.length - 10 - 11, 0, 270);
      collecFreq[countArray][i] = mappedSpectrum1;
    }
  
    translate(width / 2, height / 2);
    rotate(frameCount / 200);
    for (var j = 0; j < collecFreq.length; j++) {
      // beginShape();
      //noFill();
  
      for (var k = 0; k < collecFreq[j].length; k++) {
        push();
       // stroke('white');
        var kolor = map(collecFreq[j][k], 100, 400, 0, 400);
        var size = map(kolor, 0, 20, 5, 50);
        var x = collecFreq[j][k] * cos(radians(mappedAngle[k]));
        var y = collecFreq[j][k] * sin(radians(mappedAngle[k]));
  
        if (collecFreq[j][k] > 20) {
        fill(kolor, level2, mappedAngle[k], 15);
        } else {
         noFill();
         stroke(194, 1, 94);
        //stroke('white');
        }
        ellipse(x, y, size, size);
      }
    }
    if (radialCount > 20) {
      collecFreq[countArray - 10].splice(0, 50);
    }
    countArray++;
    radialCount++;
  }