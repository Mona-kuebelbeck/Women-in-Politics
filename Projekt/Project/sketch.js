let POF_data;
let arrayOfCountries = [];
let baseLine = 0;
let selectedCountries = ["WLD", "ARE", "BEL", "BOL", "CHL", "CHN", "CRI", "CUB", "DEU", "ECU", "ESP", "FIN", "FRA", "GBR", "IND", "IRL", "IRQ", "ISL", "ITA", "JPN", "MEX", "MKD", "NAM", "NIC", "NOR", "NPL", "NZL", "PER", "PRT", "RUS", "RWA", "SEN", "SWE", "USA", "ZAF"];

let names = [];

let test;

// --------------------------------------------------------  PRELOAD  ----------------------------------------------------
function preload() {
  POF_data = loadTable("data/POF.csv", "csv", "header");
  GII_data = loadTable("data/GII.csv", "csv", "header");
  myFont = loadFont("assets/AvenirNextLTPro-Regular.otf");
} // -------------------------------------------------------  PRELOAD  ----------------------------------------------------

// --------------------------------------------------------  SET UP ----------------------------------------------------
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textFont(myFont);
  // verifying that the data has been uploaded correctly -------------------------
  console.log(" total rows in POF_data: " + POF_data.getRowCount());
  console.log(" total columns in POF_data: " + POF_data.getColumnCount());
  console.log(" total rows in GII_data: " + GII_data.getRowCount());
  console.log(" total columns in GII_data: " + GII_data.getColumnCount());

  baseLine = height - 100;

  //creates and fills country object data --------------------------
  let currentCountry;
  for (let r = 0; r < POF_data.getRowCount(); r++) {
    let currentCountryCODE = POF_data.getString(r, 1);
    if (isThere(currentCountryCODE)) {
      let currentCountryNAME = POF_data.getString(r, 0);
      currentCountry = new Country();
      currentCountry.myName = currentCountryNAME;
      currentCountry.myCode = currentCountryCODE;

      // hier wird der Index ausgelesen/gespeichert
      let currentCountryX97 = POF_data.getNum(r, 66);
      currentCountry.X97 = currentCountryX97;
      let currentCountryX98 = POF_data.getNum(r, 67);
      currentCountry.X98 = currentCountryX98;
      let currentCountryX99 = POF_data.getNum(r, 68);
      currentCountry.X99 = currentCountryX99;
      let currentCountryX00 = POF_data.getNum(r, 69);
      currentCountry.X00 = currentCountryX00;
      let currentCountryX01 = POF_data.getNum(r, 70);
      currentCountry.X01 = currentCountryX01;
      let currentCountryX02 = POF_data.getNum(r, 71);
      currentCountry.X02 = currentCountryX02;
      let currentCountryX03 = POF_data.getNum(r, 72);
      currentCountry.X03 = currentCountryX03;
      let currentCountryX04 = POF_data.getNum(r, 73);
      currentCountry.X04 = currentCountryX04;
      let currentCountryX05 = POF_data.getNum(r, 74);
      currentCountry.X05 = currentCountryX05;
      let currentCountryX06 = POF_data.getNum(r, 75);
      currentCountry.X06 = currentCountryX06;
      let currentCountryX07 = POF_data.getNum(r, 76);
      currentCountry.X07 = currentCountryX07;
      let currentCountryX08 = POF_data.getNum(r, 77);
      currentCountry.X08 = currentCountryX08;
      let currentCountryX09 = POF_data.getNum(r, 78);
      currentCountry.X09 = currentCountryX09;
      let currentCountryX10 = POF_data.getNum(r, 79);
      currentCountry.X10 = currentCountryX10;
      let currentCountryX11 = POF_data.getNum(r, 80);
      currentCountry.X11 = currentCountryX11;
      let currentCountryX12 = POF_data.getNum(r, 81);
      currentCountry.X12 = currentCountryX12;
      let currentCountryX13 = POF_data.getNum(r, 82);
      currentCountry.X13 = currentCountryX13;
      let currentCountryX14 = POF_data.getNum(r, 83);
      currentCountry.X14 = currentCountryX14;
      let currentCountryX15 = POF_data.getNum(r, 84);
      currentCountry.X15 = currentCountryX15;
      let currentCountryX16 = POF_data.getNum(r, 85);
      currentCountry.X16 = currentCountryX16;
      let currentCountryX17 = POF_data.getNum(r, 86);
      currentCountry.X17 = currentCountryX17;
      let currentCountryX18 = POF_data.getNum(r, 87);
      currentCountry.X18 = currentCountryX18;
      let currentCountryX19 = POF_data.getNum(r, 88);
      currentCountry.X19 = currentCountryX19;
      let currentCountryX20 = POF_data.getNum(r, 89);
      currentCountry.X20 = currentCountryX20;
      /*let currentCountryX21 = POF_data.getNum(r, 90);
      currentCountry.X21 = currentCountryX21;*/

      arrayOfCountries.push(currentCountry);
    }
  } // end for  tablaDeAreas --------------------------------------------------

  // save the years data in each country object
  foundCountries = 0;
  for (let r = 0; r < POF_data.getRowCount(); r++) {
    // runs through the whole table
    let currentCountryCODE = POF_data.getString(r, 1);
    if (isThere(currentCountryCODE)) {
      for (let country = 0; country < arrayOfCountries.length; country++) {
        // runs through the whole object list
        if (arrayOfCountries[country].myCode === currentCountryCODE) {
          foundCountries++;
          let index = 41; // before we have: Country Name & Country Code

          for (let year = 1997; year < 2022; year++) {
            let currentPOF = POF_data.getString(r, index);
            let currentPaar = createVector(year, currentPOF); // small array with [year,POF]
            arrayOfCountries[country].arrayOfData.push(currentPaar);
            index++;
          }
        }
      }
    }
  }
  console.log("number of found countries: " + foundCountries);

  for (let country = 0; country < arrayOfCountries.length; country++) {
    //calculates the pixel position of each year in the country
    arrayOfCountries[country].calculatePoints(baseLine);
  }
} // --------------------------------------------------------  SET UP ----------------------------------------------------

