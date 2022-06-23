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

const inchesButtonSoft = document.getElementById('inches-soft')
const inchesButtonHard = document.getElementById('inches-hard')
const cmsButtonSoft = document.getElementById('cms-soft')
const cmsButtonHard = document.getElementById('cms-hard')
const cmsButtonResult = document.getElementById('cms-result')
const inchesButtonResult = document.getElementById('inches-result')

function rerenderButtons(){
  console.log('////////////////////////////')
  console.log('state of button units');
  console.log(softUnitButtonState);
  console.log(hardUnitButtonState);
  console.log(resultUnitButtonState);
  console.log('////////////////////////////')
  console.log('about to rerender all the buttons');
//if statements for soft inches and cms
  if (softUnitButtonState == 'inch'){
    document.getElementById('inches-soft').style.backgroundColor = 'lavender';
    document.getElementById('inches-soft').style.borderColor = "blueviolet";
   } else {
    document.getElementById('inches-soft').style.backgroundColor = 'transparent';
    document.getElementById('inches-soft').style.borderColor = 'transparent';
    console.log('soft inches should be off')
   }

   if (softUnitButtonState == 'cm'){
    document.getElementById('cms-soft').style.backgroundColor = 'lavender';
    document.getElementById('cms-soft').style.borderColor = "blueviolet";
   } else {
    document.getElementById('cm-soft').style.backgroundColor = 'transparent';
    document.getElementById('cm-soft').style.borderColor = 'transparent';
   }
  
  //if statements for hard inches and cms
   if (hardUnitButtonState == 'inch'){
    document.getElementById('inches-hard').style.backgroundColor = 'lavender';
    document.getElementById('inches-hard').style.borderColor = "blueviolet";
   } else {
    document.getElementById('inches-hard').style.backgroundColor = 'transparent';
    document.getElementById('inches-hard').style.borderColor = 'transparent';
   }

   if (hardUnitButtonState == 'cm'){
    document.getElementById('cms-hard').style.backgroundColor = 'lavender';
    document.getElementById('cms-hard').style.borderColor = "blueviolet";
   } else {
    document.getElementById('cm-hard').style.backgroundColor = 'transparent';
    document.getElementById('cm-hard').style.borderColor = 'transparent';
   }

  //if statement for result button inches and cms
   if (resultUnitButtonState == 'inch'){
    document.getElementById('inches-result').style.backgroundColor = 'lavender';
    document.getElementById('inches-result').style.borderColor = "blueviolet";
   } else {
    document.getElementById('inches-result').style.backgroundColor = 'transparent';
    document.getElementById('inches-result').style.borderColor = 'transparent';
   }

   if (resultUnitButtonState == 'cm'){
    document.getElementById('cms-result').style.backgroundColor = 'lavender';
    document.getElementById('cms-result').style.borderColor = "blueviolet";
   } else {
    document.getElementById('cms-result').style.backgroundColor = 'transparent';
    document.getElementById('cms-result').style.borderColor = 'transparent';
   }
};

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


//event listener, functions, log which button I clicked

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
