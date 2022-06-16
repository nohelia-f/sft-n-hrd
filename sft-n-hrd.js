// Event listener para las cajas de input
const enterButton= document.getElementById("enterbutton");

enterbutton.addEventListener('click', function(){
  let softLenght = document.getElementById("softbox").value;
  
});

//Conversion de pulgadas a centimetros 
const inchesToCmsConvertionFactor = 2.54
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

console.log(brianLenghtCms, brianLenghtCmsWhenHard);
console.log(differenceBetweenSoftAndHard(lenghtSoft, lenghtHard));