let POF_data;
let arrayOfCountries = [];
let baseLine = 0;
let selectedCountries = ["ARE", "BEL", "BLR", "BOL", "CHL", "CHN", "CRI", "CUB", "DEU", "ECU", "ESP", "ETH", "FIN", "FRA", "GBR", "IND", "IRL", "IRQ", "ISL", "ITA", "JPN", "MEX", "MKD", "NAM", "NIC", "NOR", "NPL", "NZL", "PER", "PRT", "RUS", "RWA", "SEN", "SWE", "USA", "WLD", "ZAF"];

let names = [];

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
    //console.log('CODE: ' + currentCountryCODE);
    if (isThere(currentCountryCODE)) {
      let currentCountryNAME = POF_data.getString(r, 0);
      currentCountry = new Country();
      currentCountry.myName = currentCountryNAME;
      currentCountry.myCode = currentCountryCODE;
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
    // countries
    //calculates the pixel position of each year in the country
    arrayOfCountries[country].calculatePoints(baseLine);
  }
} // --------------------------------------------------------  SET UP ----------------------------------------------------

// -----------------------------------------------------------  DRAW  ----------------------------------------------------
function draw() {
  const sizeOfText = 18;
  const line50 = height-602.31-0.5;
  background(10);

  for (let country = 0; country < arrayOfCountries.length; country++) {
    arrayOfCountries[country].drawCountry();
  }

  noStroke();
  fill(255);
  textSize(sizeOfText);
  text("Proportion of seats held by women in national parliaments (%)", 25, 40);
  text("1997-2021", 25, 60);

  let currentIndex = 0;

  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 70 + i * 20;
    const xCoordinate = innerWidth - 200;
    //add an event listener if the mouse is released over the text
    if ((mouseY < yCoordinate && mouseY > yCoordinate - sizeOfText && mouseX > xCoordinate)){
      currentIndex = i;
      if (mouseIsPressed) {
        arrayOfCountries[currentIndex].overMe = true;
        console.log(arrayOfCountries[currentIndex]);
      } else {
        arrayOfCountries[currentIndex].overMe = false;
      }

    } 
    
    text(arrayOfCountries[i].myName, xCoordinate, yCoordinate); // draw the text
  }

  // 50% line and base lines
  fill(255, 0, 0);
  strokeWeight(3);
  text("50%", 0, 240);
  stroke(255, 0, 0);
  line(40, line50, width - 250, line50);
  stroke(255);
  strokeWeight(3);
  line(40, baseLine, width - 225, baseLine);
  line(40, baseLine, 40, 100);

  //Timeline
  for (let year = 1997; year < 2022; year++) {
    let x = map(year, 1997, 2021, 50, width - 260);
    push();
    translate(x, baseLine + 50);
    rotate(-PI / 4);
    noStroke();
    fill(255);
    text(year, 0, 0);
    pop();
  }

  console.log(isOverLegend());
} // -----------------------------------------------------------  DRAW  ----------------------------------------------------

function mouseReleased() {
  const hoverObj = isOverLegend();
  for (let i = 0; i < selectedCountries.length; i++) {
    if (hoverObj.overIndex === i && hoverObj.overAny) {
      arrayOfCountries[hoverObj.overIndex].selected = !arrayOfCountries[hoverObj.overIndex].selected;
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

function isOverLegend(){
  let resultObj = {
    overAny: false,
    overIndex: 0
  }
  for (let i = 0; i < selectedCountries.length; i++) {
    const yCoordinate = 70 + i * 20;
    const xCoordinate = innerWidth - 200;
    //add an event listener if the mouse is released over the text
    if ((mouseY < yCoordinate && mouseY > yCoordinate - 18 && mouseX > xCoordinate)){
      resultObj.overIndex = i;
      resultObj.overAny = true;
      } 
  }
  return resultObj;
}