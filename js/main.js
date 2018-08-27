//Calculate button
var buttonChoice = document.getElementsByName('button');

//Variable for function
var selectContent = new Array ([]);
var operateur = "nothing";
var choice = " ";
var numTable = 0;
var result = 0;
var afficheResult = document.getElementsByTagName('p')[0];

//For activate event with all buttons
for (let i = 0; i < buttonChoice.length; i++) {

   buttonChoice[i].addEventListener("click", function() {

    counting(this.firstChild.data);

  });
}

function counting(content) {

  //select variable for make the table before the table select
  var dataAfficheResult = afficheResult.firstChild.data;

  //if  content is a number
  if (isNaN(Number(content)) === false) {

        selectContent[numTable].push(content);
        choice = selectContent[numTable].join("");
        afficheResult.innerHTML = choice;

  } else if (content === ",") {
    //If content button is ,

    //Change the content in .
    content = ".";

          //if that the first click
          if (selectContent[numTable].length === 0) {

            selectContent[numTable].push(0 + content);

          } else {
            //add in table
            selectContent[numTable].push(content);
          }

    afficheResult.innerHTML = selectContent[numTable].join("");

  } else if (isNaN(Number(content)) === true) {
    //If the content is a operate  or suppr button
    //If the content is not suppr
    if (numTable < 1 && content !== "AC") {

      numTable++;
      selectContent.push([]);
      afficheResult.innerHTML = content;

    } else if ( content === "AC") {

      operateur = content;
      resultOperateur();

    } else {

      resultOperateur();

    }

    operateur = content;

    //if operateur is = result has begin for affiche result and this reset calculate
    if (operateur.indexOf("=") === 0) {

      selectContent = new Array ([]);
      numTable = 0;
    }

  }
}


function resultOperateur() {

  var numPrev = numTable -1;

    //If operateur is x
    if (operateur.indexOf("x") === 0 && numTable >= 1) {
            //if the number before was the first
            if (numPrev === 0) {
              result = Number(selectContent[numTable].join("")) * Number(selectContent[numPrev].join(""));
            } else {
              //Reverse the number for take the result of operation before
              selectContent[numPrev].reverse();
              result = Number(selectContent[numTable].join("")) * Number(selectContent[numPrev][0]);
            }

    } else if (operateur.indexOf("-") === 0 && numTable >= 1) {
      //If operateur is -

            //if the number before was the first
            if (numPrev === 0) {
              result = Number(selectContent[numPrev].join("")) - Number(selectContent[numTable].join(""));
            } else {
              //Reverse the number for take the result of operation before
              selectContent[numPrev].reverse();
              result = Number(selectContent[numPrev][0]) - Number(selectContent[numTable].join(""));
            }

    } else if (operateur.indexOf("+") === 0 && numTable >= 1) {
      //If operateur is +

            //if the number before was the first
            if (numPrev === 0) {
              result =   Number(selectContent[numPrev].join("")) + Number(selectContent[numTable].join(""));
            } else {
              //Reverse the number for take the result of operation befores
              selectContent[numPrev].reverse();
              result =  Number(selectContent[numPrev][0]) + Number(selectContent[numTable].join(""));
            }

    } else if (operateur.indexOf("÷") === 0 && numTable >= 1) {
      //If operateur is /

            //if the number before was the first
            if (numPrev === 0) {
              result =   Number(selectContent[numPrev].join("")) / Number(selectContent[numTable].join(""));
            } else {
              //Reverse the number for take the result of operation befores
              selectContent[numPrev].reverse();
              result =  Number(selectContent[numPrev][0]) / Number(selectContent[numTable].join(""));
            }

    }

    //That's for add result in the previous table
    selectContent[numTable].push(result);
    afficheResult.innerHTML = result;
    //Going to the next table
    numTable++;
    selectContent.push([]);

    //if the operateur is AC calculat reset
    if (operateur.indexOf("AC") === 0) {
      selectContent = new Array([]);
      numTable = 0;
      afficheResult.innerHTML = " ";
    }

  }
