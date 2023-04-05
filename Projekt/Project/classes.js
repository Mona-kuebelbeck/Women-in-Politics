class Country {
  constructor() {
    this.myName = "";
    this.myCode = "";
    this.arrayOfData = [];
    this.arrayOfpoints = [];
    this.overMe = false;
    this.selected = false;
    this.pointSize;

    this.punktfarbeVeryHigh = color(255, 0, 0, 3);
    this.punktfarbeHigh = color(255, 104, 70, 3);
    this.punktfarbeMiddle = color(255, 158, 129, 3);
    this.punktfarbeLow = color(255, 207, 191, 3);
    this.punktfarbeVeryLow = color(255, 255, 255, 3);

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

    //Farbe Punkte hover/selected
    this.myColorOver = color(255, 0, 0);
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

    //if (this.myCode === "WLD") {
      //this.selected = true;
    //}
  }

  drawCountry() {
    this.isOverMe();

    for (let year = 0; year < 25; year++) {
      if (this.overMe || this.selected) {
        fill(this.myColorOver);
        stroke(this.myColorOver);
        //strokeWeight(3);
      } else {
        fill(this.myColorNormal);
        stroke(this.myColorNormal);
        //strokeWeight(1);
      }

      // if-Schleifen Wahnsinn für verschiedene Punktefarben qwq

      //Größen: 8,12, 16, 20, 24

      noStroke();

      if (this.arrayOfData[0] && this.X97 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[0] && this.X97 > 0.1 && this.X97 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[0] && this.X97 > 0.2 && this.X97 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[0] && this.X97 > 0.3 && this.X97 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[0] && this.X97 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[0].x, this.arrayOfpoints[0].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[1] && this.X98 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[1] && this.X98 > 0.1 && this.X98 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[1] && this.X98 > 0.2 && this.X98 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[1] && this.X98 > 0.3 && this.X98 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[1] && this.X98 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[1].x, this.arrayOfpoints[1].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[2] && this.X99 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[2] && this.X99 > 0.1 && this.X99 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[2] && this.X99 > 0.2 && this.X99 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[2] && this.X99 > 0.3 && this.X99 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[2] && this.X99 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[2].x, this.arrayOfpoints[2].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[3] && this.X00 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[3] && this.X00 > 0.1 && this.X00 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[3] && this.X00 > 0.2 && this.X00 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[3] && this.X00 > 0.3 && this.X00 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[3] && this.X00 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[3].x, this.arrayOfpoints[3].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[4] && this.X01 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[4].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[4] && this.X01 > 0.1 && this.X01 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[4].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[4] && this.X01 > 0.2 && this.X01 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[4].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[4] && this.X01 > 0.3 && this.X01 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[4].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[4] && this.X01 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[4].x, this.arrayOfpoints[4].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[5] && this.X02 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[5] && this.X02 > 0.1 && this.X02 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[5] && this.X02 > 0.2 && this.X02 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[5] && this.X02 > 0.3 && this.X02 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[5] && this.X02 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[5].x, this.arrayOfpoints[5].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[6] && this.X03 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[6] && this.X03 > 0.1 && this.X03 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[6] && this.X03 > 0.2 && this.X03 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[6] && this.X03 > 0.3 && this.X03 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[6] && this.X03 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[6].x, this.arrayOfpoints[6].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[7] && this.X04 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[7] && this.X04 > 0.1 && this.X04 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[7] && this.X04 > 0.2 && this.X04 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[7] && this.X04 > 0.3 && this.X04 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[7] && this.X04 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[7].x, this.arrayOfpoints[7].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[8] && this.X05 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[8] && this.X05 > 0.1 && this.X05 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[8] && this.X05 > 0.2 && this.X05 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[8] && this.X05 > 0.3 && this.X05 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[8] && this.X05 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[8].x, this.arrayOfpoints[8].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[9] && this.X06 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[9] && this.X06 > 0.1 && this.X06 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[9] && this.X06 > 0.2 && this.X06 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[9] && this.X06 > 0.3 && this.X06 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[9] && this.X06 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[9].x, this.arrayOfpoints[9].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[10] && this.X07 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[10] && this.X07 > 0.1 && this.X07 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[10] && this.X07 > 0.2 && this.X07 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[10] && this.X07 > 0.3 && this.X07 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[10] && this.X07 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[10].x, this.arrayOfpoints[10].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[11] && this.X08 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[11] && this.X08 > 0.1 && this.X08 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[11] && this.X08 > 0.2 && this.X08 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[11] && this.X08 > 0.3 && this.X08 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[11] && this.X08 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[11].x, this.arrayOfpoints[11].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[12] && this.X09 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[12] && this.X09 > 0.1 && this.X09 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[12] && this.X09 > 0.2 && this.X09 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[12] && this.X09 > 0.3 && this.X09 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[12] && this.X09 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[12].x, this.arrayOfpoints[12].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[13] && this.X10 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[13] && this.X10 > 0.1 && this.X10 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[13] && this.X10 > 0.2 && this.X10 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[13] && this.X10 > 0.3 && this.X10 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[13] && this.X10 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[13].x, this.arrayOfpoints[13].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[14] && this.X11 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[14] && this.X11 > 0.1 && this.X11 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[14] && this.X11 > 0.2 && this.X11 < 0.3) {
        this.pointSize = 16
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[14] && this.X11 > 0.3 && this.X11 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[14] && this.X11 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[14].x, this.arrayOfpoints[14].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[15] && this.X12 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[15] && this.X12 > 0.1 && this.X12 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[15] && this.X12 > 0.2 && this.X12 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[15] && this.X12 > 0.3 && this.X12 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[15] && this.X12 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[15].x, this.arrayOfpoints[15].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[16] && this.X13 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[16] && this.X13 > 0.1 && this.X13 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[16] && this.X13 > 0.2 && this.X13 < 0.3) {
        this.pointSize = 16
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[16] && this.X13 > 0.3 && this.X13 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[16] && this.X13 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[16].x, this.arrayOfpoints[16].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[17] && this.X14 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[17] && this.X14 > 0.1 && this.X14 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[17] && this.X14 > 0.2 && this.X14 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[17] && this.X14 > 0.3 && this.X14 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[17] && this.X14 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[17].x, this.arrayOfpoints[17].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[18] && this.X15 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[18] && this.X15 > 0.1 && this.X15 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[18] && this.X15 > 0.2 && this.X15 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[18] && this.X15 > 0.3 && this.X15 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[18] && this.X15 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[18].x, this.arrayOfpoints[18].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[19] && this.X16 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[19] && this.X16 > 0.1 && this.X16 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[19] && this.X16 > 0.2 && this.X16 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[19] && this.X16 > 0.3 && this.X16 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[19] && this.X16 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[19].x, this.arrayOfpoints[19].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[20] && this.X17 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[20] && this.X17 > 0.1 && this.X17 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[20] && this.X17 > 0.2 && this.X17 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[20] && this.X17 > 0.3 && this.X17 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[20] && this.X17 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[20].x, this.arrayOfpoints[20].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[21] && this.X18 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[21] && this.X18 > 0.1 && this.X18 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[21] && this.X18 > 0.2 && this.X18 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[21] && this.X18 > 0.3 && this.X18 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[21] && this.X18 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[21].x, this.arrayOfpoints[21].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[22] && this.X19 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[22] && this.X19 > 0.1 && this.X19 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[22] && this.X19 > 0.2 && this.X19 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[22] && this.X19 > 0.3 && this.X19 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[22] && this.X19 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[22].x, this.arrayOfpoints[22].y, this.pointSize, this.pointSize);
      }


      if (this.arrayOfData[23] && this.X20 < 0.1) {
        this.pointSize = 24;
        fill(this.punktfarbeVeryLow);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[23] && this.X20 > 0.1 && this.X20 < 0.2) {
        this.pointSize = 20;
        fill(this.punktfarbeLow);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[23] && this.X20 > 0.2 && this.X20 < 0.3) {
        this.pointSize = 16;
        fill(this.punktfarbeMiddle);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[23] && this.X20 > 0.3 && this.X20 < 0.5) {
        this.pointSize = 12;
        fill(this.punktfarbeHigh);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, this.pointSize, this.pointSize);
      }
      if (this.arrayOfData[23] && this.X20 > 0.5) {
        this.pointSize = 8;
        fill(this.punktfarbeVeryHigh);
        ellipse(this.arrayOfpoints[23].x, this.arrayOfpoints[23].y, this.pointSize, this.pointSize);
      }

      // if-Schleifen Wahnsinn: Ende xD

      if (year > 0 && !this.overMe) {
        //Linie normal
        stroke(220, 220, 220, 50);
        strokeWeight(1);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
        this.punktfarbeVeryHigh = color(255, 0, 0, 3);
        this.punktfarbeHigh = color(255, 104, 70, 3);
        this.punktfarbeMiddle = color(255, 158, 129, 3);
        this.punktfarbeLow = color(255, 207, 191, 3);
        this.punktfarbeVeryLow = color(255, 255, 255, 3);
      } else if (year > 0 && this.overMe) {
        //Linie hover
        stroke(255);
        strokeWeight(2);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
        this.punktfarbeVeryHigh = color(255, 0, 0, 3);
        this.punktfarbeHigh = color(255, 104, 70, 3);
        this.punktfarbeMiddle = color(255, 158, 129, 3);
        this.punktfarbeLow = color(255, 207, 191, 3);
        this.punktfarbeVeryLow = color(255, 255, 255, 3);
      }

      //This is for the country code and line to appear when the country is clicked
      if (year > 0 && this.selected) {
        stroke(255);
        strokeWeight(2.5);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
        fill(200);
        noStroke();
        textSize(14);
        text(this.myCode, this.arrayOfpoints[this.arrayOfData.length - 1].x + 5, this.arrayOfpoints[this.arrayOfData.length - 1].y);
        this.punktfarbeVeryHigh = color(255, 0, 0);
        this.punktfarbeHigh = color(255, 104, 70);
        this.punktfarbeMiddle = color(255, 158, 129);
        this.punktfarbeLow = color(255, 207, 191);
        this.punktfarbeVeryLow = color(255, 255, 255);
      }
    }
  }

  isOverMe() {
    let ifAny = false;
    for (let year = 0; year < this.arrayOfData.length; year++) {
      let distance = dist(mouseX, mouseY, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      if (distance < this.pointSize) {
        fill(255);
        noStroke();
        textSize(14);
        text(this.myName + " (" + this.arrayOfData[year].x + ")", this.arrayOfpoints[year].x, this.arrayOfpoints[year].y - 45);
        names.push(this.myName);
        text(this.arrayOfData[year].y + " %", this.arrayOfpoints[year].x, this.arrayOfpoints[year].y - 25);
        push();
        noFill();
        stroke(255);
        strokeWeight(1.5);
        ellipse(this.arrayOfpoints[year].x, this.arrayOfpoints[year].y, this.pointSize + 5, this.pointSize + 5)
        pop();
        ifAny = true;
      }
    }
  }

  clickOverMe() {
    for (let year = 0; year < this.arrayOfData.length; year++) {
      let distance = dist(mouseX, mouseY, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      if (distance < 5) this.selected = !this.selected;
    }
  }
} // end of class
