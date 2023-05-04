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
      strokeWeight(3);
      //fill(20, random(0,15), 91, 150)
      if (i1 % 3 === 0) {
        stroke(235, 235, 235, 100);
        point(10, 10, circ[i1], circ[i1]);
      } else {
        
        stroke(28, 119, 195, 100);
        line(50, 50, circ[i1] - 50, circ[i1] - 50);
      }
    }
  
    if (linesCount > 20) {
      circ.splice(0, 1);
    }
    pop();
  }
  