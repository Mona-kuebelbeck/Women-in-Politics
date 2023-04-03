let POF_data;
let arrayOfCountries = [];
let baseLine = 0;
let selectedCountries = ['WLD', 'ARE', 'BRA', 'CAN', 'CHN', 'DEU', 'FRA', 'GBR', 'ITA', 'JPN', 'MEX', 'RUS', 'USA','IND','CUB' ];

let names = [];

// --------------------------------------------------------  PRELOAD  ----------------------------------------------------
function preload(){
    POF_data = loadTable('data/POF.csv', 'csv', 'header');
    GII_data = loadTable('data/GII.csv', 'csv', 'header');
}// -------------------------------------------------------  PRELOAD  ----------------------------------------------------



// --------------------------------------------------------  SET UP ----------------------------------------------------
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
    // verifying that the data has been uploaded correctly -------------------------
    console.log(' total rows in POF_data: ' + POF_data.getRowCount() ); 
    console.log(' total columns in POF_data: ' + POF_data.getColumnCount() );
    console.log(' total rows in GII_data: ' + GII_data.getRowCount() );
    console.log(' total columns in GII_data: ' + GII_data.getColumnCount() );

    baseLine = height-100;

    //creates and fills country object data --------------------------
   let currentCountry;
    for (let r = 0; r < POF_data.getRowCount(); r++) {
        let currentCountryCODE = POF_data.getString(r, 1);
        //console.log('CODE: ' + currentCountryCODE);
        if (isThere(currentCountryCODE)){
            let currentCountryNAME = POF_data.getString(r, 0);
            currentCountry = new Country();
            currentCountry.myName = currentCountryNAME;
            currentCountry.myCode = currentCountryCODE;
            arrayOfCountries.push(currentCountry);
        }
    } // end for  tablaDeAreas --------------------------------------------------

    // save the years data in each country object
    foundCountries = 0;
    for (let r = 0; r < POF_data.getRowCount(); r++) { // runs through the whole table
        let currentCountryCODE = POF_data.getString(r, 1);
        if (isThere(currentCountryCODE)){
            for (let country = 0; country < arrayOfCountries.length; country++){ // runs through the whole object list
                if(arrayOfCountries[country].myCode === currentCountryCODE){
                    foundCountries++;
                    let index = 41; // before we have: Country Name & Country Code

                    for (let year = 1997; year < 2022; year++) {
                        let currentPOF = POF_data.getString(r, index);
                        let currentPaar = createVector (year, currentPOF); // small array with [year,POF]
                        arrayOfCountries[country].arrayOfData.push(currentPaar);
                        index++;
                    }
                }
            }
        }
    }
    console.log('number of found countries: ' + foundCountries );

    for (let country = 0; country < arrayOfCountries.length; country++) { // countries
        //calculates the pixel position of each year in the country
        arrayOfCountries[country].calculatePoints(baseLine);
    }
}// --------------------------------------------------------  SET UP ----------------------------------------------------


// -----------------------------------------------------------  DRAW  ----------------------------------------------------
function draw() {
    background(10);

    for (let country = 0; country < arrayOfCountries.length; country++) { // countries
        arrayOfCountries[country].drawCountry();
    }

    noStroke();
    fill(255);
    textSize(18);
    text('Proportion of seats held by women in national parliaments (%)', 25, 40);
    text('1997-2021', 25, 60);
    text('World Average', innerWidth-180, 100);
    for (let country = 0; country < selectedCountries.length; country++) {
        text(arrayOfCountries[country].myName, innerWidth-180, 125+country*25);
    }

    noStroke();
    fill(255,0,0);
    text('50%', 1275, baseLine-590);
    stroke(255, 0, 0);
    line(25, baseLine-595, width-250, baseLine-595);
    stroke(255);
    strokeWeight(3);
    line(25, baseLine, width-225, baseLine);
    line(25, baseLine, 25, 100);

    for (let year = 1997; year < 2022; year++) {
        let x = map(year, 1997, 2021, 50, width-250);
        //put the text diagonally 20 px lower than the line
        push();
        translate(x, baseLine+50);
        rotate(-PI/4);
        noStroke();
        fill(255);
        text(year, 0, 0);
        pop();
        
    }

}// -----------------------------------------------------------  DRAW  ----------------------------------------------------


function mouseReleased() {
    for (let country = 0; country < arrayOfCountries.length; country++) { // countries
        arrayOfCountries[country].clickOverMe();
    }
}


function isThere (candidate) {
    let answer = false;
    for (let i = 0; i < selectedCountries.length; i++) {
        if (selectedCountries[i] === candidate) answer = true;
    }
    return (answer);
}