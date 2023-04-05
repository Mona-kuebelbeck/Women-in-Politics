class Country {
  constructor() {
    this.myName = "";
    this.myCode = "";
    this.arrayOfData = [];
    this.arrayOfpoints = [];
    this.overMe = false;
    this.selected = false;

    this.X97 = 0;
    this.X98 = 0;
    this.X99 = 0;
    this.X00 = 0;
    this.X01 = 0;
    this.X02 = 0;
    this.X03 = 0;
    this.X04 = 0;
    this.X05 = 0;
    this.X06 = 0;
    this.X07 = 0;
    this.X08 = 0;
    this.X09 = 0;
    this.X10 = 0;
    this.X11 = 0;
    this.X12 = 0;
    this.X13 = 0;
    this.X14 = 0;
    this.X15 = 0;
    this.X16 = 0;
    this.X17 = 0;
    this.X18 = 0;
    this.X19 = 0;
    this.X20 = 0;
    this.X21 = 0;

    //this.myColorNormal = color(220, 220, 220, 50);
    //Farbe Punkte hover/selected
    this.myColorOver = color(255);
    //Farbe Punkte normal
    this.myColorNormal = color(255, 100, 100);

    this.numYears = 24; // for the distribution of the points in X
    this.stepX = (width - 300) / this.numYears;
    this.xBorder = 50;
  }

  calculatePoints(lineaBase) {
    for (let year = 0; year < this.arrayOfData.length; year++) {
      let secX = this.xBorder + year * this.stepX;
      let secY = map(this.arrayOfData[year].y, 0, 65, lineaBase, 80);
      let currentPoint = createVector(secX, secY);
      this.arrayOfpoints.push(currentPoint);
    }

    if (this.myCode === "WLD") {
      this.selected = true;
    }
  }

  drawCountry() {
    this.isOverMe();

    for (let year = 0; year < 25; year++) {
      if (this.overMe || this.selected) {
        fill(this.myColorOver);
        stroke(this.myColorOver);
        strokeWeight(3);
      } else {
        fill(this.myColorNormal);
        stroke(this.myColorNormal);
        strokeWeight(1);
      }

      // if-Schleifen Wahnsinn für verschiedene Punktefarben qwq (Größe ließe sich auch noch anpassen ig)
      // mehr Zwischenstufen? z.B. bei 0.2 und 0.6 (ggf. auch einfach in 100er-Schritten)
      let pointsize = 8;
      let punktfarbeHigh = color(255,100,100);
      let punktfarbeMiddle = color(100,100,255);
      let punktfarbeLow = color(100,255,100);
      let punktfarbebasic = color(220,220,220, 50);

      noStroke();

      if (this.arrayOfData[0] && this.X97 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[0] && this.X97 > 0.1 && this.X97 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[0] && this.X97 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[1] && this.X98 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[1] && this.X98 > 0.1 && this.X98 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[1] && this.X98 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[2] && this.X99 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[2] && this.X99 > 0.1 && this.X99 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[2] && this.X99 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[3] && this.X00 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[2].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[3] && this.X00 > 0.1 && this.X00 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[3] && this.X00 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[4] && this.X01 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[2].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[4] && this.X01 > 0.1 && this.X01 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[2].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[4] && this.X01 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[4].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[5] && this.X02 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[5] && this.X02 > 0.1 && this.X02 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[5] && this.X02 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[6] && this.X03 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[6] && this.X03 > 0.1 && this.X03 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[6] && this.X03 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[7] && this.X04 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[7] && this.X04 > 0.1 && this.X04 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[7] && this.X04 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[8] && this.X05 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[8] && this.X05 > 0.1 && this.X05 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[8] && this.X05 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[9] && this.X06 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[9] && this.X06 > 0.1 && this.X06 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[9] && this.X06 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[10] && this.X07 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[10] && this.X07 > 0.1 && this.X07 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[10] && this.X07 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[11] && this.X08 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[11] && this.X08 > 0.1 && this.X08 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[11] && this.X08 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[12] && this.X09 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[12] && this.X09 > 0.1 && this.X09 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[12] && this.X09 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[13] && this.X10 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[13] && this.X10 > 0.1 && this.X10 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[13] && this.X10 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[14] && this.X11 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[14] && this.X11 > 0.1 && this.X11 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[14] && this.X11 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[15] && this.X12 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[15] && this.X12 > 0.1 && this.X12 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[15] && this.X12 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[16] && this.X13 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[16] && this.X13 > 0.1 && this.X13 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[16] && this.X13 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[17] && this.X14 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[17] && this.X14 > 0.1 && this.X14 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[17] && this.X14 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[18] && this.X15 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[18] && this.X15 > 0.1 && this.X15 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[18] && this.X15 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[19] && this.X16 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[19] && this.X16 > 0.1 && this.X16 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[19] && this.X16 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[20] && this.X17 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[20] && this.X17 > 0.1 && this.X17 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[20] && this.X17 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[21] && this.X18 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[21] && this.X18 > 0.1 && this.X18 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[21] && this.X18 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[22] && this.X19 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[22] && this.X19 > 0.1 && this.X19 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[22] && this.X19 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, pointsize, pointsize);
      } 


      if (this.arrayOfData[23] && this.X20 < 0.1) {
        fill(punktfarbeLow);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[23] && this.X20 > 0.1 && this.X20 < 0.4) {
        fill(punktfarbeMiddle);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, pointsize, pointsize);
      } 
      if (this.arrayOfData[23] && this.X20 > 0.4) {
        fill(punktfarbeHigh);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, pointsize, pointsize);
      } 



      // if-Schleifen Wahnsinn: Ende xD

      if (year > 0 && !this.overMe) {
        //Linie normal
        stroke(220, 220, 220, 50);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      } else if (year > 0 && this.overMe) {
        //Linie hover/selected
        stroke(255);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      }

      //This is for the country code to appear when the country is clicked
      if (year > 0 && this.selected) {
        stroke(255);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
        fill(200);
        noStroke();
        textSize(18);
        text(this.myCode, this.arrayOfpoints[this.arrayOfData.length - 1].x + 5, this.arrayOfpoints[this.arrayOfData.length - 1].y);
      }
    }
  }

  isOverMe() {
    let ifAny = false;
    for (let year = 0; year < this.arrayOfData.length; year++) {
      let distance = dist(mouseX, mouseY, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      if (distance < 5) {
        fill(255);
        noStroke();
        textSize(18);
        text(this.myName + " (" + this.arrayOfData[year].x + ")", this.arrayOfpoints[year].x, this.arrayOfpoints[year].y - 45);
        names.push(this.myName);
        text(this.arrayOfData[year].y + " %", this.arrayOfpoints[year].x, this.arrayOfpoints[year].y - 25);
        ifAny = true;
      }
    }
    //this.overMe = ifAny;
  }

  clickOverMe() {
    for (let year = 0; year < this.arrayOfData.length; year++) {
      let distance = dist(mouseX, mouseY, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      if (distance < 5) this.selected = !this.selected;
    }
  }
} // end of class
