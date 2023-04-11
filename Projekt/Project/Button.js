class Button {
  constructor(_x, _y, _sZX, _sZY, _tl) {
    this.myX = _x;
    this.myY = _y;
    this.mySizeX = _sZX;
    this.mySizeY = _sZY;
    this.myTitle = _tl;
    this.myColor = color(50);
    this.myOverMeColor = color(100);
    this.myStrokeColor = color(150);
    this.mouseOverMe = false;
    this.selected = false;
    this.myTextSize = 14;
  }

  display() {
    this.mouseOverMe = mouseX > this.myX && mouseX < this.myX + this.mySizeX && mouseY > this.myY && mouseY < this.myY + this.mySizeY;

    fill(this.myColor);
    if (this.mouseOverMe) fill(this.myOverMeColor);

    strokeWeight(1);
    stroke(this.myStrokeColor);
    rect(this.myX, this.myY, this.mySizeX, this.mySizeY);

    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(this.myTextSize);
    text(this.myTitle, this.myX + this.mySizeX / 2, this.myY + this.mySizeY / 2 + 5);

    if (this.selected) {
      strokeWeight(3);
      noFill();
      stroke(200);
      rect(this.myX, this.myY, this.mySizeX, this.mySizeY);
    }
  }

  releasedOverMe() {
    if (this.mouseOverMe) this.selected = !this.selected;
  }
} // end of class
