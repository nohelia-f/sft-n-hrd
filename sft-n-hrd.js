var softUnitButtonState = null  
var hardUnitButtonState = null
var resultUnitButtonState = null

// Enter button
const enterButton = document.getElementById("enterbutton");

enterButton.addEventListener('click', function(){
  let softLenght = document.getElementById("softbox").value; //Getting info from softbox
  let hardLenght = document.getElementById("hardbox").value; //Getting info from hardbox
  document.getElementById("result").innerHTML = (hardLenght - softLenght); //Printing the difference on the screen
  document.getElementById('result').style.backgroundColor = 'lavender'
  document.getElementById('result').style.borderRadius = '20 px'
});

//Botones para cambiar de pulgadas a centimetros

const inchesButtonSoft = document.getElementById('inch-soft')
const inchesButtonHard = document.getElementById('inch-hard')
const cmsButtonSoft = document.getElementById('cm-soft')
const cmsButtonHard = document.getElementById('cm-hard')
const cmsButtonResult = document.getElementById('cm-result')
const inchesButtonResult = document.getElementById('inch-result')

function rerenderButtons(){
  console.log('////////////////////////////')
  console.log('state of button units');
  console.log(softUnitButtonState);
  console.log(hardUnitButtonState);
  console.log(resultUnitButtonState);
  console.log('////////////////////////////')
  console.log('about to rerender all the buttons');


//if statements for soft inches and cms
  if (softUnitButtonState == 'cm' || softUnitButtonState == null){
    document.getElementById('inch-soft').style.backgroundColor = 'transparent';
    document.getElementById('inch-soft').style.borderColor = 'transparent';
   } else {
    document.getElementById('inch-soft').style.backgroundColor = 'lavender';
    document.getElementById('inch-soft').style.borderColor = "blueviolet";
    console.log('soft inches should be on')
   }

   if (softUnitButtonState == 'inch' || softUnitButtonState == null){
    document.getElementById('cm-soft').style.backgroundColor = 'transparent';
    document.getElementById('cm-soft').style.borderColor = 'transparent';
   } else {
    document.getElementById('cm-soft').style.backgroundColor = 'lavender';
    document.getElementById('cm-soft').style.borderColor = "blueviolet";
   }
  
  //if statements for hard inches and cms
   if (hardUnitButtonState == 'cm' || hardUnitButtonState == null){
    document.getElementById('inch-hard').style.backgroundColor = 'transparent';
    document.getElementById('inch-hard').style.borderColor = "transparent";
   } else {
    document.getElementById('inch-hard').style.backgroundColor = 'lavender';
    document.getElementById('inch-hard').style.borderColor = 'blueviolet';
   }

   if (hardUnitButtonState == 'inch' || hardUnitButtonState == null){
    document.getElementById('cm-hard').style.backgroundColor = 'transparent';
    document.getElementById('cm-hard').style.borderColor = "transparent";
   } else {
    document.getElementById('cm-hard').style.backgroundColor = 'lavender';
    document.getElementById('cm-hard').style.borderColor = 'blueviolet';
   }

  //if statement for result button inches and cms
   if (resultUnitButtonState == 'cm' || resultUnitButtonState == null){
    document.getElementById('inch-result').style.backgroundColor = 'transparent';
    document.getElementById('inch-result').style.borderColor = "transparent";
   } else {
    document.getElementById('inch-result').style.backgroundColor = 'lavender';
    document.getElementById('inch-result').style.borderColor = 'blueviolet';
   }

   if (resultUnitButtonState == 'inch' || resultUnitButtonState == null){
    document.getElementById('cm-result').style.backgroundColor = 'transparent';
    document.getElementById('cm-result').style.borderColor = "transparent";
   } else {
    document.getElementById('cm-result').style.backgroundColor = 'lavender';
    document.getElementById('cm-result').style.borderColor = 'blueviolet';
   }
};

//Event listeners, functions, log which button I clicked
inchesButtonSoft.addEventListener('click', function(){  
  softUnitButtonState = 'inch'
  rerenderButtons();
});

inchesButtonHard.addEventListener('click', function(){
  hardUnitButtonState = 'inch'
  rerenderButtons();
});

cmsButtonSoft.addEventListener('click', function(){
  softUnitButtonState = 'cm'
  rerenderButtons();
});

cmsButtonHard.addEventListener('click', function(){
  hardUnitButtonState = 'cm'
  rerenderButtons();
});

inchesButtonResult.addEventListener('click', function(){
  resultUnitButtonState = 'inch'
  rerenderButtons();
});

cmsButtonResult.addEventListener('click', function(){
  resultUnitButtonState = 'cm'
  rerenderButtons();
});

/*
//Conversion de pulgadas a centimetros 
const inchesToCmsConverstionFactor = 2.54
let softLenghtInches = 4.5;
let hardLenghtInches = 6.75;

 function convertInchestoCms(inch){
 return inch * inchesToCmsConverstionFactor
 }

 let softLenghtCms = convertInchestoCms(softLenghtInches);
 let hardLenghtCms = convertInchestoCms(hardLenghtInches);

 //Diferencia entre soft y hard
 function differenceBetweenSoftAndHard(hardLenght, softLenght){
    return hardLenght - softLenght
 }

console.log(differenceBetweenSoftAndHard(softLenght, hardLenght));
*/
