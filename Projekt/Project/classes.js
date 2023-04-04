class Country {
  constructor() {
    this.myName = "";
    this.myCode = "";
    this.arrayOfData = [];
    this.arrayOfpoints = [];
    this.overMe = false;
    this.selected = false;

    this.myColorNormal = color(220, 220, 220, 50);
    this.myColorOver = color(255);

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

    for (let year = 0; year < this.arrayOfData.length; year++) {
      if (this.overMe || this.selected) {
        fill(this.myColorOver);
        stroke(this.myColorOver);
        strokeWeight(3);
      } else {
        fill(this.myColorNormal);
        stroke(this.myColorNormal);
        strokeWeight(1);
      }

      ellipse(this.arrayOfpoints[year].x, this.arrayOfpoints[year].y, 4, 4);
      stroke(this.myColorNormal);
      if (year > 0 && !this.overMe) line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      else if (year > 0 && this.overMe) {
        stroke(255);
        line(this.arrayOfpoints[year - 1].x, this.arrayOfpoints[year - 1].y, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      }

      //This is for the country code to appear when the country is clicked
      if (this.selected) {
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
    this.overMe = ifAny;
  }

  clickOverMe() {
    for (let year = 0; year < this.arrayOfData.length; year++) {
      let distance = dist(mouseX, mouseY, this.arrayOfpoints[year].x, this.arrayOfpoints[year].y);
      if (distance < 5) this.selected = !this.selected;
    }
  }
} // end of class
