let POF_data;
let GII_data;
let arrayOfCountries = [];
let selectedCountries = ["WLD", "ARE", "BEL", "BOL", "CHN", "CRI", "CUB", "DEU", "ECU", "ESP", "FIN", "FRA", "GBR", "IND", "IRQ", "ISL", "ITA", "JPN", "MEX", "MKD", "NAM", "NIC", "NOR", "NZL", "PER", "PRT", "RUS", "RWA", "SEN", "SWE", "USA", "ZAF", "CAN"];
let names = [];
let countrySelected;
let baseLine;
const sizeOfText = 14;
let myButton;
let year = 0;

// --------------------------------------------------------  PRELOAD  ----------------------------------------------------
function preload() {
  POF_data = loadTable("data/POF.csv", "csv", "header");
  GII_data = loadTable("data/GII.csv", "csv", "header");
  myFont = loadFont("assets/AvenirNextLTPro-Regular.otf");
}
// -------------------------------------------------------  PRELOAD  ----------------------------------------------------

// --------------------------------------------------------  SET UP ----------------------------------------------------
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textFont(myFont);
  myButton = new Button(1370, 750, 60, "play");

  baseLine = height - 150;

  //creates and fills country object data
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
      let currentCountryX21 = POF_data.getNum(r, 90);
      currentCountry.X21 = currentCountryX21;

      arrayOfCountries.push(currentCountry);
    }
  }

  // save the year data in each country object
  foundCountries = 0;
  for (let r = 0; r < POF_data.getRowCount(); r++) {
    let currentCountryCODE = POF_data.getString(r, 1);
    if (isThere(currentCountryCODE)) {
      for (let country = 0; country < arrayOfCountries.length; country++) {
        if (arrayOfCountries[country].myCode === currentCountryCODE) {
          foundCountries++;
          let index = 41;
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

  //calculates the pixel position of each year in the country
  for (let country = 0; country < arrayOfCountries.length; country++) {
    arrayOfCountries[country].calculatePoints(baseLine);
  }
}
// --------------------------------------------------------  SET UP ----------------------------------------------------

// -----------------------------------------------------------  DRAW  ----------------------------------------------------
function draw() {
  const line50 = 180.0625 - 0.5;
  background(10);
  myButton.display();
  textAlign(LEFT);

  if (myButton.selected && frameCount % 30 === 0) {
    if (year < selectedCountries.length) {
      if (year > 0) {
        arrayOfCountries[year].selected = true;
        arrayOfCountries[year - 1].selected = false;
        year++;
      } else {
        arrayOfCountries[year].selected = true;
        arrayOfCountries[arrayOfCountries.length - 1].selected = false;
        year++;
      }
    } else {
      year = 0;
    }
  }

  // 50% line and base lines
  fill(255, 100, 120, 200);
  noStroke();
  push();
  textSize(14);
  text("50%", 25, line50 + 3);
  pop();
  strokeWeight(2);
  stroke(255, 100, 120, 200);
  line(60, line50, width - 200, line50);
  stroke(120);
  line(60, baseLine, width - 200, baseLine);
  line(60, baseLine, 60, 30);

  // draw the country objects
  for (let country = 0; country < arrayOfCountries.length; country++) {
    arrayOfCountries[country].drawCountry();
  }

  // draw the legend
  noStroke();
  fill(255);
  textSize(17);
  push();
  translate(20, 100);
  rotate(-HALF_PI);
  text("Proportion Of Seats Held By Women In National Parliaments (%)", -615, 25);
  pop();
  text("Gender Inequality Index (GII):", 60, 800);
  text("high", 320, 840);
  text("low", 500, 840);

  //check if mouse is over a country and draw the name
  let currentIndex = 0;
  for (let i = 0; i < arrayOfCountries.length; i++) {
    const yCoordinate = 60 + i * 20;
    const xCoordinate = innerWidth - 170;
    if (mouseY < yCoordinate && mouseY > yCoordinate - sizeOfText && mouseX > xCoordinate) {
      currentIndex = i;
      fill(255);
      textSize(sizeOfText);
      text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
    } else {
      fill(120);
      textSize(sizeOfText);
      text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
    }
  }

  //Draw Timeline
  for (let year = 1997; year < 2022; year++) {
    let x = map(year, 1997, 2021, 75, width - 225);
    push();
    translate(x, baseLine + 40);
    rotate(-PI / 4);
    fill(120);
    noStroke();
    text(year, 0, 0);
    pop();
  }

  //Highlight the names of the selected countries
  if (countrySelected === true) {
    for (let i = 0; i < selectedCountries.length; i++) {
      const yCoordinate = 60 + i * 20;
      const xCoordinate = innerWidth - 170;
      if (arrayOfCountries[i].selected === true) {
        fill(255);
        text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
      }
    }
  } else {
    for (let i = 0; i < selectedCountries.length; i++) {
      const yCoordinate = 60 + i * 20;
      const xCoordinate = innerWidth - 170;
      if (arrayOfCountries[i].selected === true) {
        fill(255);
        text(arrayOfCountries[i].myName, xCoordinate, yCoordinate);
      }
    }
  }
}
// -----------------------------------------------------------  DRAW  ----------------------------------------------------

// -----------------------------------------------------------  FUNCTIONS  ----------------------------------------------------
function mouseReleased() {
  const hoverObj = isOverLegend();
  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 60 + i * 20;
    const xCoordinate = innerWidth - 200;
    if (hoverObj.overIndex === i && hoverObj.overAny && arrayOfCountries[hoverObj.overIndex].selected === false) {
      arrayOfCountries[hoverObj.overIndex].selected = true;
      countrySelected = true;
    } else if (hoverObj.overIndex === i && hoverObj.overAny && arrayOfCountries[hoverObj.overIndex].selected === true) {
      arrayOfCountries[hoverObj.overIndex].selected = false;
      countrySelected = false;
    }
  }
  myButton.releasedOverMe();
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
    overIndex: 0,
  };

  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 60 + i * 20;
    const xCoordinate = innerWidth - 200;
    if (mouseY < yCoordinate && mouseY > yCoordinate - 18 && mouseX > xCoordinate) {
      resultObj.overIndex = i;
      resultObj.overAny = true;
    }
  }
  return resultObj;
}

function filterCountriesEU() {
  //filter the countries that are in the EU
  arrayOfCountries = [];
  selectedCountries = ["AUT", "BEL", "BGR", "CYP", "CZE", "DNK", "EST", "FIN", "FRA", "DEU", "GRC", "HRV", "HUN", "IRL", "ITA", "LTU", "LUX", "LVA", "MLT", "NLD", "POL", "PRT", "ROU", "SVK", "ESP", "SVN", "SWE"];
  setup();
}

function filterCountriesGDP() {
  //filter the countries that have the highest GDP
  arrayOfCountries = [];
  selectedCountries = ["USA", "CHN", "JPN", "DEU", "GBR", "IND", "FRA", "ITA", "CAN", "BRA", "RUS", "AUS", "KOR", "ESP", "IDN"];
  setup();
}

// -----------------------------------------------------------  END OF FUNCTIONS  ----------------------------------------------------
