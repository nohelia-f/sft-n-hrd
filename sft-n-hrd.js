<<<<<<< Updated upstream
// //function addNumbers(x, y){
// return x + y
// }

// const totalAge = addNumbers(30, 31);

// console.log(totalAge);
var inchesToCmsConverstionFactor = 2.54
const brianLenghtInches = 4.5;
const brianLenghtInchesWhenHard = 6.75;
=======
// Event listener para las cajas de input
const enterButton= document.getElementById("enterbutton");

enterbutton.addEventListener('click', function(){
  let softLenght = document.getElementById("softbox").value;
  
});

//Conversion de pulgadas a centimetros 
const inchesToCmsConvertionFactor = 2.54
let softLenghtInches = 4.5;
let hardLenghtInches = 6.75;
>>>>>>> Stashed changes

 function convertInchestoCms(inch){
 return inch * inchesToCmsConverstionFactor
 }

<<<<<<< Updated upstream
 function differenceBetweenSoftAndHard(lenghtSoft, lenghtHard){
    return lenghtHard - lenghtSoft
 }

 const lenghtHard = 17.145
 const lenghtSoft = 11.43
 const brianLenghtCms = convertInchestoCms(brianLenghtInches);
 const brianLenghtCmsWhenHard = convertInchestoCms(brianLenghtInchesWhenHard);
=======
 let softLenghtCms = convertInchestoCms(softLenghtInches);
 let hardLenghtCms = convertInchestoCms(hardLenghtInches);
>>>>>>> Stashed changes

 //Diferencia entre soft y hard
 function differenceBetweenSoftAndHard(hardLenght, softLenght){
    return hardLenght - softLenght
 }

console.log(brianLenghtCms, brianLenghtCmsWhenHard);
console.log(differenceBetweenSoftAndHard(lenghtSoft, lenghtHard));