// -----------------------------------------------------------  DRAW  ----------------------------------------------------
function draw() {
  const sizeOfText = 14;
  const line50 = height - 602.31 - 0.5;
  background(10);

  // 50% line and base lines
  fill(133, 183, 143, 170);
  text("50%", 8, line50);
  strokeWeight(2);
  stroke(133, 183, 143, 95);
  line(40, line50, width - 250, line50);
  stroke(120);
  line(40, baseLine, width - 225, baseLine);
  line(40, baseLine, 40, 100);

  for (let country = 0; country < arrayOfCountries.length; country++) {
    arrayOfCountries[country].drawCountry();
  }

  noStroke();
  fill(255);
  push();
  textSize(18);
  text("Proportion of seats held by women in national parliaments (%)", 40, 40);
  text("1997-2021", 40, 60);
  pop();

  let currentIndex = 0;

  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 70 + i * 20;
    const xCoordinate = innerWidth - 200;
    if ((mouseY < yCoordinate && mouseY > yCoordinate - sizeOfText && mouseX > xCoordinate)) {
      currentIndex = i;
      arrayOfCountries[currentIndex].overMe = true;
      fill(255);
      text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
    }
    else {
      arrayOfCountries[currentIndex].overMe = false;
      strokeWeight(1);
      fill(120);
      text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
    }
    // if (test === true){
    //   fill(255,0,0);
    //   text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
    // }
  }

  //Draw Timeline
  for (let year = 1997; year < 2022; year++) {
    let x = map(year, 1997, 2021, 50, width - 260);
    push();
    translate(x, baseLine + 50);
    rotate(-PI / 4);
    fill(120);
    noStroke();
    text(year, 0, 0);
    pop();
  }

} // -----------------------------------------------------------  DRAW  ----------------------------------------------------

function mouseReleased() {
  const hoverObj = isOverLegend();
  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 70 + i * 20;
    const xCoordinate = innerWidth - 200;
    if (hoverObj.overIndex === i && hoverObj.overAny && arrayOfCountries[hoverObj.overIndex].selected === false) {
      arrayOfCountries[hoverObj.overIndex].selected = true;
      test = true;
      console.log("click over text (select): " + hoverObj.overIndex + test);

    }
    else if (hoverObj.overIndex === i && hoverObj.overAny && arrayOfCountries[hoverObj.overIndex].selected === true) {
      arrayOfCountries[hoverObj.overIndex].selected = false;
      test = false;
      console.log("click over text (deselect): " + hoverObj.overIndex + test);
    }
  }
}

function isThere(candidate) {
  let answer = false;
  for (let i = 0; i < selectedCountries.length; i++) {
    if (selectedCountries[i] === candidate) answer = true;
  }
  return answer;
}

function isOverLegend() {
  let resultObj = {
    overAny: false,
    overIndex: 0
  }
  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 70 + i * 20;
    const xCoordinate = innerWidth - 200;
    if ((mouseY < yCoordinate && mouseY > yCoordinate - 18 && mouseX > xCoordinate)) {
      resultObj.overIndex = i;
      resultObj.overAny = true;
    }
  }
  return resultObj;
}