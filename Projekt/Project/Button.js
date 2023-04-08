class Button {
  constructor(_x, _y, _sZ, _tl) {
    this.myX = _x;
    this.myY = _y;
    this.mySize = _sZ;
    this.myTitle = _tl;
    this.myColor = color(50);
    this.myOverMeColor = color(100);
    this.myStrokeColor = color(150);
    this.mouseOverMe = false;
    this.selected = false;
    this.myTextSize = 18;
  }

  display() {
    this.mouseOverMe = mouseX > this.myX && mouseX < this.myX + this.mySize && mouseY > this.myY && mouseY < this.myY + this.mySize;

    fill(this.myColor);
    if (this.mouseOverMe) fill(this.myOverMeColor);

    strokeWeight(1);
    stroke(this.myStrokeColor);
    rect(this.myX, this.myY, this.mySize, this.mySize);

    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(this.myTextSize);
    text(this.myTitle, this.myX + this.mySize / 2, this.myY + this.mySize / 2 + 5);

    if (this.selected) {
      strokeWeight(3);
      noFill();
      stroke(200);
      rect(this.myX, this.myY, this.mySize, this.mySize);
    }
  }

  releasedOverMe() {
    if (this.mouseOverMe) this.selected = !this.selected;
  }
} // end of class
